const express = require('express');

const app = express();

const bodyParser = require('body-parser')

const Player = require('./models/Player.js');

const PORT = process.env.PORT || 3000

//db.js

const mongoose = require('mongoose');

const url = `mongodb+srv://pablopablo:ejemplo1234@cluster0.rzksh.mongodb.net/ejemplo?retryWrites=true&w=majority`;

const connectionParams = {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
};
mongoose
	.connect(url, connectionParams)
	.then(() => {
		console.log('Connected to database ');
	})
	.catch((err) => {
		console.error(`Error connecting to the database. \n${err}`);
	});

//Configuracion del body parser
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});

// app.use(cors()); // <---- use cors middleware

app.get('/', (req, res) => {
	Player.find({})
		.then((result) => {
			res.status(200).send(result);
		})
		.catch((err) => {
			res.status(404).send(err);
		});
});

app.post('/new-player', (req, res) => {
  // Player.create(req.body)
  //   .then(() => res.status(200).redirect('/'))
  //   .catch((err) => console.log(err))
  console.log(req.body)
});

app.listen(PORT);
