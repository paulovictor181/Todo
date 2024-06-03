package br.com.paulovictor181.twtodos.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.paulovictor181.twtodos.models.Todo;

public interface TodoRepository extends JpaRepository<Todo,Long>{
    
}
