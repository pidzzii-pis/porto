import React, { useState, useCallback } from "react";

import Preloader from "./components/Preloader.jsx";
import Navbar from "./components/Navbar.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import CursorGlow from "./components/CursorGlow.jsx";
import SmoothScroll from "./components/SmoothScroll.jsx";
import Home from "./pages/Home";
import Career from "./components/Career.jsx";
import Skills from "./components/Skills.jsx";
import Achievements from "./components/Achievements.jsx";
import Technologies from "./components/Technologies.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import KeyboardNav from "./components/KeyboardNav.jsx";
import SectionDots from "./components/SectionDots.jsx";

export default function App() {
    const [loading, setLoading] = useState(true);

    const handleFinish = useCallback(() => {
        setLoading(false);
    }, []);

    return (
        <>
            <Preloader loading={loading} onFinish={handleFinish} />

            {!loading && (
                <>
                    <SmoothScroll />
                    <CursorGlow />
                    <ScrollProgress />
                    <Navbar />
                    <KeyboardNav />
                    <SectionDots />

                    <main>
                        <Home />
                        <Career />
                        <Skills />
                        <Achievements />
                        <Technologies />
                        <Projects />
                        <Contact />
                    </main>
                </>
            )}
        </>
    );
}
