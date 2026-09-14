import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { events } from "../Data/data.js"



const EventSlider = () => {
    const sliderRef = useRef(null);

    const scroll = (direction) => {
        const slider = sliderRef.current;

        const scrollAmount = 192;

        if (direction === "right") {
            slider.scrollBy({
                left: scrollAmount,
                behavior: "smooth",
            });


            if (
                slider.scrollLeft + slider.clientWidth >=
                slider.scrollWidth - scrollAmount
            ) {
                setTimeout(() => {
                    slider.scrollTo({
                        left: 0,
                        behavior: "smooth",
                    });
                }, 500);
            }
        }

        if (direction === "left") {
            slider.scrollBy({
                left: -scrollAmount,
                behavior: "smooth",
            });


            if (slider.scrollLeft <= scrollAmount) {
                setTimeout(() => {
                    slider.scrollTo({
                        left: slider.scrollWidth,
                        behavior: "smooth",
                    });
                }, 500);
            }
        }
    };
    return (
        <section className="bg-white py-14">
            <div className="mx-auto max-w-7xl px-5">

                {/* Header */}
                <div className="mb-6 md: flex items-center  justify-between lg:justify-around">

                    <div className="text-center md:text-left">
                        <h2 className="mt-1  font-estonia text-4xl text-gray-900">
                            Our Events
                        </h2>

                        <p className="text-xs uppercase text-left lg:text-center tracking-[3px] text-gray-500">
                            Explore
                        </p>

                    </div>

                    {/* Arrows */}
                    <div className="flex gap-2 lg:hidden">
                        <button
                            onClick={() => scroll("left")}
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 transition duration-150 hover:bg-black hover:text-white"
                        >
                            <FiChevronLeft size={18} />
                        </button>

                        <button
                            onClick={() => scroll("right")}
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 transition duration-150 hover:bg-black hover:text-white"
                        >
                            <FiChevronRight size={18} />
                        </button>
                    </div>
                </div>

                {/* Cards */}
                <div
                    ref={sliderRef}
                    className="flex gap-3 lg:item center lg:justify-center overflow-x-auto overflow-hidden scroll-smooth"
                >
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className="group relative h-70 w-45 shrink-0 overflow-hidden rounded-[30px]"
                        >
                            <img
                                src={event.image}
                                alt={event.title}
                                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/30" />

                            {/* Text */}
                            <div className="absolute bottom-0 p-4 text-white">
                                <p className="text-[9px] uppercase tracking-wider text-white/70">
                                    {event.location}
                                </p>

                                <h3 className="mt-1 text-sm font-semibold">
                                    {event.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default EventSlider;

