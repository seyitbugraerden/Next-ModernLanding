import Tag from "@/components/Tag";
import { div } from "framer-motion/client";

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
        <section>
            <div className="container">
                <Tag>Features</Tag>
                <h2>
                    Where power meets <span>simplicity</span>
                </h2>
                <div>
                    <div>
                        <div></div>
                        <div>
                            <h3>Real-time Collaboration</h3>
                            <p>
                                Work together seamless with conflict-free team
                                editing
                            </p>
                        </div>
                    </div>
                    <div>
                        <div></div>
                        <div>
                            <h3>Interactive Prototyping</h3>
                            <p>
                                Engage your clients with prototypes that react
                                to user actions
                            </p>
                        </div>
                    </div>
                    <div>
                        <div></div>
                        <div>
                            <h3>Keyboard Quick Actions</h3>
                            <p>
                                Powerful comments to help you create designs
                                more quickly
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    {features.map((x: string, idx: number) => {
                        return (
                            <div key={idx}>
                                <span></span>
                                <span>{x}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
