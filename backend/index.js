import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

import PostReviewsRoutes from './routes/PostReviews.js';

const app = express()

mongoose.connect(
    `mongodb://localhost:27017/MyUni`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (!err) {
        console.log("DB connected!");
      } else {
        console.error(err);
      }
    }
  );
  
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/PostReviews', PostReviewsRoutes)

app.listen(8080, () => {
	console.log(`Server started on 8080`);
});


