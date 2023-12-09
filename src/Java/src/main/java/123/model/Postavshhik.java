package 123.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import 123.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Поставщик
 */
@Entity(name = "IIS123Поставщик")
@Table(schema = "public", name = "Поставщик")
public class Postavshhik {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Телефон")
    private Integer телефон;

    @Column(name = "Поставщик")
    private String поставщик;


    public Postavshhik() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getТелефон() {
      return телефон;
    }

    public void setТелефон(Integer телефон) {
      this.телефон = телефон;
    }

    public String getПоставщик() {
      return поставщик;
    }

    public void setПоставщик(String поставщик) {
      this.поставщик = поставщик;
    }


}