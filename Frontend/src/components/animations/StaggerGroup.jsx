import React from "react";
import { motion } from "motion/react";

export function StaggerGroup({
    as: Tag = "div",
    children,
    className = "",
    stagger = 0.08,
    delay = 0,
    trigger = "inView",
    amount = 0.2,
    style,
    ...rest
}) {
    const MotionTag = motion[Tag] || motion.div;

    const variants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: stagger, delayChildren: delay },
        },
    };

    const props =
        trigger === "onLoad"
            ? { initial: "hidden", animate: "visible" }
            : {
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: true, amount },
            };

    return (
        <MotionTag className={className} style={style} variants={variants} {...props} {...rest}>
            {children}
        </MotionTag>
    );
}

export const staggerItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export function StaggerItem({
    as: Tag = "div",
    children,
    className = "",
    style,
    ...rest
}) {
    const MotionTag = motion[Tag] || motion.div;
    return (
        <MotionTag
            className={className}
            style={style}
            variants={staggerItemVariants}
            {...rest}
        >
            {children}
        </MotionTag>
    );
}
