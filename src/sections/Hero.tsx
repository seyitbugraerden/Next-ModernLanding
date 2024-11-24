import Button from "@/components/Button";
import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="py-24 overflow-x-clip">
            <div className="container relative">
                <div className="absolute -left-32 top-16">
                    <Image
                        src={designExample1Image}
                        alt="Design Example 1 Image"
                    />
                </div>
                <div className="absolute -right-64 top-16">
                    <Image
                        src={designExample2Image}
                        alt="Design Example 2 Image"
                    />
                </div>
                <div className="flex justify-center">
                    <div className="flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-970 font-semibold">
                        ✨ $7.5M seed round raised
                    </div>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
                    Impactful design, created effortlesly
                </h1>
                <p className="text-center text-xl text-white/50 mt-8">
                    Design tools shouldn&apos;t slow you down
                </p>
                <form className="grid grid-cols-3 border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
                    <input
                        className="bg-transparent px-4 focus:outline-none col-span-2"
                        type="email"
                        placeholder="Enter your email"
                    />
                    <Button
                        text="Sign Up"
                        bg={true}
                        className="whitespace-nowrap max-w-lg"
                    />
                </form>
            </div>
        </section>
    );
}
