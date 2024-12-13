package com.example.demo.security.controller;

import com.example.demo.security.config.UserAuthProvider;
import com.example.demo.security.dto.CredentialsDto;
import com.example.demo.security.dto.SignUpDto;
import com.example.demo.security.dto.UserDto;
import com.example.demo.security.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "auth")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserAuthProvider userAuthProvider;

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.OK)
    public UserDto register(@RequestBody SignUpDto user){
        UserDto createdUser = userService.register(user);
        createdUser.setToken(userAuthProvider.createToken(user.getUsername()));
        return createdUser;
    }

    @PostMapping("/login")
    @ResponseStatus(HttpStatus.OK)
    public UserDto login(@RequestBody CredentialsDto user){
        UserDto userDto = userService.login(user);
        userDto.setToken(userAuthProvider.createToken(userDto.getUsername()));
        return userDto;
    }

    @PostMapping("/delete/{name}")
    @ResponseStatus(HttpStatus.OK)
    public Boolean removeUserByName(@PathVariable("name") String name){
        return userService.remove(name);
    }

}
