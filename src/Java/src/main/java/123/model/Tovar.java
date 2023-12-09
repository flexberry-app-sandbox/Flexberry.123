package 123.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import 123.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Товар
 */
@Entity(name = "IIS123Товар")
@Table(schema = "public", name = "Товар")
public class Tovar {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Наименование")
    private String наименование;

    @Column(name = "Свойства")
    private String свойства;

    @Column(name = "Изображение")
    private String изображение;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Proizvoditel")
    @Convert("Proizvoditel")
    @Column(name = "Производитель", length = 16, unique = true, nullable = false)
    private UUID _proizvoditelid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Proizvoditel", insertable = false, updatable = false)
    private Proizvoditel proizvoditel;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Postavshhik")
    @Convert("Postavshhik")
    @Column(name = "Поставщик", length = 16, unique = true, nullable = false)
    private UUID _postavshhikid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Postavshhik", insertable = false, updatable = false)
    private Postavshhik postavshhik;


    public Tovar() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getНаименование() {
      return наименование;
    }

    public void setНаименование(String наименование) {
      this.наименование = наименование;
    }

    public String getСвойства() {
      return свойства;
    }

    public void setСвойства(String свойства) {
      this.свойства = свойства;
    }

    public String getИзображение() {
      return изображение;
    }

    public void setИзображение(String изображение) {
      this.изображение = изображение;
    }


}