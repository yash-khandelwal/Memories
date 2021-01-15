import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

// Routes
import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes);

const DB_URI = process.env.DB_URI;
const PORT = process.env.PORT || 5000;

// for data communications
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

// Create mongo connection
mongoose.connect(DB_URI, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false })
    .then(() => app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);