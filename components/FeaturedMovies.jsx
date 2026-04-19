import Link from "next/link";
import MovieCard from "./MovieCard";
import { movies } from "@/data/movies";

const FeaturedMovies = () => {
    const featured = movies.slice(0, 3);

    return (
        <div className="px-6 py-10 max-w-6xl mx-auto">

            <h2 className="text-2xl font-bold mb-6">Featured Movies</h2>

            <div className="grid md:grid-cols-3 gap-6">
                {featured.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>

            <div className="text-center mt-8">
                <Link
                    href="/movies"
                    className="inline-block px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
                >
                    View All Movies
                </Link>
            </div>
        </div>
    );
};

export default FeaturedMovies;