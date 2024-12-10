"use client";
import React, { Fragment } from "react";
import Image from "next/image";
import { IntegrationColumnsTypes } from "@/types/IntegrationItemTypes";
import { motion } from "framer-motion";

const IntegrationsColumns: React.FC<IntegrationColumnsTypes> = ({
    integrations,
    className,
    reverse,
}) => {
    return (
        <motion.div
            initial={{ y: reverse ? "-50%" : 0 }}
            animate={{ y: reverse ? "0" : "-50%" }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className={`flex flex-col gap-4 pb-4 ${className}`}
        >
            {Array.from({ length: 2 }).map((_, idx) => (
                <Fragment key={idx}>
                    {integrations.map((x, idx) => (
                        <div
                            key={idx}
                            className="bg-neutral-900 border border-white/10 rounded-3xl p-6 "
                        >
                            <div className="flex justify-center items-center">
                                <Image
                                    src={x.icon}
                                    alt={x.name}
                                    className="size-24"
                                />
                            </div>
                            <h3 className="text-3xl text-center mt-6">
                                {x.name}
                            </h3>
                            <p className="text-center text-white/50 mt-2">
                                {x.description}
                            </p>
                        </div>
                    ))}
                </Fragment>
            ))}
        </motion.div>
    );
};

export default IntegrationsColumns;
