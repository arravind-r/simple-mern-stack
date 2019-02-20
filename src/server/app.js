import express from 'express';
import path from 'path';

const app = express();

// Defining public path (relative path)
const publicPath = path.resolve(__dirname, '..', '..', 'public');
app.use(express.static(publicPath));

// Simply logging to console
app.listen(3000, () => {
    console.log(`MERN Boilerplate listening on port 3000`);
});