require("dotenv").config();
const { s3Uploadv2, s3Uploadv3 } = require("./s3Service");

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const database = require("./db/database");

const multer = require("multer");
const uuid = require("uuid").v4;

const fs = require("fs");

// MongoDB connection
mongoose.Promise = global.Promise;
mongoose
  .connect(database.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //   useFindAndModify: false
  })
  .then(
    () => {
      console.log("Database connected ");
    },
    (error) => {
      console.log("Database not connected : " + error);
    }
  );

const movieRoute = require("./routes/movie.route");
const Movie = require("./model/Movie");


const movieuploadRoute = require("./routes/movieupload.route");
const Movieupload = require("./model/Movieupload");

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(cors());
/* Manage CORS Access for ALL requests/responses */
app.use(function(req, res, next)
{
   /* Allow access from any requesting client */
   res.setHeader('Access-Control-Allow-Origin', '*');

   /* Allow access for any of the following Http request types */
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');

   /* Set the Http request header */
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
    next();
});
app.use("/api", movieRoute);
app.use("/v1", movieuploadRoute);


//using memory storage
const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  if (file.mimetype.split("/")[0] === "video") {
    cb(null, true);
  } else {
    // cb(new Error("File is not of the correct type"), false);
    cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE"), false);
  }
};
const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize:500000, files: 2 },
});


app.post("/uploadvideo", upload.array("file"), async (req, res) => {
  try {
    const results = await s3Uploadv3(req.files);
    console.log(results);
    console.log("video upload successful");
 //write json filr for the movie details

// const parseJfile = JSON.stringify(req.files);
// fs.writeFileSync('movielist.json', parseJfile)

// //read the just written JSON file
//     const dataBuffer =  fs.readFileSync('movielist.json')
//    const dataJSON = dataBuffer.toString();
//    const data = JSON.parse(dataJSON);
//    let videoname = data[0].originalname
//    console.log(videoname);
  
//    let url = 'https://ripedodo.s3.amazonaws.com/uploads/'+videoname;
//    movieURL = url.replace(/\s/g, '');
//    console.log(movieURL)

//    let movieTitle = videoname.replace(/\.[^/.]+$/, "")
//    console.log(movieTitle)

// //sending to the mongodb server
//    await Movie.create({movietitle: movieTitle, movieurl: movieURL});
  
    return res.json({ status: "success" });
  } catch (err) {
    console.log(err);
    console.log("upload was not successful");

  }
});

app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({
        message: "file size is too large",
      });
    }
    if (error.code === "LIMIT_FILE_COUNT") {
      return res.status(400).json({
        message: "file limit reached",
      });
    }
    if (error.code === "LIMIT_UNEXPECTED_FILE") {
      return res.status(400).json({
        message: "Upload videos only",
      });
    }
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("PORT connected: " + port);
});

app.use(function (error, res) {
  console.error(error.message);
  if (!error.statusCode) error.statusCode = 500;
  res.status(error.statusCode).send(error.message);
});
