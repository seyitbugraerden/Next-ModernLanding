"use client";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

import logo from "@/assets/images/logo.svg";
import Button from "@/components/Button";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <section className="py-4 lg:py-8 fixed w-full top-0 z-50">
                <div className="container max-w-5xl">
                    <div className="border border-white/15 rounded-[27px] md:rounded-full bg-neutral-950/70 backdrop-b">
                        <div
                            className="grid grid-cols-2 lg:grid-cols-3 p-2 px-4 md:pr-2 items-center 
                "
                        >
                            <div>
                                <Image
                                    src={logo}
                                    width={160}
                                    height={36}
                                    alt="brand logo"
                                />
                            </div>
                            <div className="hidden lg:block justify-self-center">
                                <nav className="flex gap-6 items-center font-medium">
                                    {navLinks.map((x, idx) => (
                                        <Link href={x.href} key={idx}>
                                            {x.label}
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                            <div className="justify-self-end">
                                {!isOpen ? (
                                    <IoMenu
                                        className="md:hidden inline-block"
                                        size={48}
                                        onClick={() => {
                                            setIsOpen(!isOpen);
                                        }}
                                    />
                                ) : (
                                    <IoMdClose
                                        className="md:hidden inline-block"
                                        size={48}
                                        onClick={() => {
                                            setIsOpen(!isOpen);
                                        }}
                                    />
                                )}
                                <Button
                                    text="Log In"
                                    className="mx-4 hidden md:inline-block"
                                />
                                <Button
                                    text="Sign Up"
                                    bg={true}
                                    className=" hidden md:inline-block"
                                />
                            </div>
                        </div>
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: "auto" }}
                                    exit={{ height: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="flex flex-col items-center gap-4 py-4">
                                        {navLinks.map((x, idx) => (
                                            <a
                                                key={idx}
                                                href={x.href}
                                                className=""
                                            >
                                                {x.label}
                                            </a>
                                        ))}
                                        <Button text="Log In" />
                                        <Button text="Sign Up" bg={true} />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
            <div className="pb-[86px] md:pb-[98px] lg:px-[130px]"></div>
        </>
    );
}
