import { ButtonType } from "@/types/ButtonTypes";
import React from "react";

const Button: React.FC<ButtonType> = ({ bg, text, className }) => {
    return (
        <button
            className={`border border-white h-12 rounded-full px-6 font-medium ${className} ${
                bg
                    ? "bg-lime-400 text-neutral-950"
                    : "border-white text-white bg-transparent"
            }`}
        >
            {text}
        </button>
    );
};

export default Button;
