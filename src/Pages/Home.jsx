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
            <section>

                <EventService />

            </section>

            {/* ========================= Event achievements ============================== */}
            <section className="relative overflow-hidden py-12">

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


        </main >
    );
};

export default Home;