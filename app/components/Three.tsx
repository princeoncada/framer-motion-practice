"use client";

import { motion, useAnimationControls } from "framer-motion";

// Animation Controls
export default function Three() {
    const controls = useAnimationControls();

    const handleClick = () => {
        controls.start("flip");
    };

    return (
        <div
            style={{
                height: "150vh",
            }}
        >
            <button
                onClick={handleClick}
                className="p-3 bg-purple-800 text-white rounded font-bold"
            >
                Flip it!
            </button>
            <motion.div
                style={{
                    width: 150,
                    height: 150,
                    backgroundColor: "black",
                }}
                variants={{
                    initial: {
                        rotate: "0deg",
                    },
                    flip: {
                        rotate: "360deg",
                    },
                }}
                initial="initial"
                animate={controls}
            ></motion.div>
        </div>
    );
}
