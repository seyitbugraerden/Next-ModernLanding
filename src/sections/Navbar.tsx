import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import menu from "@/assets/images/menu.svg";
import { IoMenu } from "react-icons/io5";
const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    return (
        <section className="py-4">
            <div className="container">
                <div className="grid grid-cols-2 border border-white/15 rounded-full p-2 px-4 items-center">
                    <div>
                        <Image
                            src={logo}
                            width={36}
                            height={36}
                            alt="brand logo"
                        />
                    </div>
                    <div className="justify-self-end">
                        <IoMenu />
                    </div>
                </div>
            </div>
        </section>
    );
}
