package com.example.yanki.entity;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Yanki_Transaction")
@Data
public class YankiTransaction {

        private String sender;
        private String recipient;
        private double amount;
        private String created;

    }
