import Modal from "@/components/Modal";
import Image from "next/image";
import { getMovieBySlug } from "@/data/movies";
import { notFound } from "next/navigation";

const ModalPage = ({ params }) => {
    const movie = getMovieBySlug(params.slug);

    if (!movie) return notFound();

    return (
        <Modal>
            <div className="grid md:grid-cols-2 gap-6 p-4 max-w-3xl">

                {/* Poster */}
                <div
                    className="relative aspect-[2/3] rounded-lg overflow-hidden"
                    style={{ backgroundColor: movie.posterColor }}
                >
                    <Image
                        src={movie.poster}
                        alt={movie.title}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Info */}
                <div className="flex flex-col justify-center">

                    <p className="text-brand text-xs font-mono uppercase mb-2">
                        {movie.genre}
                    </p>

                    <h2 className="font-display text-3xl mb-3">
                        {movie.title}
                    </h2>

                    <p className="text-muted text-sm mb-4 line-clamp-4">
                        {movie.description}
                    </p>

                    <div className="text-sm space-y-2">
                        <p><span className="text-muted">Director:</span> {movie.director}</p>
                        <p><span className="text-muted">Year:</span> {movie.year}</p>
                        <p><span className="text-muted">Runtime:</span> {movie.runtime} min</p>
                        <p><span className="text-muted">Rating:</span> ⭐ {movie.rating}</p>
                    </div>

                </div>

            </div>
        </Modal>
    );
};

export default ModalPage;