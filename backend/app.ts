import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors';
import morgan from 'morgan'
const app = express()

if(process.env.NODE_ENV === 'DEVELOPMENT'){
    app.use(morgan('dev'))
}
const corsOptions = {
    origin: 'http://localhost:3000',
  }

app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions));

//Import Routes, movies, games, cafe
import movies from './routes/movieRouter'
import reviews from './routes/reviewRouter'
import auth from './routes/authRouter'
// const tvSeries = require('./routes/tvSeriesRouter')
// const cafes = require('./routes/cafeRouter')
// const books = require('./routes/bookRouter')
// const liveShows = require('./routes/liveShowRouter')
// const destinations = require('./routes/destinationRouter')

// app.get('/api/v1/', (req, res) => res.status(200).json({message: "Welcome to Routes"}));
app.use('/api/v1/movies', movies)
app.use('/api/v1/reviews', reviews)
app.use('/api/v1/auth', auth)
// app.use('/api/v1/tvSeries', tvSeries)
// app.use('/api/v1/cafes', cafes)
// app.use('/api/v1/books', books)
// app.use('/api/v1/liveShows', liveShows)
// app.use('/api/v1/destinations', destinations)

//Middlewwares

export default app
