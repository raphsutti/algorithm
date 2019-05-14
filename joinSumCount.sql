-- write your code in PostgreSQL 9.4
SELECT d.dept_id as dept_id, count(emp_id) as count, sum(salary) as sum_of_salary from department d join employee e on d.dept_id = e.dept_id
group by d.dept_id
order by d.dept_id;