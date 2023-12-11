import express from 'express';

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/', (req,res) => {
    return res.status(200).json({
        message: 'Welcome to CICD testing using AWS, Docker, Jenkins, Github'
    })
})

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running via port ${port}`);
})
