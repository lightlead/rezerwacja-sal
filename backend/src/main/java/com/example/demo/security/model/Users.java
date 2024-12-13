package com.example.demo.security.model;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "t_users")
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Automatyczne generowanie ID
    private Long id;

    @Column(name = "username", nullable = false, length = 100) // Pole dla nazwy użytkownika
    private String username;

    @Column(name = "password", nullable = false, length = 100) // Pole dla hasła
    private String password;
}
