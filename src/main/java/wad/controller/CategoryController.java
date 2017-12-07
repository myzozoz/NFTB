package wad.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import wad.domain.Category;
import wad.repository.CategoryRepository;

import java.util.List;

@RestController
public class CategoryController {
    @Autowired
    private CategoryRepository categoryRep;

    //category names are turned to lowercase in order to avoid issues when submitting category name in URL

    @PostMapping("/categories")
    public Category add(@RequestBody Category category) {
        category.setName(category.getName().toLowerCase());
        return categoryRep.save(category);
    }

    @GetMapping("/categories")
    public List<Category> getall() {
        return categoryRep.findAll();
    }

    @GetMapping("/categories/{name}")
    public Category getone(@PathVariable String name) {
        name = name.toLowerCase();
        return categoryRep.findByName(name);
    }
}
