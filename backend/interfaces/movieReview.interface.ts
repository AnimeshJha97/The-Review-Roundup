export default interface MovieReview {
    // _id: string;
    movieId: string,
    content: string,
    reviewDate: Date,
    userId: string,
    userName: string,
    likes: number,
    dislikes: number,
}