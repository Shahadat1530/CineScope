import { addMovie, getAllMovie } from "@/data/movies";
import { NextResponse } from "next/server";

export async function GET() {
    const movies = await getAllMovie();
    return NextResponse.json(movies);
};

export async function POST(request) {
    const body = await request.json();

    const newMovie = addMovie(body);

    return NextResponse.json(newMovie, { status: 201 });
};