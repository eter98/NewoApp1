package io.github.jhipster.application.domain;


import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

/**
 * A EntradaMiembros.
 */
@Entity
@Table(name = "entrada_miembros")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class EntradaMiembros implements Serializable {

    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "fecha_entrada")
    private LocalDate fechaEntrada;

    @Column(name = "hora_entrada")
    private String horaEntrada;

    @Column(name = "tipo_entrada")
    private Integer tipoEntrada;

    @Column(name = "tiempo_maximo")
    private Boolean tiempoMaximo;

    @OneToOne
    @JoinColumn(unique = true)
    private Sedes sedes;

    @OneToOne
    @JoinColumn(unique = true)
    private Miembros miembros;

    @OneToOne
    @JoinColumn(unique = true)
    private EspacioLibre espacioLibre;

    @OneToOne
    @JoinColumn(unique = true)
    private EspaciosReserva espaciosReserva;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getFechaEntrada() {
        return fechaEntrada;
    }

    public EntradaMiembros fechaEntrada(LocalDate fechaEntrada) {
        this.fechaEntrada = fechaEntrada;
        return this;
    }

    public void setFechaEntrada(LocalDate fechaEntrada) {
        this.fechaEntrada = fechaEntrada;
    }

    public String getHoraEntrada() {
        return horaEntrada;
    }

    public EntradaMiembros horaEntrada(String horaEntrada) {
        this.horaEntrada = horaEntrada;
        return this;
    }

    public void setHoraEntrada(String horaEntrada) {
        this.horaEntrada = horaEntrada;
    }

    public Integer getTipoEntrada() {
        return tipoEntrada;
    }

    public EntradaMiembros tipoEntrada(Integer tipoEntrada) {
        this.tipoEntrada = tipoEntrada;
        return this;
    }

    public void setTipoEntrada(Integer tipoEntrada) {
        this.tipoEntrada = tipoEntrada;
    }

    public Boolean isTiempoMaximo() {
        return tiempoMaximo;
    }

    public EntradaMiembros tiempoMaximo(Boolean tiempoMaximo) {
        this.tiempoMaximo = tiempoMaximo;
        return this;
    }

    public void setTiempoMaximo(Boolean tiempoMaximo) {
        this.tiempoMaximo = tiempoMaximo;
    }

    public Sedes getSedes() {
        return sedes;
    }

    public EntradaMiembros sedes(Sedes sedes) {
        this.sedes = sedes;
        return this;
    }

    public void setSedes(Sedes sedes) {
        this.sedes = sedes;
    }

    public Miembros getMiembros() {
        return miembros;
    }

    public EntradaMiembros miembros(Miembros miembros) {
        this.miembros = miembros;
        return this;
    }

    public void setMiembros(Miembros miembros) {
        this.miembros = miembros;
    }

    public EspacioLibre getEspacioLibre() {
        return espacioLibre;
    }

    public EntradaMiembros espacioLibre(EspacioLibre espacioLibre) {
        this.espacioLibre = espacioLibre;
        return this;
    }

    public void setEspacioLibre(EspacioLibre espacioLibre) {
        this.espacioLibre = espacioLibre;
    }

    public EspaciosReserva getEspaciosReserva() {
        return espaciosReserva;
    }

    public EntradaMiembros espaciosReserva(EspaciosReserva espaciosReserva) {
        this.espaciosReserva = espaciosReserva;
        return this;
    }

    public void setEspaciosReserva(EspaciosReserva espaciosReserva) {
        this.espaciosReserva = espaciosReserva;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        EntradaMiembros entradaMiembros = (EntradaMiembros) o;
        if (entradaMiembros.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), entradaMiembros.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "EntradaMiembros{" +
            "id=" + getId() +
            ", fechaEntrada='" + getFechaEntrada() + "'" +
            ", horaEntrada='" + getHoraEntrada() + "'" +
            ", tipoEntrada=" + getTipoEntrada() +
            ", tiempoMaximo='" + isTiempoMaximo() + "'" +
            "}";
    }
}
