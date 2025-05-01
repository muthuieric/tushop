import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

function Banner() {
  return (
    <section className="section-margin">
      <div className="flex items-center justify-between gap-y-6 rounded-md bg-gradient-to-tr from-gray-800 to-zinc-700 p-6 max-lg:flex-col md:p-8 lg:p-10">
        {/* Banner Header */}
        <div className="flex flex-col gap-2 md:gap-3">
          <h3 className="landing-section-title">
            Ready to Transform <br /> Your Warehouse Operations?
          </h3>
          <p className="landing-section-description max-w-[450px]">
            Implement our WMS today and gain real-time inventory control, faster order fulfillment, and data-driven warehouse management.
          </p>
          <Link href={"/register"}>
            <Button className="w-[120px] bg-main-500 text-base font-semibold text-white hover:bg-main-400">
              🚀 Get Started
            </Button>
          </Link>
        </div>

        {/* Banner Image */}
        <div>
          <Image
            src={"/assets/landing-banner.svg"}  // Consider using a warehouse-themed image
            width={500}
            height={300}
            alt="Warehouse management system dashboard preview"
            className="rounded-lg border border-gray-600"
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;

