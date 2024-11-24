import Button from "@/components/Button";

export default function Hero() {
    return (
        <section className="py-24">
            <div className="container">
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
