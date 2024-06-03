"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

// View Based Animations
export default function Four() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        console.log(isInView);
    }, [isInView]);

    return (
        <>
            <div
                style={{
                    height: "150vh",
                }}
            ></div>
            <motion.div
                style={{
                    height: "50vh",
                    width: "100%",
                    backgroundColor: "black",
                }}
                initial={{
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                }}
                transition={{
                    duration: 1,
                }}
            ></motion.div>
            <div
                ref={ref}
                style={{
                    height: "50vh",
                    width: "100%",
                    backgroundColor: isInView ? "blue" : "red",
                    transition: "1s background",
                }}
            ></div>
        </>
    );
}
