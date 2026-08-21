export default function Footer() {

    return (
        <footer className="
            border-t
            border-zinc-200
            px-6 py-8
            dark:border-white/10
        ">

            <div className="
                mx-auto flex max-w-6xl
                flex-col gap-4
                text-sm text-zinc-500
                sm:flex-row
                sm:items-center
                sm:justify-between
            ">

                <p>
                    © 2026 Hafidzy.
                </p>


                <p>
                    Built with Laravel + React + Tailwind.
                </p>

            </div>

        </footer>
    );
}