import * as express from 'express';
import * as nodemailer from 'nodemailer';
import * as multiparty from 'multiparty';
import * as dotenv from 'dotenv';

const app = express();

app.route("/").get(function (req, res) {
	res.sendFile(process.cwd() + "/public/index.html");
});