const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'laksys',
    host: 'localhost',
    database: 'laksysdb',
    password: 'abcd1234',
    port: 5432,
});

pool.connect(function (err) {
    if (err) {
        console.log('------------------')
        console.log(err)
        console.log('------------------')
        throw err;
    }
    console.log("Connected!");
});

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const insert = (req, res)=> {
    const {
        domain,
        worktype_it,
        worktype_bpo,
        industry,
        designation,
        state,
        district } = req.body;

        console.log(domain, worktype_it, worktype_bpo, industry, designation, state, district)
        res.end("form submitted successully!");

    // pool.query('INSERT INTO users (domain, worktype_id) VALUES ($1, $2)', [domain, worktype_it], (error, results) => {
    //     if (error) {
    //         throw error
    //     }
    //     response.status(201).send(`User added with ID: ${results.insertId}`)
    // })
  }