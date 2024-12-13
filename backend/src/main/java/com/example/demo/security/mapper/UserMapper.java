package com.example.demo.security.mapper;

import com.example.demo.security.dto.SignUpDto;
import com.example.demo.security.dto.UserDto;
import com.example.demo.security.entities.Users;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {
    UserDto toUserDto(Users user);

    @Mapping(target = "password", ignore = true)
    Users signUpToUser(SignUpDto signUpDto);
}
