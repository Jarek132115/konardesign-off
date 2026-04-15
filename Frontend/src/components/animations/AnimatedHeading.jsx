import React from "react";
import { motion } from "motion/react";

const charVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};

export function headingEndDelay(text, startDelay = 0) {
    const letters = (text || "").replace(/\s/g, "").length;
    return startDelay + letters * 0.03 + 0.1;
}

export default function AnimatedHeading({
    text,
    as: Tag = "h2",
    className = "",
    wordClassName = "",
    highlightWords = [],
    highlightClassName = "",
    trigger = "inView",
    delay = 0,
    amount = 0.3,
}) {
    const words = text.split(" ");

    const motionProps =
        trigger === "onLoad"
            ? { initial: "hidden", animate: "visible" }
            : {
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: true, amount },
            };

    const highlightSet = new Set(highlightWords);
    const MotionTag = motion[Tag] || motion.h2;

    return (
        <MotionTag
            className={className}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: 0.03,
                        delayChildren: delay,
                    },
                },
            }}
            {...motionProps}
        >
            {words.map((word, wi) => {
                const cleaned = word.replace(/[^\w-]/g, "");
                const isHighlight = highlightSet.has(cleaned);
                return (
                    <React.Fragment key={wi}>
                        <span
                            className={`${wordClassName} ${isHighlight ? highlightClassName : ""}`}
                            style={{ display: "inline-block", whiteSpace: "nowrap" }}
                        >
                            {Array.from(word).map((ch, ci) => (
                                <motion.span
                                    key={ci}
                                    variants={charVariants}
                                    style={{ display: "inline-block" }}
                                >
                                    {ch}
                                </motion.span>
                            ))}
                        </span>
                        {wi !== words.length - 1 ? " " : ""}
                    </React.Fragment>
                );
            })}
        </MotionTag>
    );
}
