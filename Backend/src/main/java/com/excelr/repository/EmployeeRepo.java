package com.excelr.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.excelr.entity.Employee;

public interface EmployeeRepo extends JpaRepository<Employee, Integer> {

}
