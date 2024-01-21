const Pool = require('pg').Pool;

const pool = new Pool({
  user:     'postgres',
  host:     '15.207.161.44',
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
    } else
	console.log('---------connection succeded')
  }
);


