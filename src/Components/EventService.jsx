import Button from "./Button";

const EventService = () => {

    return (
        <section className="bg-white py-20">
            <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-5 md:px-8 lg:flex-row">

                {/* ================= LEFT : IMAGE GRID ================= */}
                <div className="grid w-full max-w-xl grid-cols-2 gap-4">

                    {/* Large Image */}
                    <div className="group relative h-105 overflow-hidden rounded-[30px]">
                        <img
                            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=85"
                            alt="Corporate Event"
                            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/20" />

                        <div className="absolute bottom-5 left-5 text-white">
                            <span className="text-[10px] uppercase tracking-[3px]">
                                Corporate
                            </span>
                        </div>
                    </div>

                    {/* Right Two Images */}
                    <div className="flex flex-col gap-4">

                        <div className="group relative h-50 overflow-hidden rounded-[30px]">
                            <img
                                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=85"
                                alt="Wedding Event"
                                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/10" />

                            <div className="absolute bottom-4 left-5 text-white">
                                <span className="text-[10px] uppercase tracking-[3px]">
                                    Wedding
                                </span>
                            </div>
                        </div>

                        <div className="group relative h-50 overflow-hidden rounded-[30px]">
                            <img
                                src="https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&w=800&q=85"
                                alt="Birthday Event"
                                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/10" />

                            <div className="absolute bottom-4 left-5 text-white">
                                <span className="text-[10px] uppercase tracking-[3px]">
                                    Birthday
                                </span>
                            </div>
                        </div>

                    </div>
                </div>


                {/* ================= RIGHT : CONTENT ================= */}
                <div className="w-full max-w-xl mb-15 md:mb-0">

                    <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[4px] text-gray-500">

                    </span>

                    <h1 className="font-estonia text-4xl leading-tight text-gray-900 md:text-5xl">
                        We Turn Your Vision
                        <span className="block italic text-gray-500">
                            Into Reality.
                        </span>
                    </h1>

                    <p className="mt-6 max-w-lg font-open-sans text-sm leading-7 text-gray-600 md:text-base">
                        Destination Event Management is a professional event management company committed to creating memorable, meaningful and beautifully executed experiences.
                        <br />
                        From the first idea to the final moment, our dedicated team takes care of every detail so you can focus on enjoying your event.
                    </p>

                    {/* Achievement */}
                    <div className="mt-8 border-y border-gray-200 py-6">
                        <div className="flex  items-center gap-8 ">

                            <div className="text-2xl md:text-5xl">
                                <span className="font-estonia  text-gray-900">
                                    500+
                                </span>

                                <p className="mt-1 text-[10px] uppercase tracking-[2px] text-gray-500">
                                    Events Created
                                </p>
                            </div>

                            <div className="h-12 w-px bg-gray-200" />

                            <div className="text-2xl md:text-5xl">
                                <span className="font-estonia text-gray-900">
                                    98%
                                </span>

                                <p className="mt-1 text-[10px] uppercase tracking-[2px] text-gray-500">
                                    Happy Clients
                                </p>
                            </div>
                            <div className="h-12 w-px bg-gray-200" />
                            <div className="text-2xl md:text-5xl">
                                <span className="font-estonia  text-gray-900">
                                    7+
                                </span>

                                <p className="mt-1 text-[10px] uppercase tracking-[2px] text-gray-500">
                                    Years Experience
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* ================ Button component =================== */}
                    <Button variant="primary" size="sm" className="className">
                        Explore Our Services
                    </Button>
                </div>

            </div>
        </section >
    );
};

export default EventService;

