"use client";

import { easeInOut, motion, MotionConfig } from "framer-motion";

// Basics Of Motion
export default function Two() {
    return (
        <div
            style={{
                height: "150vh",
            }}
        >
            <MotionConfig transition={{ duration: 0.125, ease: easeInOut }}>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9, rotate: "2.5deg" }}
                    className="p-3 bg-purple-800 text-white rounded font-bold"
                >
                    Click me!
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9, rotate: "-2.5deg" }}
                    className="p-3 bg-red-800 text-white rounded font-bold"
                >
                    Click me!
                </motion.button>
            </MotionConfig>
        </div>
    );
}
