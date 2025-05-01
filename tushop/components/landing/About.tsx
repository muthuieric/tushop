import { aboutWalkthrough } from "@/constants";
import Image from "next/image";

function About() {
  return (
    <section id="about" className="section-margin">
      {/* <div className="grid items-center gap-6 max-lg:place-items-center lg:grid-cols-2"> */}
        {/* About Image */}
        {/* <div className="order-2 lg:order-1">
          <Image
            src={"/assets/"}
            width={500}
            height={500}
            alt="Warehouse management system dashboard"
            className="md:size-[500px] lg:size-[600px]"
          />
        </div> */}

        {/* About Content */}
        <div className="order-1 flex flex-col gap-6 max-lg:items-center max-lg:text-center lg:order-2">
          <div className="space-y-2 md:space-y-3">
            <h3 className="landing-section-title">About Our WMS Solution</h3>
            <p className="landing-section-description text-center lg:text-justify">
              Our Warehouse Management System revolutionizes Tushop Logistics' operations by replacing manual processes with automated inventory tracking, real-time updates, and streamlined order fulfillment - reducing errors and improving efficiency.
            </p>
          </div>

          {/* Key Features */}
          <div>
            <div className="flex flex-col gap-4 md:gap-8">
              {aboutWalkthrough.map((about) => (
                <div
                  key={about.title}
                  className="flex flex-col items-center gap-3 lg:flex-row"
                >
                  <div className="flex size-14 items-center justify-center rounded-lg bg-accent-orange lg:size-20">
                    {about.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-semibold md:text-2xl">{about.title}</h4>
                    <p className="max-w-[400px] text-sm text-desc md:text-base lg:text-lg/none">
                      {about.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
}

export default About;