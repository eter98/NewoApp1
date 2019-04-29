package io.github.jhipster.application.web.rest;
import io.github.jhipster.application.domain.Reservas;
import io.github.jhipster.application.repository.ReservasRepository;
import io.github.jhipster.application.web.rest.errors.BadRequestAlertException;
import io.github.jhipster.application.web.rest.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing Reservas.
 */
@RestController
@RequestMapping("/api")
public class ReservasResource {

    private final Logger log = LoggerFactory.getLogger(ReservasResource.class);

    private static final String ENTITY_NAME = "reservas";

    private final ReservasRepository reservasRepository;

    public ReservasResource(ReservasRepository reservasRepository) {
        this.reservasRepository = reservasRepository;
    }

    /**
     * POST  /reservas : Create a new reservas.
     *
     * @param reservas the reservas to create
     * @return the ResponseEntity with status 201 (Created) and with body the new reservas, or with status 400 (Bad Request) if the reservas has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/reservas")
    public ResponseEntity<Reservas> createReservas(@RequestBody Reservas reservas) throws URISyntaxException {
        log.debug("REST request to save Reservas : {}", reservas);
        if (reservas.getId() != null) {
            throw new BadRequestAlertException("A new reservas cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Reservas result = reservasRepository.save(reservas);
        return ResponseEntity.created(new URI("/api/reservas/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /reservas : Updates an existing reservas.
     *
     * @param reservas the reservas to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated reservas,
     * or with status 400 (Bad Request) if the reservas is not valid,
     * or with status 500 (Internal Server Error) if the reservas couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/reservas")
    public ResponseEntity<Reservas> updateReservas(@RequestBody Reservas reservas) throws URISyntaxException {
        log.debug("REST request to update Reservas : {}", reservas);
        if (reservas.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Reservas result = reservasRepository.save(reservas);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, reservas.getId().toString()))
            .body(result);
    }

    /**
     * GET  /reservas : get all the reservas.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of reservas in body
     */
    @GetMapping("/reservas")
    public List<Reservas> getAllReservas() {
        log.debug("REST request to get all Reservas");
        return reservasRepository.findAll();
    }

    /**
     * GET  /reservas/:id : get the "id" reservas.
     *
     * @param id the id of the reservas to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the reservas, or with status 404 (Not Found)
     */
    @GetMapping("/reservas/{id}")
    public ResponseEntity<Reservas> getReservas(@PathVariable Long id) {
        log.debug("REST request to get Reservas : {}", id);
        Optional<Reservas> reservas = reservasRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(reservas);
    }

    /**
     * DELETE  /reservas/:id : delete the "id" reservas.
     *
     * @param id the id of the reservas to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/reservas/{id}")
    public ResponseEntity<Void> deleteReservas(@PathVariable Long id) {
        log.debug("REST request to delete Reservas : {}", id);
        reservasRepository.deleteById(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}
