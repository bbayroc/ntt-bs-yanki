package com.example.yanki.repository;

import com.example.yanki.entity.YankiTransaction;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TransactionRepository extends MongoRepository<YankiTransaction, Long> {

    //YankiTransaction findByIdentification(String identification);

    //YankiTransaction findBySenderOrRecipient(String cellphone);

}
