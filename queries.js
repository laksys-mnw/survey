const Pool = require('pg').Pool;

const pool = new Pool({
  user:     'postgres',
  host:     'localhost',
  database: 'survey',
  password: 'Poultry@mnxw123$',
  port:      5432,
});

pool.connect(
  err => {
    if (err) { //throw err;
      console.log('------unable to connect db. exiting... app ------')
      console.log( err['code'])      
      process.exit(0);
    }
  }
);

const addFunctionalArea = (req, res) => {
  const { domain, work_type, industry, designation, state, district } = req.body;
  const qry = `INSERT INTO functional_area 
    (domain, work_type, industry, designation, state, district) 
    VALUES 
    ($1, $2, $3, $4, $5, $6) RETURNING *`
  pool.query(qry, [domain, work_type, industry, designation, state, district], (error, results) => {
    if (error) throw error
    //res.status(201).send(`Record added with ID: ${results.rows[0].id}`)
    res.status(201).send("<h3>Thankyou!</h3>")
  });
}

const addFunctionalAreaReport = (req, res) => {   
  pool.query("SELECT * FROM  functional_area", (error, results) => {
    if (error) throw error    
    //res.status(201).send(results.rows)
    res.status(201).render('far.ejs', {data: results.rows})    
  });  
}

const lookingForJob = (req, res) => {
  const { name, email, mobile, state, district, education, comments } = req.body;
  const qry = `INSERT INTO looking_for_job 
    (name, email, mobile, state, district, education, comments) 
    VALUES 
    ($1, $2, $3, $4, $5, $6, $7) RETURNING *`
  pool.query(qry, [name, email, mobile, state, district, education, comments], (error, results) => {
    if (error) throw error
    //res.status(201).send(`Record added with ID: ${results.rows[0].id}`)
    res.status(201).send("<h3>Thankyou!</h3>")
  });
}

const lookingForJobReport = (req, res) => {  
  pool.query("SELECT * FROM  looking_for_job", (error, results) => {
    if (error) throw error
    //res.status(201).send(results.rows)
    res.status(201).render('ljr.ejs', {data: results.rows})
  }); 
}

const jobChange = (req, res) => {
  const { name, email, mobile, state, district, ccompany, cdesignation, exp_in_year, comments } = req.body;
  const qry = `INSERT INTO job_change 
    (name, email, mobile, state, district,  ccompany, cdesignation, exp_in_year, comments) 
    VALUES 
    ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`
  pool.query(qry, [name, email, mobile, state, district, ccompany, cdesignation, exp_in_year, comments], (error, results) => {
    if (error) throw error
    //res.status(201).send(`Record added with ID: ${results.rows[0].id}`)
    res.status(201).send("<h3>Thankyou!</h3>")
  });
}

const jobChangeReport = (req, res) => { 
  pool.query("SELECT * FROM  job_change", (error, results) => {
    if (error) throw error
    //res.status(201).send(results.rows)
    res.status(201).render('jcr.ejs', {data: results.rows})
  }); 
}

module.exports = {
  addFunctionalArea,
  addFunctionalAreaReport,
  lookingForJob,
  lookingForJobReport,
  jobChange,
  jobChangeReport,
}

//export { addFunctionalArea, lookingForJob, jobChange}
