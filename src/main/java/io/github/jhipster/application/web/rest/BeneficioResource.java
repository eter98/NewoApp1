package io.github.jhipster.application.web.rest;
import io.github.jhipster.application.domain.Beneficio;
import io.github.jhipster.application.repository.BeneficioRepository;
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
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

/**
 * REST controller for managing Beneficio.
 */
@RestController
@RequestMapping("/api")
public class BeneficioResource {

    private final Logger log = LoggerFactory.getLogger(BeneficioResource.class);

    private static final String ENTITY_NAME = "beneficio";

    private final BeneficioRepository beneficioRepository;

    public BeneficioResource(BeneficioRepository beneficioRepository) {
        this.beneficioRepository = beneficioRepository;
    }

    /**
     * POST  /beneficios : Create a new beneficio.
     *
     * @param beneficio the beneficio to create
     * @return the ResponseEntity with status 201 (Created) and with body the new beneficio, or with status 400 (Bad Request) if the beneficio has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/beneficios")
    public ResponseEntity<Beneficio> createBeneficio(@RequestBody Beneficio beneficio) throws URISyntaxException {
        log.debug("REST request to save Beneficio : {}", beneficio);
        if (beneficio.getId() != null) {
            throw new BadRequestAlertException("A new beneficio cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Beneficio result = beneficioRepository.save(beneficio);
        return ResponseEntity.created(new URI("/api/beneficios/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /beneficios : Updates an existing beneficio.
     *
     * @param beneficio the beneficio to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated beneficio,
     * or with status 400 (Bad Request) if the beneficio is not valid,
     * or with status 500 (Internal Server Error) if the beneficio couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/beneficios")
    public ResponseEntity<Beneficio> updateBeneficio(@RequestBody Beneficio beneficio) throws URISyntaxException {
        log.debug("REST request to update Beneficio : {}", beneficio);
        if (beneficio.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Beneficio result = beneficioRepository.save(beneficio);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, beneficio.getId().toString()))
            .body(result);
    }

    /**
     * GET  /beneficios : get all the beneficios.
     *
     * @param filter the filter of the request
     * @return the ResponseEntity with status 200 (OK) and the list of beneficios in body
     */
    @GetMapping("/beneficios")
    public List<Beneficio> getAllBeneficios(@RequestParam(required = false) String filter) {
        if ("miembros-is-null".equals(filter)) {
            log.debug("REST request to get all Beneficios where miembros is null");
            return StreamSupport
                .stream(beneficioRepository.findAll().spliterator(), false)
                .filter(beneficio -> beneficio.getMiembros() == null)
                .collect(Collectors.toList());
        }
        log.debug("REST request to get all Beneficios");
        return beneficioRepository.findAll();
    }

    /**
     * GET  /beneficios/:id : get the "id" beneficio.
     *
     * @param id the id of the beneficio to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the beneficio, or with status 404 (Not Found)
     */
    @GetMapping("/beneficios/{id}")
    public ResponseEntity<Beneficio> getBeneficio(@PathVariable Long id) {
        log.debug("REST request to get Beneficio : {}", id);
        Optional<Beneficio> beneficio = beneficioRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(beneficio);
    }

    /**
     * DELETE  /beneficios/:id : delete the "id" beneficio.
     *
     * @param id the id of the beneficio to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/beneficios/{id}")
    public ResponseEntity<Void> deleteBeneficio(@PathVariable Long id) {
        log.debug("REST request to delete Beneficio : {}", id);
        beneficioRepository.deleteById(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}
