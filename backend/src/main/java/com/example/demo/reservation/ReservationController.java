package com.example.demo.reservation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "v1/reservation")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    @GetMapping("/exists/{name}")
    @ResponseStatus(HttpStatus.OK)
    public Boolean existsByName(@PathVariable("name") String name) {
        return reservationService.existsByName(name);
    }

    @PostMapping("/create/{name}")
    @ResponseStatus(HttpStatus.OK)
    public void createByName(@PathVariable("name") String name) {
        reservationService.createByName(name);
    }


    @GetMapping("/calendar")
    @ResponseStatus(HttpStatus.OK)
    public String getString() {
        return reservationService.getString();
    }

}
