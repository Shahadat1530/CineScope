import Image from "next/image";

const MovieCard = ({ movie }) => {
    return (
        <div className="bg-bg2 border border-white/10 rounded-xl overflow-hidden hover:-translate-y-1 transition cursor-pointer">

            {/* Poster */}
            <div
                className="aspect-[2/3] relative flex items-center justify-center"
                style={{ backgroundColor: movie?.posterColor }}
            >

                {/* Image */}
                {movie?.poster && (
                    <Image
                        src={movie.poster}
                        alt={movie.title}
                        fill
                        className="object-cover"
                    />
                )}

                {/* Optional overlay (gives cinematic feel) */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{ backgroundColor: movie?.posterColor }}
                />

                {/* Fallback letter (if image fails) */}
                {!movie?.poster && (
                    <span className="font-display text-4xl text-white/40 z-10">
                        {movie?.title?.charAt(0)}
                    </span>
                )}

                {/* Year */}
                <span className="absolute top-2 left-2 text-[10px] bg-black/50 px-2 py-0.5 rounded z-10">
                    {movie?.year}
                </span>

                {/* Rating */}
                <span className="absolute top-2 right-2 text-xs bg-black/60 px-2 py-0.5 rounded text-yellow-400 z-10">
                    ★ {movie?.rating}
                </span>
            </div>

            {/* Info */}
            <div className="p-3">
                <p className="text-sm truncate">
                    {movie?.title}
                </p>

                <p className="text-xs text-gray-400 mb-2">
                    {movie?.director}
                </p>

                <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                    <span>👁 {movie?.viewCount?.toLocaleString()}</span>
                    <span>❤️ {movie?.likeCount?.toLocaleString()}</span>
                    <span>{movie?.runtime}m</span>

                    <span className="px-2 py-0.5 rounded bg-brand/20 text-brand">
                        {movie?.genre}
                    </span>
                </div>
            </div>

        </div>
    );
};

export default MovieCard;