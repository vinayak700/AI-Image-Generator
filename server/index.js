import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './Mongodb/connect.js'
import dalleRoutes from './routes/dalleRoutes.js';
import postRoutes from './routes/postRoutes.js';

dotenv.config();

const app = express();

// Uncomment and configure the cors middleware
app.use(cors({
    origin: 'https://ai-image-generator-delta-three.vercel.app', // Allow requests only from this origin
    methods: 'GET,POST,PUT,DELETE',
    credentials: true
}));

app.use(express.json({ limit: "50mb" }));
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);


app.get('/', async (req, res) => {
    res.send('Hello from DALL-E!');
})

const startServer = async () => {

    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, (req, res) =>
            console.log('Backend server is running on http://localhost:8080'));
    } catch (error) {
        console.log(error);
    }
}
startServer();

