const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require('./MongoDatabase/createdatabase');
const registration = require('./registration');
const timezonelist = require('./Helpers/timezonelist');
const countrylist = require('./Helpers/countrylist');
//const forgotpassword = require('./forgot-password');
const login = require('./login');


//const login = require('./Schemas/LoginSchema');
const loginModel = require('./Models/login');

app.use(cors());

app.use(
  cors({
    origin: [
      "http://10.10.10.22:3005",
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.post('/signup', registration);
app.post('/verify-email', registration);
app.post('/resend-email', registration);
app.get('/gettimezonelist', timezonelist);
app.get('/getcountrylist', countrylist);
app.post('/login', login)
app.post('/forgot-password', login)
app.post('/reset-password', login)
// app.get("/gettimezonelist", (req, res) => {
//   res.render(timezonelist);
// });

/* // app.get("/message", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });
app.post("/login", (req, res) => {
 try {
   //console.log(bcrypt.compareSync(req.body.password, "$2a$10$/Bl0FaxCZ1Y2EUQZFqBGa.nOsCbxXSxEu8rE0u0uBkc/9qVZ3XF/."))
   if (req.body) {
     console.log("78999");
     console.log(req.body.userName);
     let pass = '';
     loginModel.find({ "username": req.body.userName })
       .then(function (savedUser) {
         console.log(savedUser);
         //  console.log("savedUser=====", JSON.stringify(savedUser[0].password));
         if (!savedUser) {
           return res.status(422).json({ error: "Invalid email or password" })
         }
         if (req.body.Password) {
           bcrypt.compare(req.body.Password, savedUser[0].password)
             .then(doMatch => {
               if (doMatch) {
                 res.json({ message: "Saved Succcessfully", status: 200 })
               } else {
                 return res.status(422).json({ error: "Invalid Email or Password" })
               }
             });
         }
       })




   }
   console.log("1223ddd");
 } catch (err) {
   console.log(err);
 }


});

// app.get("/message", (req, res) => {
//   res.send("Hello");
// });


app.get('/', function (req, res) {
 res.send('<html><body><h1>Hello World</h1></body></html>');
});
*/
//mongoose.connection.close();
app.listen(3009, () => {
  console.log(`Hello Server is running on port 3009.`);
});
