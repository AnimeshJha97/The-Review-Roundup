"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const cheerio_1 = __importDefault(require("cheerio"));
// Function to get YouTube trailer for a movie
function getMovieTrailer(movie) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const searchQuery = `${movie.title} trailer`;
            console.log("searchQuery", searchQuery);
            const encodedSearchQuery = searchQuery.split(' ').join('+');
            console.log("encodedSearchQuery", encodedSearchQuery);
            const searchUrl = `https://www.youtube.com/results?search_query=${encodedSearchQuery}`;
            console.log("searchUrl", searchUrl);
            const response = yield axios_1.default.get(searchUrl);
            const $ = cheerio_1.default.load(response.data);
            const videoLink = $('a#thumbnail').attr('href');
            console.log("videoLink", videoLink);
            if (videoLink) {
                const videoId = videoLink.split('=')[1].split('&')[0];
                const trailerLink = `https://www.youtube.com/watch?v=${videoId}`;
                console.log(`Trailer Link for '${movie.title}': ${trailerLink}`);
            }
            else {
                console.log(`No trailer found for '${movie.title}'`);
            }
        }
        catch (error) {
            console.error(`Error retrieving trailer for '${movie.title}':`, error);
        }
    });
}
module.exports = {
    getMovieTrailer
};
//# sourceMappingURL=ytScrapper.js.map