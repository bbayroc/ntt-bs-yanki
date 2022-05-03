package com.example.yanki.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection = "Yanki")
@Data
public class Yanki {
    @Id
    @Transient
    public static final String SEQUENCE_NAME = "yanki_sequence";
    private long id;
    @Indexed(unique=true)
    private String identification;
    @Indexed(unique=true)
    private String cellphone;
    private String imei;
    private String email;
    private String debitcard;
    private double balance;
    private String currency;
}
