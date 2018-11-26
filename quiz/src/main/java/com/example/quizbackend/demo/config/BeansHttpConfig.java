package com.example.quizbackend.demo.config;

import com.wia.jwt.Constants.HashMap3Values;
import com.wia.jwt.configuration.security.SecurityConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;

import java.util.Arrays;

@Configuration
public class BeansHttpConfig {



    @Bean
    SecurityConfiguration securityConfiguration(){
        HashMap3Values hashMap3Values= new HashMap3Values(HttpMethod.POST,"/questions/**","ADMIN");
        SecurityConfiguration securityConfiguration= new SecurityConfiguration();
        securityConfiguration.setHashMap3ValuesList(Arrays.asList(hashMap3Values));
   return securityConfiguration;
    }



}
