package com.inventorymanager.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.inventorymanager.model.Product;
import com.inventorymanager.repository.ProductRepository;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins ="*") //for React

public class ProductController {
    @Autowired
    private ProductRepository productRepo;

    @GetMapping
    public List<Product> getAllProducts(){
        return productRepo.findAll();
    }

    @PostMapping
    public Product addProduct(@RequestBody Product product){
        return productRepo.save(product);
    }
    
    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable Long id, @RequestBody Product updated) {
        return productRepo.findById(id)
                .map(p -> {
                    p.setName(updated.getName());
                    p.setPrice(updated.getPrice());
                    p.setQuantity(updated.getQuantity());
                    p.setAddedDate(updated.getAddedDate());
                    return productRepo.save(p);
                })
                .orElseThrow(() -> new RuntimeException("Product not found: " + id));
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id) {
        productRepo.deleteById(id);
    }
}
