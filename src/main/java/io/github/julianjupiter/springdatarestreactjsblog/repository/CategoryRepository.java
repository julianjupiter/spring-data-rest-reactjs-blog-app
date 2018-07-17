package io.github.julianjupiter.springdatarestreactjsblog.repository;

import io.github.julianjupiter.springdatarestreactjsblog.domain.Category;
import org.springframework.data.repository.CrudRepository;

public interface CategoryRepository extends CrudRepository<Category, Long> {
}
