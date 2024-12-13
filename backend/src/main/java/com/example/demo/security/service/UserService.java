package com.example.demo.security.service;

import com.example.demo.security.mapper.UserMapper;
import com.example.demo.security.model.Users;
import com.example.demo.security.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private UserMapper userMapper;

    private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
    public Users registerUser(Users user){
        user.setPassword(encoder.encode(user.getPassword()));
        user = userMapper.toUser(user);
        return userRepo.save(user);
    }

    public Boolean removeUserByName(String username) {
        Users user = userRepo.findByUsername(username);
        userRepo.delete(user);
        return !userRepo.existsByUsername(username);
//        return false;
    }
}
