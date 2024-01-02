import express  from 'express';
import auth     from 'express-basic-auth';

const app = express()
const agents = {'admin': 'abcd1234', 'agent': 'agent1234'}

function unres(req){
    return req.auth
        ? ('Credentials ' + req.auth.user + ':' + req.auth.password + ' rejected')
        : 'No credentials provided'
}
app.use( auth({
        users: agents, 
        challenge: true, 
        realm: 'Imb4T3st4pp',
        unauthorizedResponse: unres,
    }));

app.get("/", (req, res) => {
    res.end("<h1>laksys! Welcome</h1>")
})

app.listen(8888, () => console.log('Server is up and running...'));

