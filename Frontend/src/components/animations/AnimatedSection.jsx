import React, { forwardRef } from "react";
import { motion } from "motion/react";

const AnimatedSection = forwardRef(function AnimatedSection(
    {
        as: Tag = "section",
        children,
        className = "",
        duration = 0.5,
        y = 20,
        amount = 0.2,
        style,
        ...rest
    },
    ref
) {
    const MotionTag = motion[Tag] || motion.section;

    return (
        <MotionTag
            ref={ref}
            className={className}
            style={style}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount }}
            transition={{ duration, ease: "easeOut" }}
            {...rest}
        >
            {children}
        </MotionTag>
    );
});

export default AnimatedSection;
