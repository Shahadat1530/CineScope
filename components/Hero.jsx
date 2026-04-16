const Hero = () => {
    return (
        <div className="grid md:grid-cols-2 gap-6 px-6 py-14 border-b border-white/10">

            {/* LEFT */}
            <div>
                <p className="text-brand text-xs font-mono uppercase tracking-widest mb-3">
                    Now Showing
                </p>

                <h1 className="font-display text-6xl leading-[0.9] mb-4">
                    Discover <br />
                    your next <br />
                    <span className="text-brand">favourite</span> <br />
                    film
                </h1>

                <p className="text-gray-400 max-w-md text-sm">
                    Browse a curated collection of the best movies from 2023–2024.
                </p>
            </div>

            {/* RIGHT */}
            <div className="flex items-end justify-end gap-8">
                <div className="text-right">
                    <p className="font-display text-3xl">16</p>
                    <p className="text-xs text-gray-400 uppercase">Films</p>
                </div>

                <div className="text-right">
                    <p className="font-display text-3xl">8</p>
                    <p className="text-xs text-gray-400 uppercase">Genres</p>
                </div>

                <div className="text-right">
                    <p className="font-display text-3xl">21.5M</p>
                    <p className="text-xs text-gray-400 uppercase">Views</p>
                </div>
            </div>

        </div>
    );
};

export default Hero;