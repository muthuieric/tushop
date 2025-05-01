import { landingPageNavbarLinks } from "@/constants";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-[#2B2C2F] p-6 md:px-20 lg:px-24 lg:py-10 xl:px-36">
      <div className="flex flex-col gap-6 md:flex-row md:justify-between">
        {/* Footer Logo & Description */}
        <div>
          <div>
          <Link href={"#"} aria-label="Tushop WMS - Warehouse Management System">
    <span className="text-xl font-bold md:text-1xl lg:text-2xl">
      <span className="inline-block bg-gradient-to-r from-main-600 via-main-600 to-main-700 bg-clip-text text-transparent">
        Tushop
      </span>
    </span>
  </Link>
            <p className="mt-3 max-w-[360px] text-justify text-sm text-desc">
            Tushop{"'"}s Warehouse Management System provides real-time inventory control 
            and streamlined logistics operations for businesses across Kenya.
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-desc">
                <MapPin size={16} />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-desc">
                <Phone size={16} />
                <span>+254 700 123456</span>
              </div>
            </div>
            <p className="mt-6 font-medium text-desc">© 2025 Tushop Logistics</p>
          </div>
        </div>

        <div className="flex gap-12 lg:gap-36">
          {/* Original Menu - Unchanged */}
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Menu</h4>
            </div>
            <div className="flex flex-col gap-2">
              {landingPageNavbarLinks.map((link) => (
                <Link
                  href={link.path}
                  key={link.path}
                  className="w-fit text-desc hover:underline"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Contact</h4>
            </div>
            <div className="flex flex-col gap-3">
              <Link 
                href="mailto:wms@tushop.co.ke" 
                className="flex items-center gap-2 text-sm text-desc hover:underline"
              >
                <Mail size={16} />
                <span>wms@tushop.co.ke</span>
              </Link>
              <div className="flex items-center gap-3 pt-2">
                <Link href="#" className="hover:opacity-80">
                  <Image
                    src="/assets/github.svg"
                    width={28}
                    height={28}
                    alt="GitHub"
                  />
                </Link>
                <Link href="#" className="hover:opacity-80">
                  <Image
                    src="/assets/instagram.svg"
                    width={28}
                    height={28}
                    alt="Instagram"
                  />
                </Link>
                <Link href="#" className="hover:opacity-80">
                  <Mail size={28} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;