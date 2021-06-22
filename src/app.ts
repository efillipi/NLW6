import 'dotenv/config'
import 'reflect-metadata'
import express from 'express';
import './database'

const app = express();

app.use(express.json());

export default app
