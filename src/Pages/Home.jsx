import Button from "../Components/Button";
import Event_card from "../Components/Event_card";
import EventService from "../Components/EventService";
import service_image from "../assets/Event image 2.jpg"


const Home = () => {
    return (
        <main>
            <header
                className="banner  h-screen md:h-screen w-full bg-cover bg-center">

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Hero Content */}
                <div className="relative z-10 flex items-center h-full justify-center px-4 text-center text-white">
                    <div className=" mt-0 md:mt-20 flex flex-col items-center gap-4 md:gap-6">
                        <h1 className="font-caveat text-4xl font-bold md:text-6xl">
                            <span className=" text-orange-400  hover:text-amber-50 cursor-pointer text-5xl md:text-7xl duration-400">Destination</span> Event Management
                        </h1>

                        <p className="mx-auto  max-w-2xl font-roboto text-sm md:text-md text-white">
                            <span className="font-bold text-lg font-caveat">   Creating Moments  Managing Memories,</span> Professional event management services that bring your vision to life. We design, plan and manage extraordinary events that turn your special moments into unforgettable memories. Your one-stop solution for destination events , management.
                        </p>
                        {/* Btn component  */}
                        <Button variant="primary" size="sm" className="mt-2 text-sm py-0 px-4 border-none text-gray-500 bg-orange-300 hover:bg-orange-500">
                            Explore Events
                        </Button>
                    </div>
                </div>
            </header>

            {/* ================== Event Slider =============== */}
            <section>
                <Event_card />
            </section>


            {/* ====================== Event service section ======================== */}
            <section id="about"  >

                <EventService />

            </section>

            {/* ========================= Event achievements ============================== */}
            <section id="events" className="relative overflow-hidden py-12">

                {/* Background */}
                <img
                    src={service_image}
                    alt="Event"
                    className="absolute inset-0 h-full w-full object-cover "
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/75" />

                <div className="relative z-10 mx-auto max-w-6xl px-4">

                    {/* Heading */}
                    <div className="mx-auto max-w-xl text-center">
                        <span className="text-[9px] uppercase tracking-[3px] text-white/50">
                            Our Services
                        </span>

                        <h2 className="mt-2 font-estonia text-4xl text-white md:text-5xl">
                            Everything You Need,
                            <span className="text-white/60"> Under One Roof.</span>
                        </h2>

                        <p className="mt-2 text-xs leading-5 text-white/50">
                            Creative planning, elegant design and flawless event execution.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="mt-8 flex w-full flex-nowrap gap-3 overflow-x-auto px-1 pb-2 justify-start md:justify-center">

                        {[
                            ["✦", "Event Planning"],
                            ["◇", "Destination Events"],
                            ["♢", "Wedding Design"],
                            ["✧", "Corporate Events"],
                            ["✺", "Private Parties"],
                            ["✦", "Event Production"],
                        ].map(([icon, title]) => (
                            <div
                                key={title}
                                className="
                                group
                                w-36.25
                                min-w-36.25
                                shrink-0
                                rounded-2xl
                                border border-white/10
                                bg-white/10
                                p-3
                                backdrop-blur-md
                                transition
                                hover:-translate-y-1
                                hover:bg-white/15
                                sm:w-40
                                sm:min-w-40
                            "
                            >

                                <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-xs text-white">
                                    {icon}
                                </div>

                                <h3 className="mt-4 font-estonia text-xl text-white">
                                    {title}
                                </h3>

                                <p className="mt-1 text-[9px] leading-4 text-white/45">
                                    Creative planning and flawless execution.
                                </p>

                                <button className="mt-3 text-[8px] uppercase tracking-wider text-white/70">
                                    Learn More →
                                </button>

                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* ======================== Packages  ========================== */}
            <section className="bg-slate-950 px-6 py-20 text-white md:px-10 lg:px-16">
                <div className="mx-auto max-w-7xl text-center">
                    <p className="mb-3 font-open-sans text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
                        Our Packages
                    </p>

                    <h2 className="font-estonia text-3xl leading-tight md:text-5xl">
                        Choose Your Perfect Plan
                    </h2>

                    <p className="mt-5 font-open-sans leading-7 text-slate-400 text-sm">
                        Flexible packages that can be customized according to your event requirements.
                    </p>
                    <div className="mx-auto max-w-7xl my-0 px-4 py-10 md:px-8 lg:px-16">
                        {/* Section Heading */}


                        {/* Packages */}
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                            {/* Package 01 */}
                            <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:border-orange-400/40">

                                <div className="mb-6">
                                    <p className="font-open-sans text-xs font-semibold uppercase tracking-widest text-slate-400">
                                        Essential
                                    </p>

                                    <h3 className="mt-2 font-estonia text-3xl">
                                        Intimate <br /> Moments
                                    </h3>

                                    <div className="mt-5">
                                        <span className="font-open-sans text-3xl font-bold">
                                            ৳49,900
                                        </span>

                                        <span className="ml-2 text-xs text-slate-400">
                                            / event
                                        </span>
                                    </div>
                                </div>

                                <div className="mb-6 h-px bg-white/10" />

                                <ul className="space-y-3 font-open-sans text-sm text-slate-300">
                                    <li className="flex items-center gap-3">
                                        <span className="text-orange-400">✓</span>
                                        Event planning consultation
                                    </li>

                                    <li className="flex items-center gap-3">
                                        <span className="text-orange-400">✓</span>
                                        Basic venue decoration
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="text-orange-400">✓</span>
                                        Basic venue decoration
                                    </li>

                                    <li className="flex items-center gap-3">
                                        <span className="text-orange-400">✓</span>
                                        Professional event coordination
                                    </li>

                                    <li className="flex items-center gap-3">
                                        <span className="text-orange-400">✓</span>
                                        Guest management
                                    </li>

                                    <li className="flex items-center gap-3">
                                        <span className="text-orange-400">✓</span>
                                        4 hours event coverage
                                    </li>
                                </ul>

                                <button className="mt-8 w-full rounded-full border border-white/20 px-5 py-2.5 font-open-sans text-sm font-semibold transition duration-300 hover:border-orange-400 hover:bg-orange-400 hover:text-slate-950">
                                    Get Started
                                </button>
                            </div>


                            {/* Package 02 */}
                            <div className="relative rounded-3xl border border-orange-400/60 bg-orange-400 p-6 text-slate-950 shadow-2xl shadow-orange-500/10 transition duration-500 hover:-translate-y-2">



                                <div className="mb-6">
                                    <p className="font-open-sans text-xs font-semibold uppercase tracking-widest text-slate-700">
                                        Premium
                                    </p>

                                    <h3 className="mt-2 font-estonia text-3xl">
                                        Signature Celebration
                                    </h3>

                                    <div className="mt-5">
                                        <span className="font-open-sans text-3xl font-bold">
                                            ৳99,900
                                        </span>

                                        <span className="ml-2 text-xs text-slate-700">
                                            / event
                                        </span>
                                    </div>
                                </div>

                                <div className="mb-6 h-px bg-slate-950/15" />

                                <ul className="space-y-3 font-open-sans text-sm text-slate-800">
                                    <li className="flex items-center gap-3">
                                        <span>✓</span>
                                        Complete event planning
                                    </li>

                                    <li className="flex items-center gap-3">
                                        <span>✓</span>
                                        Premium venue decoration
                                    </li>

                                    <li className="flex items-center gap-3">
                                        <span>✓</span>
                                        Photography & videography
                                    </li>

                                    <li className="flex items-center gap-3">
                                        <span>✓</span>
                                        Catering coordination
                                    </li>

                                    <li className="flex items-center gap-3">
                                        <span>✓</span>
                                        Entertainment management
                                    </li>

                                    <li className="flex items-center gap-3">
                                        <span>✓</span>
                                        Full event-day coordination
                                    </li>
                                </ul>

                                <button className="mt-8 w-full rounded-full bg-slate-950 px-5 py-2.5 font-open-sans text-sm font-semibold text-white transition duration-300 hover:bg-slate-800">
                                    Choose Package
                                </button>
                            </div>


                            {/* Package 03 */}
                            <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:border-orange-400/40">

                                <div className="mb-6">
                                    <p className="font-open-sans text-xs font-semibold uppercase tracking-widest text-slate-400">
                                        Luxury
                                    </p>

                                    <h3 className="mt-2 font-estonia text-3xl">
                                        Destination Experience
                                    </h3>

                                    <div className="mt-5">
                                        <span className="font-open-sans text-3xl font-bold">
                                            ৳1,99,900
                                        </span>

                                        <span className="ml-2 text-xs text-slate-400">
                                            / event
                                        </span>
                                    </div>
                                </div>

                                <div className="mb-6 h-px bg-white/10" />

                                <ul className="space-y-3 font-open-sans text-sm text-slate-300">
                                    <li className="flex items-center gap-3">
                                        <span className="text-orange-400">✓</span>
                                        Full-service event planning
                                    </li>

                                    <li className="flex items-center gap-3">
                                        <span className="text-orange-400">✓</span>
                                        Luxury destination setup
                                    </li>

                                    <li className="flex items-center gap-3">
                                        <span className="text-orange-400">✓</span>
                                        Premium photography & film
                                    </li>

                                    <li className="flex items-center gap-3">
                                        <span className="text-orange-400">✓</span>
                                        Catering & hospitality
                                    </li>

                                    <li className="flex items-center gap-3">
                                        <span className="text-orange-400">✓</span>
                                        Entertainment & production
                                    </li>

                                    <li className="flex items-center gap-3">
                                        <span className="text-orange-400">✓</span>
                                        Dedicated event manager
                                    </li>
                                </ul>

                                <button className="mt-8 w-full rounded-full border border-white/20 px-5 py-2.5 font-open-sans text-sm font-semibold transition duration-300 hover:border-orange-400 hover:bg-orange-400 hover:text-slate-950">
                                    Plan Your Event
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
        </main >
    );
};

export default Home;