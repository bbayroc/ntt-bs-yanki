package com.example.yanki.repository;

import com.example.yanki.entity.YankiTransaction;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransactionRepository extends MongoRepository<YankiTransaction, Long> {
    List<YankiTransaction> findBySenderOrRecipient(String cellphone);

}
