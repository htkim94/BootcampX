const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const input = process.argv[2];
const values = [`${input}`];

pool.query(`
  SELECT DISTINCT cohorts.name as cohort, teachers.name as name
  FROM assistance_requests
  JOIN teachers ON teacher_id = teachers.id
  JOIN students ON student_id = students.id
  JOIN cohorts ON cohort_id = cohorts.id
  WHERE cohorts.name = $1
  AND completed_at IS NOT NULL
  ORDER BY teachers.name
`, values).then(res => {
  console.log('connected');
  res.rows.forEach(e => {
    console.log(`${e.cohort}: ${e.name}`);
  })
})