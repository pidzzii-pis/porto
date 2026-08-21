import { motion } from "motion/react";

const journey = [
    {
        year: "2024",
        title: "Started Programming",
        description:
            "Started learning programming fundamentals and web development."
    },

    {
        year: "2025",
        title: "Built Real Projects",
        description:
            "Started creating web applications using PHP, MySQL, and JavaScript."
    },

    {
        year: "2026",
        title: "Developing Further",
        description:
            "Exploring Laravel, React, mobile development, and modern UI design."
    },
];

export default function Journey() {

    return (
        <section
            id="journey"
            className="
                bg-zinc-50
                px-6 py-32
                dark:bg-[#0d0d0d]
            "
        >

            <div className="mx-auto max-w-6xl">

                <p className="
                    text-sm uppercase
                    tracking-[0.3em]
                    text-zinc-400
                ">
                    My Journey
                </p>


                <h2 className="
                    mt-5 text-4xl font-semibold
                    sm:text-5xl
                ">
                    Growing through code.
                </h2>


                <div className="
                    mt-16 space-y-0
                ">

                    {journey.map((item, index) => (

                        <motion.div
                            key={item.year}
                            initial={{
                                opacity: 0,
                                x: -30
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0
                            }}
                            viewport={{
                                once: true
                            }}
                            transition={{
                                delay: index * 0.15
                            }}
                            className="
                                grid gap-5
                                border-t
                                border-zinc-200
                                py-8
                                md:grid-cols-[150px_1fr]
                                dark:border-white/10
                            "
                        >

                            <span className="
                                text-zinc-400
                            ">
                                {item.year}
                            </span>


                            <div>

                                <h3 className="
                                    text-xl font-medium
                                ">
                                    {item.title}
                                </h3>


                                <p className="
                                    mt-2 max-w-xl
                                    leading-7
                                    text-zinc-500
                                    dark:text-zinc-400
                                ">
                                    {item.description}
                                </p>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
}