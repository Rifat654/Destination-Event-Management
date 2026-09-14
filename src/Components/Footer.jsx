
const Footer = () => {

    return (
        <footer className="bg-black text-white">

            <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <h2 className="font-estonia text-5xl">
                            Destination
                        </h2>

                        <h3 className="-mt-1.25 font-open-sans text-xs font-semibold uppercase tracking-[4px] text-white/60">
                            Event Management
                        </h3>

                        <p className="mt-5 max-w-md text-sm leading-6 text-white/50">
                            We create unforgettable celebrations, destination weddings,
                            corporate events and beautiful experiences made around you.
                        </p>
                    </div>


                    {/* Contact */}
                    <div>
                        <h4 className="mb-4 text-xs font-semibold uppercase tracking-[3px] text-white/70">
                            Contact
                        </h4>

                        <div className="space-y-3 text-sm text-white/50">
                            <p>+880 1XXX-XXXXXX</p>
                            <p>hello@destinationevents.com</p>
                            <p>Dhaka, Bangladesh</p>
                        </div>
                    </div>


                    {/* Opening */}
                    <div>
                        <h4 className="mb-4 text-xs font-semibold uppercase tracking-[3px] text-white/70">
                            Opening Hours
                        </h4>

                        <div className="space-y-3 text-sm text-white/50">
                            <p>Monday — Friday</p>
                            <p className="text-white">10:00 AM — 8:00 PM</p>

                            <p className="pt-2">Saturday — Sunday</p>
                            <p className="text-white">11:00 AM — 6:00 PM</p>
                        </div>
                    </div>

                </div>


                {/* Bottom */}
                <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">

                    <p className="text-[10px] uppercase tracking-[2px] text-white/30">
                        © 2026 Destination Event Management
                    </p>


                    {/* Social Links */}
                    <div className="flex gap-5 text-xs uppercase tracking-[2px] text-white/50">

                        <a
                            href="#"
                            className="transition hover:text-white"
                        >
                            Instagram
                        </a>

                        <a
                            href="#"
                            className="transition hover:text-white"
                        >
                            Facebook
                        </a>

                        <a
                            href="#"
                            className="transition hover:text-white"
                        >
                            LinkedIn
                        </a>

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;

