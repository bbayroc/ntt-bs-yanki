package com.example.yanki.controller;


import com.example.yanki.entity.YankiTransaction;
import com.example.yanki.repository.TransactionRepository;
import com.example.yanki.service.SequenceGeneratorService;
import com.example.yanki.entity.Yanki;
import com.example.yanki.repository.YankiRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/yanki")
public class YankiController {
    @Autowired
    private YankiRepository yankiRepository;

    @Autowired
    private TransactionRepository transactionRepository;
    @Autowired
    private SequenceGeneratorService sequenceGeneratorService;

    @PostMapping
    public Yanki save(@RequestBody Yanki yanki) {
        yanki.setId(sequenceGeneratorService.generateSequence(Yanki.SEQUENCE_NAME));
        return yankiRepository.save(yanki);
    }

    @GetMapping("/identification/{identification}")
    public Yanki find(@PathVariable String identification) {
        return yankiRepository.findByIdentification(identification);
    }

    @GetMapping("/{cellphone}")
    public Yanki find2(@PathVariable String cellphone) {
        return yankiRepository.findByCellphone(cellphone);
    }

    @PatchMapping("/{identification}")
    public Yanki patch(@PathVariable String identification, @RequestBody Yanki yanki) {

        Yanki yanki2 = yankiRepository.findByIdentification(identification);
        yanki2.setDebitcard(yanki.getDebitcard());

        return yankiRepository.save(yanki2);
    }

    @RequestMapping("/transaction/{cellphone}")
    public YankiTransaction transaction(@PathVariable String cellphone, @RequestBody YankiTransaction yankiTransaction) {

        Yanki yankisender = yankiRepository.findByCellphone(cellphone);

        Yanki yankirecipient = yankiRepository.findByCellphone(yankiTransaction.getRecipient());

        if (yankisender == null || yankirecipient == null || yankiTransaction.getAmount() <= 0 )
        {return null;}
        else {
            yankiTransaction.setSender(cellphone);
            yankisender.setBalance(yankisender.getBalance() - yankiTransaction.getAmount());
            yankiRepository.save(yankisender);

            yankirecipient.setBalance(yankirecipient.getBalance() + yankiTransaction.getAmount());
            yankiRepository.save(yankirecipient);

            return transactionRepository.save(yankiTransaction);
        }

    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable long id) {
        yankiRepository.deleteById(id);
    }

    @PutMapping("/{id}")
    public Yanki update(@PathVariable long id, @RequestBody Yanki yanki) {
        return yankiRepository.save(yanki);
    }

}
