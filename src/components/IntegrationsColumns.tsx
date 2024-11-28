import React from "react";
import Image from "next/image";

type IntegrationColumnsTypes = {
    className?: string;
    integrations: IntegrationItemTypes[];
};

type IntegrationItemTypes = {
    name: string;
    icon: string;
    description: string;
};
const IntegrationsColumns: React.FC<IntegrationColumnsTypes> = ({
    integrations,
    className,
}) => {
    return (
        <div className={`flex flex-col gap-4 pb-4 ${className}`}>
            {integrations.map((x, idx) => (
                <div
                    key={idx}
                    className="bg-neutral-900 border border-white/10 rounded-3xl p-6 "
                >
                    <div className="flex justify-center items-center">
                        <Image src={x.icon} alt={x.name} className="size-24" />
                    </div>
                    <h3 className="text-3xl text-center mt-6">{x.name}</h3>
                    <p className="text-center text-white/50 mt-2">
                        {x.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default IntegrationsColumns;
