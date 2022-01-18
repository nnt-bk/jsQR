import jsQR from 'jsqr';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import multer from 'multer';

const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

app.listen(5000, () => {
	console.log('Run Server http://localhost:5000');
});

app.post('/', function (req, res) {
	console.log({ ...req.body });
	if (Object.keys(req.body).length != 0) {
		res.status(200).json('Success');
	} else {
		res.status(400).json({ message: 'Fail' });
	}
});

app.get('/', function (req, res) {
	res.json('Hello');
});
