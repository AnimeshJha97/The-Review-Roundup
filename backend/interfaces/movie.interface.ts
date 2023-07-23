export default interface MovieModel {
    // _id: string;
    title: string,
    releaseYear: number,
    rated: string,
    releaseDate: string,
    duration: string,
    genre: string,
    director: string,
    writer: string,
    actors: string,
    country: string,
    description: string,
    images: {
        postor: string,
        banner: string,
        backdrops: string[]
    },
    rating: number,
    votes: number,
    type: string,
    video: string[],
}