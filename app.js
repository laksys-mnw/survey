const express    = require('express')
const  dotenv    = require('dotenv');
const bodyParser = require('body-parser')

dotenv.config();

const port = process.env.PORT || 9001;
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res) => {
    //res.end("<h1>hello, world!</h1>")
    res.sendFile(__dirname + '/public/page1.html')
})

app.post('/page2', (req, res) => {
    
});

app.listen(port, () => console.log(`Server is up on port ${port}...`));
