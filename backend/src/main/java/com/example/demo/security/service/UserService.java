package com.example.demo.security.service;

import com.example.demo.security.dto.SignUpDto;
import com.example.demo.security.dto.UserDto;
import com.example.demo.security.exceptions.AppException;
import com.example.demo.security.mapper.UserMapper;
import com.example.demo.security.dto.CredentialsDto;
import com.example.demo.security.entities.Users;
import com.example.demo.security.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.CharBuffer;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserMapper userMapper;

    public UserDto register(SignUpDto userDto){

        Optional<Users> optionalUser = userRepo.findByUsername(userDto.getUsername());

        if (optionalUser.isPresent()) {
            throw new AppException("User with that name already exists", HttpStatus.BAD_REQUEST);
        }

        Users user = userMapper.signUpToUser(userDto);
        user.setPassword(passwordEncoder.encode(userDto.getPassword()));

        Users savedUser = userRepo.save(user);
        return userMapper.toUserDto(savedUser);
    }

    public UserDto findByUsername(String username) {
        Users user = userRepo.findByUsername(username)
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));
        return userMapper.toUserDto(user);
    }

    public Boolean remove(String username) {
        Users user = userRepo.findByUsername(username)
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));

        userRepo.delete(user);
        return !userRepo.existsByUsername(username);
    }

    public UserDto login(CredentialsDto credentialsDto) {
        Users user = userRepo.findByUsername(credentialsDto.getUsername())
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));
        if (passwordEncoder.matches(CharBuffer.wrap(credentialsDto.getPassword()), user.getPassword())) {
            return userMapper.toUserDto(user);
        }
        throw new AppException("Invalid password", HttpStatus.BAD_REQUEST);
    }
}
