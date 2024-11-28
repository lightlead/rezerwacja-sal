package com.example.demo.reservation;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepo reservationRepo;

    @Autowired
    private ReservationMapper reservationMapper;


    public Boolean existsByName(String name){
        return reservationRepo.existsByName(name);
    }

    public String getString() {
        return "xD";
    }


    public void createByName(String name) {
        ReservationEntity reservationEntity = reservationMapper.toEntity(name);
        reservationRepo.save(reservationEntity);
    }

}
