package com.example.yanki.repository;

import com.example.yanki.entity.Yanki;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface YankiRepository extends MongoRepository<Yanki, Long> {

    Yanki findByIdentification(String identification);

    Yanki findByCellphone(String cellphone);

}
