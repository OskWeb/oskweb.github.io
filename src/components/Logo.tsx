import { motion } from "framer-motion";
import { useState } from "react";

export const Logo = ({ url }) => {

    // const [isHovered, setIsHovered] = useState(false);

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

            {/* <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: isHovered ? 3 : 1 }}
                transition={{ duration: 0.3 }}
                className="divAnimated"
            /> */}
        </div>


    )

}