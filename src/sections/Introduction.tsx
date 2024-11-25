import Tag from "@/components/Tag";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;

export default function Introduction() {
    return (
        <section className="py-28">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Introducting Layers</Tag>
                </div>

                <div>
                    <span className="text-4xl text-center font-medium mt-10">
                        Your creative process deserves better.
                    </span>
                    <span className="text-white/15">{text}</span>
                    <span className="text-lime-400 ">
                        That&apos;s why we build Layers
                    </span>
                </div>
            </div>
        </section>
    );
}
