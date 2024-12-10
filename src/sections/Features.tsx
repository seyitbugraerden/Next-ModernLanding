import Tag from "@/components/Tag";
import FeatureCard from "@/components/FeatureCard";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg";
import avatar4 from "@/assets/images/avatar-owen-garcia.jpg";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import Key from "@/components/Key";
const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Features</Tag>
                </div>
                <h2 className="text-6xl font-medium text-center mt-6">
                    Where power meets{" "}
                    <span className="text-lime-400">simplicity</span>
                </h2>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
                    <FeatureCard
                        title="Real-time Collaboration"
                        description="Work together seamless with conflict-free team
                                editing"
                        className="md:col-span-2 lg:col-span-1 group"
                    >
                        <div className="flex items-center justify-center h-full">
                            <Avatar className="z-40">
                                <Image
                                    src={avatar1}
                                    alt="Avatar1"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-indigo-500 z-30">
                                <Image
                                    src={avatar2}
                                    alt="Avatar2"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-amber-500 z-20">
                                <Image
                                    src={avatar3}
                                    alt="Avatar3"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-transparent rounded-full group-hover:border-green-500 transition">
                                <div className="size-full bg-neutral-700 inline-flex justify-center items-center gap-1 relative">
                                    <Image
                                        src={avatar4}
                                        alt="Avatar 4"
                                        className="absolute size-full rounded-full opacity-0 group-hover:opacity-100 transition "
                                    />
                                    {Array.from({ length: 3 }).map((_, i) => (
                                        <span
                                            key={i}
                                            className="size-1.5 rounded-full bg-white inline-flex"
                                        ></span>
                                    ))}
                                </div>
                            </Avatar>
                        </div>
                    </FeatureCard>
                    <FeatureCard
                        title="Interactive Prototyping"
                        description="Engage your clients with prototypes that react
                                to user actions"
                        className="md:col-span-2 lg:col-span-1 group"
                    >
                        <div className="flex items-center justify-center">
                            <p className="text-4xl font-extrabold text-white/20 text-center ">
                                We&apos;ve achived{" "}
                                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative">
                                    <span>incredible</span>
                                    <video
                                        src="/gif-incredible.mp4"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="absolute bottom-full left-1/2 -translate-x-1/2  rounded-xl shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition"
                                    />
                                </span>{" "}
                                growth this year
                            </p>
                        </div>
                    </FeatureCard>
                    <FeatureCard
                        title="Keyboard Quick Actions"
                        description="Powerful comments to help you create designs
                                more quickly"
                        className="md:col-span-2 md:col-start-2 lg:col-span-1 group"
                    >
                        <div className="flex items-center justify-center gap-4 h-full">
                            <Key className="w-28 group-hover:outline outline-transparent group-hover:outline-lime-400 outline-2 transition outline-offset-4 translate-y-1 ">
                                shift
                            </Key>
                            <Key className="outline-lime-400 outline-2 transition outline-offset-4 translate-y-1 ">
                                alt
                            </Key>
                            <Key className="outline-lime-400 outline-2 transition outline-offset-4 translate-y-1 ">
                                C
                            </Key>
                        </div>
                    </FeatureCard>
                </div>
                <div className="mt-8 flex flex-wrap gap-3 justify-center">
                    {features.map((x: string, idx: number) => {
                        return (
                            <div
                                key={idx}
                                className="bg-neutral-900 border border-white/10 inline-flex px-3 py-1.5 md:py-3 rounded-2xl gap-3 items-center"
                            >
                                <span className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex justify-center text-xl">
                                    &#10038;
                                </span>
                                <span className="font-medium">{x}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
