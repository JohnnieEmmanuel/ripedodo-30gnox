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

const userRoute = require("./routes/user.route");
const movieRoute = require("./routes/movie.route");


const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(cors());

app.use("/api", userRoute);

//single upload
// const upload = multer({ dest: "uploads/"});
// app.post('/upload', upload.single("file"),(req , res) =>{
// res.json({status:"success"});
// })

//multiple upload
// const upload = multer({ dest: "uploads/"});
// app.post('/upload', upload.array("file", 2),(req , res) =>{
// res.json({status:"success"});
// })

//multiple field upload
// const upload = multer({ dest: "uploads/"});

// const multiUpload = upload.fields([
//   {name: "avatar", maxCount:1},
//   {name: "resume", maxCount:1}
// ])
// app.post('/upload', multiUpload,  (req , res) =>{
//   console.log(req.files);
// res.json({status:"success"});
// })

//custom file name

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads");
//   },
//   filename: (req, file, cb) => {
//     const { originalname } = file;
//     cb(null, `${uuid()}-${originalname}`);
//   }
// });



   
// Read users.json file
fs.readFile("movielist.json", function(err, data) {
      
  // Check for errors
  if (err) throw err;
 
  // Converting to JSON
  const movielist = JSON.parse(data);
    
  console.log(movielist); // Print users 
});



//using memory storage
const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  if (file.mimetype.split("/")[0] === "image") {
    cb(null, true);
  } else {
    // cb(new Error("File is not of the correct type"), false);
    cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE"), false);
  }
};
const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 1000000000, files: 2 },
});
// app.post("/upload", upload.array("file"), async (req, res) => {
//   try {
//     const results = await s3Uploadv2(req.files);
//     console.log(results);
//     return res.json({ status: "success" });
//   } catch (err) {
//     console.log(err);
//   }
// });




app.post("/upload", upload.array("file"), async (req, res) => {
  try {


 
 
    const results = await s3Uploadv3(req.files);
    console.log(results);

//checking if the api works this way
app.use("/movielist", movieRoute);

    return res.json({ status: "success" });
 
  } catch (err) {
    console.log(err);
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
        message: "Upload images only",
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
