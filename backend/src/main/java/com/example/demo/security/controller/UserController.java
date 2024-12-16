package com.example.demo.security.controller;

import com.example.demo.security.dto.AuthDto;
import com.example.demo.security.dto.CredentialsDto;
import com.example.demo.security.dto.SignUpDto;
import com.example.demo.security.dto.UserDto;
import com.example.demo.security.entities.Users;
import com.example.demo.security.exceptions.AppException;
import com.example.demo.security.mapper.UserMapper;
import com.example.demo.security.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "auth")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserMapper userMapper;

    @PostMapping("/register")

    public AuthDto register(@RequestBody SignUpDto user){
        return userService.register(user);
    }

    @PostMapping("/login")
    @ResponseStatus(HttpStatus.OK)
    public AuthDto login(@RequestBody CredentialsDto user){
        return userService.login(user);
    }

    @PostMapping("/remove/{name}")
    @ResponseStatus(HttpStatus.OK)
    public Boolean remove(@PathVariable("name") String name){
        return userService.remove(name);
    }

    @PostMapping("/current")
    @ResponseStatus(HttpStatus.OK)
    public UserDto currentUser(@AuthenticationPrincipal Users user){
        if (user == null) { throw new AppException("User is null", HttpStatus.NOT_FOUND); }
        return userMapper.toUserDto(user);
    }

}
