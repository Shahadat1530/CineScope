import MovieCard from "@/components/MovieCard"
import { movies } from "@/data/movies"
import Link from "next/link"

const MoviePage = () => {
    return (
        <div className="mt-6">
            <h2 className="font-display text-lg">
                All Movies
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                {movies.map((movie) =>
                    <Link
                        href={`/movies/${movie?.slug}`}
                        key={movie?.id}
                    >
                        <MovieCard
                            movie={movie}
                        />
                    </Link>)}
            </div>
        </div>
    )
}

export default MoviePage