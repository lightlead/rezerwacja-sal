package com.example.demo.reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ReservationRepo extends JpaRepository<ReservationEntity, Long> {

    boolean existsByName(String name);

}
