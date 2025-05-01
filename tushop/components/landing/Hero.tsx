import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

function Hero() {
  return (
    <section id="#home" className="section-margin">
      <div className="flex flex-col items-center max-lg:gap-16 lg:flex-row lg:justify-between">
        {/* Hero Header */}
        <div className="flex flex-col justify-center max-lg:items-center max-lg:text-center">
          <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
            <h2 className="header-1">
              Transform your warehouse with <br />{" "}
              <span className="inline-block bg-gradient-to-r from-main-600 via-main-600 to-main-700 bg-clip-text text-transparent">
                real-time inventory control
              </span>{" "}
            </h2>
            <p className="max-w-[350px] text-sm text-desc md:max-w-[500px] md:text-base lg:text-xl">
              Automated warehouse management solution that eliminates manual errors, 
              speeds up order processing, and gives you complete inventory visibility.
            </p>
          </div>
          {/* Hero CTA */}
          <div className="mt-5 flex gap-3 max-[390px]:flex-col md:mt-10 md:items-center md:gap-5">
            <Link href={"/signin"}>
              <Button className="bg-main-500 py-6 text-[12px] font-semibold text-white duration-200 hover:bg-main-300 max-md:w-[145px] md:w-[230px] md:text-base lg:text-lg/none">
                🚀 Get Started
              </Button>
            </Link>
            <Link href={"#features"}>
              <Button
                variant={"outline"}
                className="border-2 border-main-500 py-6 text-[12px] font-semibold text-white duration-200 hover:bg-main-300 max-md:w-[145px] md:w-[230px] md:text-base lg:text-lg/none"
              >
                See How It Works
              </Button>
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex items-center justify-center">
          <Image
            src={"assets/hero-illustration.svg"}
            width={500}
            height={300}
            alt="Warehouse management dashboard illustration"
            className="w-[80%] lg:w-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;