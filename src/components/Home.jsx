import React from "react";
import Button from "./Button.jsx";
import ScrambleText from "./ScrambleText.jsx";

export default function Home() {
    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <section
            id="home"
            className="
                min-h-screen
                bg-black
                px-6
                pt-20
                text-white
                md:px-12
                lg:px-20
            "
        >
            <div
                className="
                    mx-auto
                    grid
                    min-h-[calc(100vh-80px)]
                    max-w-7xl
                    items-center
                    gap-12
                    md:grid-cols-2
                "
            >
                <div>
                    <p
                        className="
                            mb-5
                            text-sm
                            uppercase
                            tracking-[0.3em]
                            text-zinc-500
                            md:text-base
                        "
                    >
                        Software Engineering Student
                    </p>

                    <h1
                        className="
                            text-5xl
                            font-bold
                            leading-tight
                            tracking-tight
                            md:text-7xl
                        "
                    >
                        Hi, I'm{" "}
                        <span className="text-zinc-400">
                            <ScrambleText text="Hafidzy I." />
                        </span>
                    </h1>

                    <p
                        className="
                            mt-6
                            max-w-xl
                            text-base
                            leading-8
                            text-zinc-400
                            md:text-lg
                        "
                    >
                        Saya seorang pelajar Rekayasa Perangkat Lunak
                        yang tertarik pada web development, mobile app,
                        dan teknologi modern.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <Button
                            variant="primary"
                            icon
                            onClick={() => scrollTo("projects")}
                        >
                            View Projects
                        </Button>

                        <Button
                            variant="secondary"
                            onClick={() => scrollTo("career")}
                        >
                            About Me
                        </Button>
                    </div>
                </div>

                <div className="flex justify-center md:justify-end">
                    <div className="relative">
                        <div
                            className="
                                absolute
                                -inset-6
                                rounded-full
                                bg-white/[0.04]
                                blur-3xl
                            "
                        />

                        <img
                            src="/images/pio.jpeg"
                            alt="Hafidzy"
                            className="
                                relative
                                h-64
                                w-64
                                rounded-3xl
                                object-cover
                                grayscale
                                shadow-2xl
                                transition
                                duration-700
                                hover:grayscale-0
                                md:h-80
                                md:w-80
                                lg:h-96
                                lg:w-96
                            "
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
