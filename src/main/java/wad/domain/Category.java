package wad.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
//@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Category extends AbstractPersistable<Long> {
    private String name;
    @ManyToMany
    private List<Article> articles;
}
