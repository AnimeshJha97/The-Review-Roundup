"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
if (process.env.NODE_ENV === 'DEVELOPMENT') {
    app.use((0, morgan_1.default)('dev'));
}
const corsOptions = {
    origin: 'http://localhost:3000',
};
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)(corsOptions));
//Import Routes, movies, games, cafe
const movieRouter_1 = __importDefault(require("./routes/movieRouter"));
const reviewRouter_1 = __importDefault(require("./routes/reviewRouter"));
const authRouter_1 = __importDefault(require("./routes/authRouter"));
// const tvSeries = require('./routes/tvSeriesRouter')
// const cafes = require('./routes/cafeRouter')
// const books = require('./routes/bookRouter')
// const liveShows = require('./routes/liveShowRouter')
// const destinations = require('./routes/destinationRouter')
// app.get('/api/v1/', (req, res) => res.status(200).json({message: "Welcome to Routes"}));
app.use('/api/v1/movies', movieRouter_1.default);
app.use('/api/v1/reviews', reviewRouter_1.default);
app.use('/api/v1/auth', authRouter_1.default);
// app.use('/api/v1/tvSeries', tvSeries)
// app.use('/api/v1/cafes', cafes)
// app.use('/api/v1/books', books)
// app.use('/api/v1/liveShows', liveShows)
// app.use('/api/v1/destinations', destinations)
//Middlewwares
exports.default = app;
//# sourceMappingURL=app.js.map