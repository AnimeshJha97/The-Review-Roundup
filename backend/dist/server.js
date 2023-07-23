"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app_1 = __importDefault(require("./app"));
// handle uncaught exception
// ...
// const {movieData} = require('./data/movieData')
// const {getMovieTrailer} = require('./utils/ytScrapper')
dotenv.config({ path: 'config/config.env' });
const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD);
console.log("DB", DB);
mongoose
    .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("DB connected successfully"))
    .catch(err => console.log(err));
const PORT = Number(process.env.PORT) || 4001;
const mode = process.env.NODE_ENV;
const server = app_1.default.listen(PORT, () => {
    console.log(`Server running on port ${PORT} in ${mode}`);
});
// movieData[2020].horror.slice(0, 2).map(movie => {
//     getMovieTrailer(movie)
// })
// handle unhandled exceptions
// ...
//# sourceMappingURL=server.js.map