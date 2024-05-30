"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function One() {
	const [isVisible, setIsVisible] = useState(false);
	return (
		<>
			<motion.button
				onClick={() => {
					setIsVisible((x) => !x);
				}}
				className="p-3 bg-purple-800 text-white rounded font-bold"
				layout
			>
				SHOW / HIDE
			</motion.button>
			<AnimatePresence mode="popLayout">
				{isVisible && (
					<motion.div
						className="w-24 h-24 bg-black"
						initial={{
							rotate: "0deg",
							scale: 0,
							y: 0,
						}}
						animate={{
							rotate: "180deg",
							scale: 1,
							y: [0, 150, -150, -150, 0],
						}}
						exit={{
							rotate: "0deg",
							scale: 0,
							y: 0,
						}}
						transition={{
							duration: 1,
							ease: "backInOut",
							times: [0, 0.25, 0.5, 0.85, 1],
						}}
					></motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
