"use client";
import Tag from "@/components/Tag";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;
const words = text.split(" ");
export default function Introduction() {
    const scrollTarget = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: scrollTarget,
        offset: ["start end", "end end"],
    });
    const [currentWord, setCurrentWord] = useState(0);
    const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);
    useEffect(() => {
        wordIndex.on("change", (latest) => {
            setCurrentWord(latest);
        });
    }, [wordIndex]);

    return (
        <section className="py-28">
            <div className="container">
                <div className="sticky top-20 md:top-28">
                    <div className="flex justify-center">
                        <Tag>Introducting Layers</Tag>
                    </div>
                    <div className="text-center mt-4">
                        <span className="text-3xl text-center font-medium mt-10">
                            Your creative process deserves better.
                        </span>
                        <span className="text-white/15 text-3xl max-w-[50vw] flex flex-wrap gap-x-6 text-4xl gap-y-6 py-6 mx-auto text-center">
                            {words.map((x, wordIndex) => (
                                <span
                                    key={wordIndex}
                                    className={twMerge(
                                        wordIndex < currentWord && "text-white transition duration-500"
                                    )}
                                >
                                    {x}
                                </span>
                            ))}
                        </span>
                        <span className="text-lime-400 text-3xl">
                            That&apos;s why we build Layers
                        </span>
                    </div>
                </div>
                <div className="h-[150vh]" ref={scrollTarget}></div>
            </div>
        </section>
    );
}
