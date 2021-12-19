import express from 'express'
import path from 'path'

const app = express();
const __dirname = path.resolve();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use(express.static(__dirname + '/pub'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))