package com.example.quizbackend.demo.repository;

import com.wia.jwt.entities.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppUserRepository  extends JpaRepository<AppUser,Long> {
    AppUser findByUsername(String username);
}
