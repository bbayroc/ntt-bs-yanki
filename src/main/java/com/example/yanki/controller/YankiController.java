package com.example.yanki.controller;


import com.example.yanki.service.SequenceGeneratorService;
import com.example.yanki.entity.Yanki;
import com.example.yanki.repository.YankiRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/Yanki")
public class YankiController {
    @Autowired
    private YankiRepository yankiRepository;
    @Autowired
    private SequenceGeneratorService sequenceGeneratorService;
    @PostMapping
    public Yanki save(@RequestBody Yanki yanki) {
        yanki.setId(sequenceGeneratorService.generateSequence(Yanki.SEQUENCE_NAME));
        return yankiRepository.save(yanki);    }
    @GetMapping("/Identification/{identification}")
    public Yanki find(@PathVariable String identification) {
        return yankiRepository.findByIdentification(identification);    }

    @GetMapping("/{cellphone}")
    public Yanki find2(@PathVariable String cellphone) {
        return yankiRepository.findByCellphone(cellphone);
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
