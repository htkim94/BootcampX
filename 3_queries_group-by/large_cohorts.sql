SELECT cohorts.name AS cohort_name, COUNT(students.id) AS students_count
  FROM cohorts
  JOIN students ON cohorts.id = students.cohort_id
  GROUP BY cohorts.name
  HAVING COUNT(students.id) >= 18
  ORDER BY student_count;