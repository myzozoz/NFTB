package wad.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Article extends AbstractPersistable<Long> {

    private String title;
    private String lead; //Kuka ois arvannu et ingressi on englanniks "lead"
    private String body;
    private LocalDate publishDate;
    @ManyToMany(mappedBy = "articles")
    private List<Writer> writers;
    @ManyToMany(mappedBy = "articles")
    private List<Category> categories;

    @Lob
    @Basic(fetch= FetchType.LAZY)
    private byte[] picture;
}
