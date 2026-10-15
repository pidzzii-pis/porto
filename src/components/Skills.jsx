import { motion } from "motion/react";

const skills = {
    Frontend: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Tailwind CSS",
    ],

    Backend: [
        "PHP",
        "Laravel",
        "MySQL",
    ],

    Tools: [
        "Git",
        "GitHub",
        "VS Code",
        "Android Studio",
    ],
};

export default function Skills() {

    return (
        <section
            id="skills"
            className="
                px-6 py-32
                bg-[#0b0b0e]
            "
        >

            <div className="mx-auto max-w-6xl">

                <p className="
                    text-sm uppercase
                    tracking-[0.3em]
                    text-zinc-400
                ">
                    Tech Stack
                </p>


                <h2 className="
                    mt-5 text-4xl font-semibold text-white sm:text-5xl
                ">
                    Technologies I use.
                </h2>


                <div className="
                    mt-14 grid gap-6
                    md:grid-cols-3
                ">

                    {Object.entries(skills).map(
                        ([category, items], index) => (

                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ delay: index * 0.1 }}
                                className="
                                    rounded-3xl
                                    border
                                    border-white/10
                                    bg-[#0e0e12]
                                    p-7 transition duration-500 hover:-translate-y-1 hover:border-violet-400/30
                                "
                            >
                                <h3 className="font-medium text-white">
                                    {category}
                                </h3>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {items.map((skill) => (
                                        <span
                                            key={skill}
                                            className="
                                                rounded-full
                                                bg-white/5
                                                px-4 py-2
                                                text-sm
                                                text-zinc-300 transition duration-300 hover:-translate-y-0.5 hover:bg-violet-500/20 hover:text-violet-200
                                            "
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>

                        )
                    )}

                </div>

            </div>

        </section>
    );
}
