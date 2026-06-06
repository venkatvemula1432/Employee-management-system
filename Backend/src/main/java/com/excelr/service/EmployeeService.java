package com.excelr.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.excelr.entity.Employee;
import com.excelr.repository.EmployeeRepo;

@Service
public class EmployeeService {

	@Autowired
	private EmployeeRepo employeeRepo;
	
	// for creating Employee data
	
	public Employee addEmployee(Employee employee)
	{
		return employeeRepo.save(employee);
	}
	
	
	// to read all the employee details
	public List<Employee> getAllEmployees()
	{
		return employeeRepo.findAll();
	}
	
	// to read single employee data based on id
	public Optional<Employee> getEmpById(Integer id)
	{
		return employeeRepo.findById(id);
	}
	
	
	// for updating the employee data
	
	public Employee updateEmployee(Employee updateEmployee)
	{
		Optional<Employee> stdid=employeeRepo.findById(updateEmployee.getId());
		Employee e1 = stdid.get();
		e1.setName(updateEmployee.getName());
		e1.setAge(updateEmployee.getAge());
		e1.setDept(updateEmployee.getDept());
		
		return employeeRepo.save(e1);
	}
	
	
	// to delete employee based on id
	
	public Boolean deleteEmployee(Integer id)
	{
		employeeRepo.deleteById(id);
		return true;
	}
	
	
	
	
	
	
}
