package com.excelr.restcontroller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.excelr.entity.Employee;
import com.excelr.service.EmployeeService;

@RestController
public class EmployeeRestController {

	@Autowired
	private EmployeeService employeeService;
	
	// to create Employee
	
	@PostMapping("/addEmployee")
	@CrossOrigin(origins="http://localhost:5173")
	public Employee addEmployee(@RequestBody Employee employee)
	{
		return employeeService.addEmployee(employee);
	}
	
	// to get all employees
	@GetMapping("/getEmployees")
	@CrossOrigin(origins="http://localhost:5173")
	public List<Employee> getAllEmployees()
	{
		return employeeService.getAllEmployees();
	}
	
	//to get single employee data
	
	@GetMapping("/emp/{id}")
	@CrossOrigin(origins="http://localhost:5173")
	public Optional<Employee> getEmpById(@PathVariable Integer id)
	{
		return employeeService.getEmpById(id);
	}
	
	@PutMapping("/updateEmp")
	@CrossOrigin(origins="http://localhost:5173")
	public Employee updateEmployee(@RequestBody Employee employee)
	{
		return employeeService.updateEmployee(employee);
	}
	
	
	@DeleteMapping("/deleteEmp/{id}")
	@CrossOrigin(origins="http://localhost:5173")
	public Boolean deleteEmployee(@PathVariable Integer id)
	{
		return employeeService.deleteEmployee(id);
	}
	

	
}
