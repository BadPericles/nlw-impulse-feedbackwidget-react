import cors from 'cors';
import express from 'express'
import nodemailer from 'nodemailer'
import { prisma } from './prisma';
import { routes } from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log('HTTP server is running!');
}); 