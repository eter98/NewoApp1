package io.github.jhipster.application.domain;


import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;

/**
 * A Landing.
 */
@Entity
@Table(name = "landing")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Landing implements Serializable {

    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "descripcion")
    private String descripcion;

    @Column(name = "telefono_negocio")
    private String telefonoNegocio;

    @Column(name = "numero_puestos")
    private Integer numeroPuestos;

    @Column(name = "tarifa")
    private Integer tarifa;

    @Lob
    @Column(name = "fotografia")
    private byte[] fotografia;

    @Column(name = "fotografia_content_type")
    private String fotografiaContentType;

    @Column(name = "iva")
    private Boolean iva;

    @OneToOne
    @JoinColumn(unique = true)
    private Sedes sedes;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public Landing descripcion(String descripcion) {
        this.descripcion = descripcion;
        return this;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getTelefonoNegocio() {
        return telefonoNegocio;
    }

    public Landing telefonoNegocio(String telefonoNegocio) {
        this.telefonoNegocio = telefonoNegocio;
        return this;
    }

    public void setTelefonoNegocio(String telefonoNegocio) {
        this.telefonoNegocio = telefonoNegocio;
    }

    public Integer getNumeroPuestos() {
        return numeroPuestos;
    }

    public Landing numeroPuestos(Integer numeroPuestos) {
        this.numeroPuestos = numeroPuestos;
        return this;
    }

    public void setNumeroPuestos(Integer numeroPuestos) {
        this.numeroPuestos = numeroPuestos;
    }

    public Integer getTarifa() {
        return tarifa;
    }

    public Landing tarifa(Integer tarifa) {
        this.tarifa = tarifa;
        return this;
    }

    public void setTarifa(Integer tarifa) {
        this.tarifa = tarifa;
    }

    public byte[] getFotografia() {
        return fotografia;
    }

    public Landing fotografia(byte[] fotografia) {
        this.fotografia = fotografia;
        return this;
    }

    public void setFotografia(byte[] fotografia) {
        this.fotografia = fotografia;
    }

    public String getFotografiaContentType() {
        return fotografiaContentType;
    }

    public Landing fotografiaContentType(String fotografiaContentType) {
        this.fotografiaContentType = fotografiaContentType;
        return this;
    }

    public void setFotografiaContentType(String fotografiaContentType) {
        this.fotografiaContentType = fotografiaContentType;
    }

    public Boolean isIva() {
        return iva;
    }

    public Landing iva(Boolean iva) {
        this.iva = iva;
        return this;
    }

    public void setIva(Boolean iva) {
        this.iva = iva;
    }

    public Sedes getSedes() {
        return sedes;
    }

    public Landing sedes(Sedes sedes) {
        this.sedes = sedes;
        return this;
    }

    public void setSedes(Sedes sedes) {
        this.sedes = sedes;
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
        Landing landing = (Landing) o;
        if (landing.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), landing.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Landing{" +
            "id=" + getId() +
            ", descripcion='" + getDescripcion() + "'" +
            ", telefonoNegocio='" + getTelefonoNegocio() + "'" +
            ", numeroPuestos=" + getNumeroPuestos() +
            ", tarifa=" + getTarifa() +
            ", fotografia='" + getFotografia() + "'" +
            ", fotografiaContentType='" + getFotografiaContentType() + "'" +
            ", iva='" + isIva() + "'" +
            "}";
    }
}
