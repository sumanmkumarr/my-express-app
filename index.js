const express = require('express'); // load express
const app = express(); // create app using express

const port = 3000; // set port to 3000

app.get('/', (req, res) =>{
    res.send("my name is suman kumar");
});

app.get('/about', (req,res) => {
    res.send("this is about me");
});


app.post('/submit', (req,res) =>
{
    res.send("data is received");
});
// start the server
app.listen(port, () => {
    console.log(`the server is running on ${port}`);
});