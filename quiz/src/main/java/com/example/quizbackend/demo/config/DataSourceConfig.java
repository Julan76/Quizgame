package com.example.quizbackend.demo.config;

import com.wia.jwt.configuration.DBConfig;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties(prefix="spring.datasource")
public class DataSourceConfig {
    @Setter
    private String url;
    @Setter
    private String username;
    @Setter
    private String password;
    @Setter
    private String driverClassName;
    @Bean
    public DBConfig dbConfig(){
        return new DBConfig(url,username,password,driverClassName);
    }

}

