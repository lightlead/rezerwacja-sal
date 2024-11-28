package com.example.demo.reservation;

import org.springframework.stereotype.Component;

@Component
public class ReservationMapper {

    public ReservationEntity toEntity(String name) {
        return ReservationEntity.builder()
                .name(name)
                .build();
    }

}