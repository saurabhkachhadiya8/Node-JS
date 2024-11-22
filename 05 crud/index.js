import express from 'express';
const port = 8080;
const app = express();
const record = [
    { id: 1, name: 'raj', phone: 123 },
    { id: 1, name: 'raj', phone: 123 },
    { id: 1, name: 'raj', phone: 123 },
    { id: 1, name: 'raj', phone: 123 },
];

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    return res.render('index', {
        data: record
    });
});

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`server is running on port :- ${port}`);
});