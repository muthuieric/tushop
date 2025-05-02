import type { Metadata } from "next";
import AuthProvider from "@/AuthProvider";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: {
    template: "Tushop | %s",
    default: "Tushop",
  },
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="dark">
      <AuthProvider>
        <div>
          {children}
          <Toaster />
        </div>
      </AuthProvider>
    </main>
  );
}
