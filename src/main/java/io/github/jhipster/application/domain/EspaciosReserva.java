package io.github.jhipster.application.domain;


import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;

/**
 * A EspaciosReserva.
 */
@Entity
@Table(name = "espacios_reserva")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class EspaciosReserva implements Serializable {

    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "descripcion")
    private String descripcion;

    @Column(name = "facilidades")
    private String facilidades;

    @Column(name = "capacidad")
    private Integer capacidad;

    @Column(name = "apertura")
    private String apertura;

    @Column(name = "cierre")
    private String cierre;

    @Column(name = "tarifa_1_hora")
    private Integer tarifa1Hora;

    @Column(name = "tarifa_2_hora")
    private Integer tarifa2Hora;

    @Column(name = "tarifa_3_hora")
    private Integer tarifa3Hora;

    @Column(name = "tarifa_4_hora")
    private Integer tarifa4Hora;

    @Column(name = "tarifa_5_hora")
    private Integer tarifa5Hora;

    @Column(name = "tarifa_6_hora")
    private Integer tarifa6Hora;

    @Column(name = "tarifa_7_hora")
    private Integer tarifa7Hora;

    @Column(name = "tarifa_8_hora")
    private Integer tarifa8Hora;

    @Column(name = "estado_reserva")
    private Integer estadoReserva;

    @Column(name = "wifi")
    private String wifi;

    @OneToOne
    @JoinColumn(unique = true)
    private Sedes sedes;

    @OneToOne(mappedBy = "espaciosReserva")
    @JsonIgnore
    private Reservas reservas;

    @OneToOne(mappedBy = "espaciosReserva")
    @JsonIgnore
    private EntradaMiembros entradaMiembros;

    @OneToOne(mappedBy = "espaciosReserva")
    @JsonIgnore
    private EntradaInvitados entradaInvitados;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public EspaciosReserva nombre(String nombre) {
        this.nombre = nombre;
        return this;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public EspaciosReserva descripcion(String descripcion) {
        this.descripcion = descripcion;
        return this;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getFacilidades() {
        return facilidades;
    }

    public EspaciosReserva facilidades(String facilidades) {
        this.facilidades = facilidades;
        return this;
    }

    public void setFacilidades(String facilidades) {
        this.facilidades = facilidades;
    }

    public Integer getCapacidad() {
        return capacidad;
    }

    public EspaciosReserva capacidad(Integer capacidad) {
        this.capacidad = capacidad;
        return this;
    }

    public void setCapacidad(Integer capacidad) {
        this.capacidad = capacidad;
    }

    public String getApertura() {
        return apertura;
    }

    public EspaciosReserva apertura(String apertura) {
        this.apertura = apertura;
        return this;
    }

    public void setApertura(String apertura) {
        this.apertura = apertura;
    }

    public String getCierre() {
        return cierre;
    }

    public EspaciosReserva cierre(String cierre) {
        this.cierre = cierre;
        return this;
    }

    public void setCierre(String cierre) {
        this.cierre = cierre;
    }

    public Integer getTarifa1Hora() {
        return tarifa1Hora;
    }

    public EspaciosReserva tarifa1Hora(Integer tarifa1Hora) {
        this.tarifa1Hora = tarifa1Hora;
        return this;
    }

    public void setTarifa1Hora(Integer tarifa1Hora) {
        this.tarifa1Hora = tarifa1Hora;
    }

    public Integer getTarifa2Hora() {
        return tarifa2Hora;
    }

    public EspaciosReserva tarifa2Hora(Integer tarifa2Hora) {
        this.tarifa2Hora = tarifa2Hora;
        return this;
    }

    public void setTarifa2Hora(Integer tarifa2Hora) {
        this.tarifa2Hora = tarifa2Hora;
    }

    public Integer getTarifa3Hora() {
        return tarifa3Hora;
    }

    public EspaciosReserva tarifa3Hora(Integer tarifa3Hora) {
        this.tarifa3Hora = tarifa3Hora;
        return this;
    }

    public void setTarifa3Hora(Integer tarifa3Hora) {
        this.tarifa3Hora = tarifa3Hora;
    }

    public Integer getTarifa4Hora() {
        return tarifa4Hora;
    }

    public EspaciosReserva tarifa4Hora(Integer tarifa4Hora) {
        this.tarifa4Hora = tarifa4Hora;
        return this;
    }

    public void setTarifa4Hora(Integer tarifa4Hora) {
        this.tarifa4Hora = tarifa4Hora;
    }

    public Integer getTarifa5Hora() {
        return tarifa5Hora;
    }

    public EspaciosReserva tarifa5Hora(Integer tarifa5Hora) {
        this.tarifa5Hora = tarifa5Hora;
        return this;
    }

    public void setTarifa5Hora(Integer tarifa5Hora) {
        this.tarifa5Hora = tarifa5Hora;
    }

    public Integer getTarifa6Hora() {
        return tarifa6Hora;
    }

    public EspaciosReserva tarifa6Hora(Integer tarifa6Hora) {
        this.tarifa6Hora = tarifa6Hora;
        return this;
    }

    public void setTarifa6Hora(Integer tarifa6Hora) {
        this.tarifa6Hora = tarifa6Hora;
    }

    public Integer getTarifa7Hora() {
        return tarifa7Hora;
    }

    public EspaciosReserva tarifa7Hora(Integer tarifa7Hora) {
        this.tarifa7Hora = tarifa7Hora;
        return this;
    }

    public void setTarifa7Hora(Integer tarifa7Hora) {
        this.tarifa7Hora = tarifa7Hora;
    }

    public Integer getTarifa8Hora() {
        return tarifa8Hora;
    }

    public EspaciosReserva tarifa8Hora(Integer tarifa8Hora) {
        this.tarifa8Hora = tarifa8Hora;
        return this;
    }

    public void setTarifa8Hora(Integer tarifa8Hora) {
        this.tarifa8Hora = tarifa8Hora;
    }

    public Integer getEstadoReserva() {
        return estadoReserva;
    }

    public EspaciosReserva estadoReserva(Integer estadoReserva) {
        this.estadoReserva = estadoReserva;
        return this;
    }

    public void setEstadoReserva(Integer estadoReserva) {
        this.estadoReserva = estadoReserva;
    }

    public String getWifi() {
        return wifi;
    }

    public EspaciosReserva wifi(String wifi) {
        this.wifi = wifi;
        return this;
    }

    public void setWifi(String wifi) {
        this.wifi = wifi;
    }

    public Sedes getSedes() {
        return sedes;
    }

    public EspaciosReserva sedes(Sedes sedes) {
        this.sedes = sedes;
        return this;
    }

    public void setSedes(Sedes sedes) {
        this.sedes = sedes;
    }

    public Reservas getReservas() {
        return reservas;
    }

    public EspaciosReserva reservas(Reservas reservas) {
        this.reservas = reservas;
        return this;
    }

    public void setReservas(Reservas reservas) {
        this.reservas = reservas;
    }

    public EntradaMiembros getEntradaMiembros() {
        return entradaMiembros;
    }

    public EspaciosReserva entradaMiembros(EntradaMiembros entradaMiembros) {
        this.entradaMiembros = entradaMiembros;
        return this;
    }

    public void setEntradaMiembros(EntradaMiembros entradaMiembros) {
        this.entradaMiembros = entradaMiembros;
    }

    public EntradaInvitados getEntradaInvitados() {
        return entradaInvitados;
    }

    public EspaciosReserva entradaInvitados(EntradaInvitados entradaInvitados) {
        this.entradaInvitados = entradaInvitados;
        return this;
    }

    public void setEntradaInvitados(EntradaInvitados entradaInvitados) {
        this.entradaInvitados = entradaInvitados;
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
        EspaciosReserva espaciosReserva = (EspaciosReserva) o;
        if (espaciosReserva.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), espaciosReserva.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "EspaciosReserva{" +
            "id=" + getId() +
            ", nombre='" + getNombre() + "'" +
            ", descripcion='" + getDescripcion() + "'" +
            ", facilidades='" + getFacilidades() + "'" +
            ", capacidad=" + getCapacidad() +
            ", apertura='" + getApertura() + "'" +
            ", cierre='" + getCierre() + "'" +
            ", tarifa1Hora=" + getTarifa1Hora() +
            ", tarifa2Hora=" + getTarifa2Hora() +
            ", tarifa3Hora=" + getTarifa3Hora() +
            ", tarifa4Hora=" + getTarifa4Hora() +
            ", tarifa5Hora=" + getTarifa5Hora() +
            ", tarifa6Hora=" + getTarifa6Hora() +
            ", tarifa7Hora=" + getTarifa7Hora() +
            ", tarifa8Hora=" + getTarifa8Hora() +
            ", estadoReserva=" + getEstadoReserva() +
            ", wifi='" + getWifi() + "'" +
            "}";
    }
}
