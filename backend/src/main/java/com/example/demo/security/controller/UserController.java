package com.example.demo.security.controller;

import com.example.demo.security.model.Users;
import com.example.demo.security.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "auth")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.OK)
    public Users register(@RequestBody Users user){
        return userService.registerUser(user);
    }

    @PostMapping("/delete/{name}")
    @ResponseStatus(HttpStatus.OK)
    public Boolean removeUserByName(@PathVariable("name") String name){
        return userService.removeUserByName(name);
    }

}
