package io.github.jhipster.application.web.rest;
import io.github.jhipster.application.domain.Empresa;
import io.github.jhipster.application.repository.EmpresaRepository;
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
 * REST controller for managing Empresa.
 */
@RestController
@RequestMapping("/api")
public class EmpresaResource {

    private final Logger log = LoggerFactory.getLogger(EmpresaResource.class);

    private static final String ENTITY_NAME = "empresa";

    private final EmpresaRepository empresaRepository;

    public EmpresaResource(EmpresaRepository empresaRepository) {
        this.empresaRepository = empresaRepository;
    }

    /**
     * POST  /empresas : Create a new empresa.
     *
     * @param empresa the empresa to create
     * @return the ResponseEntity with status 201 (Created) and with body the new empresa, or with status 400 (Bad Request) if the empresa has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/empresas")
    public ResponseEntity<Empresa> createEmpresa(@RequestBody Empresa empresa) throws URISyntaxException {
        log.debug("REST request to save Empresa : {}", empresa);
        if (empresa.getId() != null) {
            throw new BadRequestAlertException("A new empresa cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Empresa result = empresaRepository.save(empresa);
        return ResponseEntity.created(new URI("/api/empresas/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /empresas : Updates an existing empresa.
     *
     * @param empresa the empresa to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated empresa,
     * or with status 400 (Bad Request) if the empresa is not valid,
     * or with status 500 (Internal Server Error) if the empresa couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/empresas")
    public ResponseEntity<Empresa> updateEmpresa(@RequestBody Empresa empresa) throws URISyntaxException {
        log.debug("REST request to update Empresa : {}", empresa);
        if (empresa.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Empresa result = empresaRepository.save(empresa);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, empresa.getId().toString()))
            .body(result);
    }

    /**
     * GET  /empresas : get all the empresas.
     *
     * @param filter the filter of the request
     * @return the ResponseEntity with status 200 (OK) and the list of empresas in body
     */
    @GetMapping("/empresas")
    public List<Empresa> getAllEmpresas(@RequestParam(required = false) String filter) {
        if ("facturacion-is-null".equals(filter)) {
            log.debug("REST request to get all Empresas where facturacion is null");
            return StreamSupport
                .stream(empresaRepository.findAll().spliterator(), false)
                .filter(empresa -> empresa.getFacturacion() == null)
                .collect(Collectors.toList());
        }
        if ("perfilequipoempresa-is-null".equals(filter)) {
            log.debug("REST request to get all Empresas where perfilEquipoEmpresa is null");
            return StreamSupport
                .stream(empresaRepository.findAll().spliterator(), false)
                .filter(empresa -> empresa.getPerfilEquipoEmpresa() == null)
                .collect(Collectors.toList());
        }
        log.debug("REST request to get all Empresas");
        return empresaRepository.findAll();
    }

    /**
     * GET  /empresas/:id : get the "id" empresa.
     *
     * @param id the id of the empresa to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the empresa, or with status 404 (Not Found)
     */
    @GetMapping("/empresas/{id}")
    public ResponseEntity<Empresa> getEmpresa(@PathVariable Long id) {
        log.debug("REST request to get Empresa : {}", id);
        Optional<Empresa> empresa = empresaRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(empresa);
    }

    /**
     * DELETE  /empresas/:id : delete the "id" empresa.
     *
     * @param id the id of the empresa to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/empresas/{id}")
    public ResponseEntity<Void> deleteEmpresa(@PathVariable Long id) {
        log.debug("REST request to delete Empresa : {}", id);
        empresaRepository.deleteById(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}
