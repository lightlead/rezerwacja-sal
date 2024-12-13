package com.example.demo.security.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Entity
@Table(name = "t_users")
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Automatyczne generowanie ID
    private Long id;

    @Column(nullable = false) // Pole dla nazwy użytkownika
    @Size(max = 100)
    private String username;

    @Column(nullable = false) // Pole dla hasła
    @Size(max = 100)
    private String password;

    @Column(name = "first_name", nullable = false)
    @Size(max = 100)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    @Size(max = 100)
    private String lastName;
}
