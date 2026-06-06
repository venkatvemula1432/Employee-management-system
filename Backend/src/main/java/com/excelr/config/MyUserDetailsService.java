package com.excelr.config;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.excelr.entity.User;
import com.excelr.repository.UserRepository;

@Service
public class MyUserDetailsService {

	private final UserRepository userRepository;
	
	public MyUserDetailsService(UserRepository userRepository)
	{
		this.userRepository = userRepository;
	}
	
	 public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
	        User user = userRepository.findByUsername(username);
	        System.out.println("security usernam "+ username);
	        
	        if(user == null)
	        {
	        	throw new UsernameNotFoundException("This user doent not exist in the DB");
	        }
	       System.out.println("User from DB "+user);
	       
	       return new UserPrinciple(user);
	    }
}
