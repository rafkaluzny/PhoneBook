package com.phonebook;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.Collection;


@RestController
@RequestMapping("/api/users")
public class PhoneBookController {

    @Autowired
    private UserRepo repository;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<Collection<User>> getAllUsers() {
        return new ResponseEntity<>((Collection<User>) repository.findAll(), HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public ResponseEntity<User> getUserWithId(@PathVariable Long id) {
        return new ResponseEntity<>(repository.findOne(id),HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.GET, params = {"lastName"})
    public ResponseEntity<Collection<User>> findUserWithLastName(@RequestParam(value="lastName") String lastName) {
        return new ResponseEntity<>(repository.findByLastName(lastName), HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> addUser(@RequestBody User input) {
        return new ResponseEntity<>(repository.save(input), HttpStatus.CREATED);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity<?> updateUser(@RequestBody User input) {
        return new ResponseEntity<>(repository.save(input), HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
    public ResponseEntity<User> deleteUserWithId(@PathVariable Long id) {
        repository.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
