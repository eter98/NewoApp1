import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as moment from 'moment';
import { JhiAlertService } from 'ng-jhipster';
import { IMiembros } from 'app/shared/model/miembros.model';
import { MiembrosService } from './miembros.service';
import { IEspacioLibre } from 'app/shared/model/espacio-libre.model';
import { EspacioLibreService } from 'app/entities/espacio-libre';
import { IHostSede } from 'app/shared/model/host-sede.model';
import { HostSedeService } from 'app/entities/host-sede';
import { IBeneficio } from 'app/shared/model/beneficio.model';
import { BeneficioService } from 'app/entities/beneficio';
import { IPerfilMiembro } from 'app/shared/model/perfil-miembro.model';
import { PerfilMiembroService } from 'app/entities/perfil-miembro';
import { IRegistroCompra } from 'app/shared/model/registro-compra.model';
import { RegistroCompraService } from 'app/entities/registro-compra';
import { IEntradaMiembros } from 'app/shared/model/entrada-miembros.model';
import { EntradaMiembrosService } from 'app/entities/entrada-miembros';
import { IMiembrosEquipoEmpresas } from 'app/shared/model/miembros-equipo-empresas.model';
import { MiembrosEquipoEmpresasService } from 'app/entities/miembros-equipo-empresas';

@Component({
    selector: 'jhi-miembros-update',
    templateUrl: './miembros-update.component.html'
})
export class MiembrosUpdateComponent implements OnInit {
    miembros: IMiembros;
    isSaving: boolean;

    espaciolibres: IEspacioLibre[];

    hostsedes: IHostSede[];

    beneficios: IBeneficio[];

    perfilmiembros: IPerfilMiembro[];

    registrocompras: IRegistroCompra[];

    entradamiembros: IEntradaMiembros[];

    miembrosequipoempresas: IMiembrosEquipoEmpresas[];
    fechaNacimientoDp: any;
    fechaRegistroDp: any;

