import { NextResponse } from "next/server";
import { deleteMovie, getMovieById, updateMovie } from "@/data/movies";

// GET by ID
export async function GET(_request, { params }) {
    const movie = getMovieById(params.id);

    if (!movie) {
        return NextResponse.json(
            { message: "Movie not found" },
            { status: 404 }
        );
    }

    return NextResponse.json(movie);
}

// PATCH (title + description)
export async function PATCH(request, { params }) {
    const body = await request.json();

    const updated = updateMovie(params.id, body);

    if (!updated) {
        return NextResponse.json(
            { message: "Movie not found" },
            { status: 404 }
        );
    }

    return NextResponse.json(updated);
}

// DELETE
export async function DELETE(_request, { params }) {
    const success = deleteMovie(params.id);

    if (!success) {
        return NextResponse.json(
            { message: "Movie not found" },
            { status: 404 }
        );
    }

    return NextResponse.json({
        message: "Deleted successfully",
    });
}