const Pool = require('pg').Pool;
//import Pool from 'pg';

const pool = new Pool({
  user:     'laksys',
  host:     'localhost',
  database: 'laksysdb',
  password: 'abcd1234',
  port:      5432,
});

pool.connect(
  err => {
    if (err) throw err;
  }
);  

const addFunctionalArea = (req, res) => {
  const {domain, work_type, industry, designation, state, district } = req.body;  
  const qry = `INSERT INTO functional_area 
    (domain, work_type, industry, designation, state, district) 
    VALUES 
    ($1, $2, $3, $4, $5, $6) RETURNING *`
  pool.query(qry, [domain, work_type, industry, designation, state, district], (error, results) => {
    if (error) throw error    
    res.status(201).send(`Record added with ID: ${results.rows[0].id}`)
  });  
}

const lookingForJob = (req, res) => {
  const {name, email, mobile, state, district, eduction, comments } = req.body;  
  const qry = `INSERT INTO looking_for_job 
    (name, email, mobile, state, district, eduction, comments) 
    VALUES 
    ($1, $2, $3, $4, $5, $6, $7) RETURNING *`
  pool.query(qry, [name, email, mobile, state, district, eduction, comments], (error, results) => {
    if (error) throw error    
    res.status(201).send(`Record added with ID: ${results.rows[0].id}`)
  }); 
}

const jobChange = (req, res) => {
  const {name, email, mobile, state, district, ccompany, cdesignation, exp_in_year, comments} = req.body;  
  const qry = `INSERT INTO job_change 
    (name, email, mobile, state, district,  ccompany, cdesignation, exp_in_year, comments) 
    VALUES 
    ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`
  pool.query(qry, [name, email, mobile, state, district, ccompany, cdesignation, exp_in_year, comments], (error, results) => {
    if (error) throw error    
    res.status(201).send(`Record added with ID: ${results.rows[0].id}`)
  }); 
}

module.exports = {
  addFunctionalArea,
  lookingForJob,
  jobChange,
}

//export { addFunctionalArea, lookingForJob, jobChange}