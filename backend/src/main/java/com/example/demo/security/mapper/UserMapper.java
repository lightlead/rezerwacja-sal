package com.example.demo.security.mapper;

import com.example.demo.security.model.Users;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {
    public Users toUser(Users user) {
        return Users.builder()
                .username(user.getUsername())
                .password(user.getPassword())
                .build();
    }
}
