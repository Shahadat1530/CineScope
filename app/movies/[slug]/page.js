import Image from "next/image";
import { getMovieBySlug } from "@/data/movies";
import { notFound } from "next/navigation";

const Details = ({ params }) => {
    const movie = getMovieBySlug(params.slug);

    if (!movie) {
        notFound();
    }

    return (
        <div className="px-6 py-10 max-w-6xl mx-auto">

            <div className="grid md:grid-cols-2 gap-10">

                {/* Poster */}
                <div
                    className="relative rounded-xl overflow-hidden"
                    style={{ backgroundColor: movie?.posterColor }}
                >
                    <div className="aspect-[2/3] relative">
                        <Image
                            src={movie?.poster}
                            alt={movie?.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Info */}
                <div className="flex flex-col justify-center">

                    <p className="text-brand text-xs font-mono uppercase mb-2">
                        {movie?.genre}
                    </p>

                    <h1 className="font-display text-5xl leading-tight mb-4">
                        {movie?.title}
                    </h1>

                    <p className="text-muted text-sm mb-6 leading-relaxed">
                        {movie?.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 text-sm">

                        <div>
                            <p className="text-muted">Director</p>
                            <p>{movie?.director}</p>
                        </div>

                        <div>
                            <p className="text-muted">Release</p>
                            <p>{movie?.releaseDate}</p>
                        </div>

                        <div>
                            <p className="text-muted">Runtime</p>
                            <p>{movie?.runtime} min</p>
                        </div>

                        <div>
                            <p className="text-muted">Rating</p>
                            <p>⭐ {movie?.rating}</p>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Details;