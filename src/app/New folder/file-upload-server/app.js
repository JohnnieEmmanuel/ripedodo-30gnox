const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser");
const morgan = require("morgan");
const multer = require("multer");

const upload = multer({dest: "uploads/"});

const app = express()

app.use(cors());
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const port = process.env.PORT || 3000;
app.listen(port, () =>{
    console.log("Serve is running on port"+port);
})
app.post("/upload", upload.single("photo"), (req,res) =>
{console.log(req.file);});

app.post("/uploads", upload.array("photos[]"), (req,res) =>
{console.log(req.files);});


// app.get('/api/upload', (req, res) => {
//     res.json({
//         'message': 'hello'
//     });
// });


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: true
// }));



// app.listen(port, () => console.log(`Example app listening on port ${port}!`))
