package com.example.demo.security.service;

import com.example.demo.security.authentication.JwtService;
import com.example.demo.security.dto.AuthDto;
import com.example.demo.security.dto.SignUpDto;
import com.example.demo.security.dto.UserDto;
import com.example.demo.security.entities.Roles;
import com.example.demo.security.exceptions.AppException;
import com.example.demo.security.mapper.UserMapper;
import com.example.demo.security.dto.CredentialsDto;
import com.example.demo.security.entities.Users;
import com.example.demo.security.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.CharBuffer;
import java.util.Optional;
import java.util.stream.Stream;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

    public UserDto find(String username) {
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

    public AuthDto login(CredentialsDto authRequest) {
        String error = "Nieprawidłowe hasło lub nazwa użytkownika";
        Users user = userRepo.findByUsername(authRequest.getUsername())
                .orElseThrow(() -> new AppException(error, HttpStatus.BAD_REQUEST));

        if (passwordEncoder.matches(authRequest.getPassword(), user.getPassword())) {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            authRequest.getUsername(),
                            authRequest.getPassword()
                    )
            );

            return AuthDto
                    .builder()
                    .accessToken(jwtService.generateToken(user))
                    .build();
        }
        throw new AppException(error, HttpStatus.BAD_REQUEST);
    }

    public AuthDto register(SignUpDto userDto){

        Optional<Users> optionalUser = userRepo.findByUsername(userDto.getUsername());
        if (optionalUser.isPresent()) {
            throw new AppException("User with that name already exists", HttpStatus.BAD_REQUEST);
        }

        Users user = userMapper.signUpToUser(userDto);
        user.setPassword(passwordEncoder.encode(userDto.getPassword()));
        user.setRole(Roles.USER);
        userRepo.save(user);

        return AuthDto
                .builder()
                .accessToken(jwtService.generateToken(user))
                .build();
    }
}
