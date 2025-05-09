"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { registerSchema } from "@/types/validations";
import { useEffect, useState } from "react";
import { BASE_URL } from "@/constants";
import { useToast } from "../ui/use-toast";
import { ArrowLeft, Eye, EyeOff, Lock, Mail, UserRound } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

function RegisterForm() {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const router = useRouter();
  const session = useSession();
  const { toast } = useToast();

  useEffect(() => {
    if (session.status === "authenticated") {
      router.replace("/");
    }
  }, [session, router]);

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    setSubmitting(true);

    try {
      const res = await fetch(`${BASE_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: values.fullname,
          email: values.email,
          password: values.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setSubmitting(false);

        toast({
          title: "Uh oh! Something went wrong 😵",
          description: data.message,
          variant: "destructive",
        });
      } else {
        setSubmitting(false);
        toast({
          title: "Success 🎉",
          description: data.message,
          variant: "success",
        });
        form.reset();
        router.push("/signin");
      }
    } catch (error: any) {
      setSubmitting(false);
      throw new Error(error);
    }
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4 sm:max-w-[380px]"
        >
          <section className="mb-2 space-y-2 text-center md:text-start">
            <Link
              href={"/"}
              className="desc-2 mb-4 flex items-center gap-1 text-sm hover:text-slate-600"
            >
              <ArrowLeft size={16} />
              Return to Homepage
            </Link>
            <div>
  <h2 className="logo mb-3 text-4xl font-bold md:mb-6 md:text-5xl">
    <span className="bg-gradient-to-r from-main-600 via-main-600 to-main-700 bg-clip-text text-transparent">
      Tushop 
    </span>
  </h2>
</div>
<p className="desc-2 text-sm md:text-base">
  Create your account to access real-time inventory tracking, automated order processing, 
  and powerful reporting tools for your logistics operations.
</p>
          </section>
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <div className="flex items-center justify-center rounded-md border border-input dark:bg-zinc-700">
                  <UserRound size={24} className="mx-2" />
                  <FormControl>
                    <Input
                      placeholder="ex: user"
                      {...field}
                      autoComplete="off"
                      className="rounded-l-none"
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <div className="flex items-center justify-center rounded-md border border-input dark:bg-zinc-700">
                  <Mail size={24} className="mx-2" />
                  <FormControl>
                    <Input
                      placeholder="user@mail.com"
                      {...field}
                      autoComplete="off"
                      className="rounded-l-none"
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <div className="relative flex items-center justify-center rounded-md border border-input dark:bg-zinc-700">
                  <Lock size={24} className="mx-2" />
                  <FormControl>
                    <Input
                      placeholder={showPassword ? "Your Password" : "******"}
                      {...field}
                      autoComplete="off"
                      type={showPassword ? "text" : "password"}
                      className="rounded-l-none"
                    />
                  </FormControl>
                  <div
                    className="desc-2 absolute right-3 cursor-pointer"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {!showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                  </div>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={submitting}
            className="mt-2 w-full bg-main-500 text-white hover:bg-main-400"
          >
            {submitting ? "Registering..." : "Register"}
          </Button>
          <Link href={"/signin"} className="mt-2 text-center text-sm">
            Already have an account?{" "}
            <span className="font-semibold text-main-500 underline">
              Sign In
            </span>
          </Link>
          <div className="desc-2 mt-6 text-center text-sm md:mt-12 md:text-start">
            <p>© 2025 Tushop</p>
          </div>
        </form>
      </Form>
    </>
  );
}

export default RegisterForm;
