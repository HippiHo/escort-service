require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "gmail",
  auth: {
    user: process.env.USERNAME, // generated ethereal user
    pass: process.env.PASS // generated ethereal password
  }
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(function(req, res, next) {
  console.log("###", req.headers);
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const users = [
  {
    id: 1,
    name: "Alex",
    age: 26,
    height: 180,
    image:
      "https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: 2,
    name: "Franz",
    age: 30,
    height: 178,
    image:
      "https://images.pexels.com/photos/605207/pexels-photo-605207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: 3,
    name: "Mario",
    age: 34,
    height: 192,
    image:
      "https://images.pexels.com/photos/936043/pexels-photo-936043.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: 4,
    name: "Bob",
    age: 41,
    height: 185,
    image:
      "https://images.pexels.com/photos/865773/pexels-photo-865773.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  }
];

//https://data.montgomerycountymd.gov/api/views/7bhj-887p/rows.json?accessType=DOWNLOAD

const requestHandler = (req, res) => {
  console.log("Server got a hit");
  res.send("Route / ");
};

const usersHandler = (req, res) => {
  console.log("Route all users");
  res.send(users);
};

const singleUsersHandler = (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  console.log(`Route /users/:id hit and found user: `, user);
  res.send(user);
};

app.get("/", requestHandler);
app.get("/users", usersHandler);
app.get("/users/:id", singleUsersHandler);

app.post("/contact", (req, res) => {
  let mailOptions = {
    from: process.env.USERNAME, // sender address
    to: process.env.USERNAME, // list of receivers
    subject: req.body.eMail, // Subject line
    text: JSON.stringify(req.body) // plain text body
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
  });

  console.log(req.body);
  res.send({ success: "Success" });
});

app.get("/*", (req, res) => {
  console.log(
    "Fallback route for stupid things like curl localhost:5000/dkaslfh"
  );
  res.send("Wildcard route");
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
