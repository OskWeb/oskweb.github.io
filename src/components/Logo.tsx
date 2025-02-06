import { motion } from "framer-motion";
import { useState } from "react";

export const Logo = ({ url }) => {

    return (
        <div className="logoBox">

            <a
                className="logo"
                href={url}
            >
                <span>Oscar</span>
                <span>Aranda</span>
            </a>
            <div className="divAnimated"></div>
        </div>


    )

}