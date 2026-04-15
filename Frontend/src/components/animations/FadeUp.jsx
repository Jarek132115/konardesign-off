import React, { forwardRef } from "react";
import { motion } from "motion/react";
import { headingEndDelay } from "./AnimatedHeading";

const FadeUp = forwardRef(function FadeUp(
    {
        as: Tag = "div",
        children,
        className = "",
        delay = 0,
        duration = 0.5,
        y = 20,
        trigger = "inView",
        amount = 0.2,
        afterHeading,
        headingDelay = 0,
        style,
        ...rest
    },
    ref
) {
    const MotionTag = motion[Tag] || motion.div;

    const finalDelay =
        afterHeading !== undefined
            ? headingEndDelay(afterHeading, headingDelay)
            : delay;

    const props =
        trigger === "onLoad"
            ? {
                initial: { opacity: 0, y },
                animate: { opacity: 1, y: 0 },
                transition: { duration, delay: finalDelay, ease: "easeOut" },
            }
            : {
                initial: { opacity: 0, y },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true, amount },
                transition: { duration, delay: finalDelay, ease: "easeOut" },
            };

    return (
        <MotionTag ref={ref} className={className} style={style} {...props} {...rest}>
            {children}
        </MotionTag>
    );
});

export default FadeUp;