    constructor(
        protected jhiAlertService: JhiAlertService,
        protected miembrosService: MiembrosService,
        protected espacioLibreService: EspacioLibreService,
        protected hostSedeService: HostSedeService,
        protected beneficioService: BeneficioService,
        protected perfilMiembroService: PerfilMiembroService,
        protected registroCompraService: RegistroCompraService,
        protected entradaMiembrosService: EntradaMiembrosService,
        protected miembrosEquipoEmpresasService: MiembrosEquipoEmpresasService,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ miembros }) => {
            this.miembros = miembros;
        });
        this.espacioLibreService
            .query({ filter: 'miembros-is-null' })
            .pipe(
                filter((mayBeOk: HttpResponse<IEspacioLibre[]>) => mayBeOk.ok),
                map((response: HttpResponse<IEspacioLibre[]>) => response.body)
            )
            .subscribe(
                (res: IEspacioLibre[]) => {
                    if (!this.miembros.espacioLibre || !this.miembros.espacioLibre.id) {
                        this.espaciolibres = res;
                    } else {
                        this.espacioLibreService
                            .find(this.miembros.espacioLibre.id)
                            .pipe(
                                filter((subResMayBeOk: HttpResponse<IEspacioLibre>) => subResMayBeOk.ok),
                                map((subResponse: HttpResponse<IEspacioLibre>) => subResponse.body)
                            )
                            .subscribe(
                                (subRes: IEspacioLibre) => (this.espaciolibres = [subRes].concat(res)),
                                (subRes: HttpErrorResponse) => this.onError(subRes.message)
                            );
                    }
                },
                (res: HttpErrorResponse) => this.onError(res.message)
            );
        this.hostSedeService
            .query({ filter: 'miembros-is-null' })
            .pipe(
                filter((mayBeOk: HttpResponse<IHostSede[]>) => mayBeOk.ok),
                map((response: HttpResponse<IHostSede[]>) => response.body)
            )
            .subscribe(
                (res: IHostSede[]) => {
                    if (!this.miembros.hostSede || !this.miembros.hostSede.id) {
                        this.hostsedes = res;
                    } else {
                        this.hostSedeService
                            .find(this.miembros.hostSede.id)
                            .pipe(
                                filter((subResMayBeOk: HttpResponse<IHostSede>) => subResMayBeOk.ok),
                                map((subResponse: HttpResponse<IHostSede>) => subResponse.body)
                            )
                            .subscribe(
                                (subRes: IHostSede) => (this.hostsedes = [subRes].concat(res)),
                                (subRes: HttpErrorResponse) => this.onError(subRes.message)
                            );
                    }
                },
                (res: HttpErrorResponse) => this.onError(res.message)
            );
        this.beneficioService
            .query({ filter: 'miembros-is-null' })
            .pipe(
                filter((mayBeOk: HttpResponse<IBeneficio[]>) => mayBeOk.ok),
                map((response: HttpResponse<IBeneficio[]>) => response.body)
            )
            .subscribe(
                (res: IBeneficio[]) => {
                    if (!this.miembros.beneficio || !this.miembros.beneficio.id) {
                        this.beneficios = res;
                    } else {
                        this.beneficioService
                            .find(this.miembros.beneficio.id)
                            .pipe(
                                filter((subResMayBeOk: HttpResponse<IBeneficio>) => subResMayBeOk.ok),
                                map((subResponse: HttpResponse<IBeneficio>) => subResponse.body)
                            )
                            .subscribe(
                                (subRes: IBeneficio) => (this.beneficios = [subRes].concat(res)),
                                (subRes: HttpErrorResponse) => this.onError(subRes.message)
                            );
                    }
                },
                (res: HttpErrorResponse) => this.onError(res.message)
            );
        this.perfilMiembroService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<IPerfilMiembro[]>) => mayBeOk.ok),
                map((response: HttpResponse<IPerfilMiembro[]>) => response.body)
            )
            .subscribe((res: IPerfilMiembro[]) => (this.perfilmiembros = res), (res: HttpErrorResponse) => this.onError(res.message));
        this.registroCompraService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<IRegistroCompra[]>) => mayBeOk.ok),
                map((response: HttpResponse<IRegistroCompra[]>) => response.body)
            )
            .subscribe((res: IRegistroCompra[]) => (this.registrocompras = res), (res: HttpErrorResponse) => this.onError(res.message));
        this.entradaMiembrosService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<IEntradaMiembros[]>) => mayBeOk.ok),
                map((response: HttpResponse<IEntradaMiembros[]>) => response.body)
            )
            .subscribe((res: IEntradaMiembros[]) => (this.entradamiembros = res), (res: HttpErrorResponse) => this.onError(res.message));
        this.miembrosEquipoEmpresasService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<IMiembrosEquipoEmpresas[]>) => mayBeOk.ok),
                map((response: HttpResponse<IMiembrosEquipoEmpresas[]>) => response.body)
            )
            .subscribe(
                (res: IMiembrosEquipoEmpresas[]) => (this.miembrosequipoempresas = res),
                (res: HttpErrorResponse) => this.onError(res.message)
            );
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.miembros.id !== undefined) {
            this.subscribeToSaveResponse(this.miembrosService.update(this.miembros));
        } else {
            this.subscribeToSaveResponse(this.miembrosService.create(this.miembros));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IMiembros>>) {
        result.subscribe((res: HttpResponse<IMiembros>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }

    trackEspacioLibreById(index: number, item: IEspacioLibre) {
        return item.id;
    }

    trackHostSedeById(index: number, item: IHostSede) {
        return item.id;
    }

    trackBeneficioById(index: number, item: IBeneficio) {
        return item.id;
    }

    trackPerfilMiembroById(index: number, item: IPerfilMiembro) {
        return item.id;
    }

    trackRegistroCompraById(index: number, item: IRegistroCompra) {
        return item.id;
    }

    trackEntradaMiembrosById(index: number, item: IEntradaMiembros) {
        return item.id;
    }

    trackMiembrosEquipoEmpresasById(index: number, item: IMiembrosEquipoEmpresas) {
        return item.id;
    }
}
