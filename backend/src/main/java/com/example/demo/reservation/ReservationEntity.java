package com.example.demo.reservation;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "t_reservation")
public class ReservationEntity {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Automatyczne generowanie ID
    private Long id;

    @Column(name = "name", nullable = false, length = 100) // Pole dla nazwy rezerwacji
    private String name;


}
