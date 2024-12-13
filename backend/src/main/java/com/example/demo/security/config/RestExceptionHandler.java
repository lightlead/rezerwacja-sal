package com.example.demo.security.config;

import com.example.demo.security.dto.ErrorDto;
import com.example.demo.security.exceptions.AppException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@ControllerAdvice
public class RestExceptionHandler {

    @ExceptionHandler(value = { AppException.class })
    @ResponseBody
    public ErrorDto handleException(AppException ex) {
        return ErrorDto.builder().message(ex.getMessage()).build();
    }
}