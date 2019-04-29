import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiAlertService, JhiDataUtils } from 'ng-jhipster';
import { IEquipoEmpresas } from 'app/shared/model/equipo-empresas.model';
import { EquipoEmpresasService } from './equipo-empresas.service';
import { IFacturacion } from 'app/shared/model/facturacion.model';
import { FacturacionService } from 'app/entities/facturacion';
import { IPerfilEquipoEmpresa } from 'app/shared/model/perfil-equipo-empresa.model';
import { PerfilEquipoEmpresaService } from 'app/entities/perfil-equipo-empresa';
import { IMiembrosEquipoEmpresas } from 'app/shared/model/miembros-equipo-empresas.model';
import { MiembrosEquipoEmpresasService } from 'app/entities/miembros-equipo-empresas';

@Component({
    selector: 'jhi-equipo-empresas-update',
    templateUrl: './equipo-empresas-update.component.html'
})
export class EquipoEmpresasUpdateComponent implements OnInit {
    equipoEmpresas: IEquipoEmpresas;
    isSaving: boolean;

    facturacions: IFacturacion[];

    perfilequipoempresas: IPerfilEquipoEmpresa[];

    miembrosequipoempresas: IMiembrosEquipoEmpresas[];

    constructor(
        protected dataUtils: JhiDataUtils,
        protected jhiAlertService: JhiAlertService,
        protected equipoEmpresasService: EquipoEmpresasService,
        protected facturacionService: FacturacionService,
        protected perfilEquipoEmpresaService: PerfilEquipoEmpresaService,
        protected miembrosEquipoEmpresasService: MiembrosEquipoEmpresasService,
        protected elementRef: ElementRef,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ equipoEmpresas }) => {
            this.equipoEmpresas = equipoEmpresas;
        });
        this.facturacionService
            .query({ filter: 'equipoempresas-is-null' })
            .pipe(
                filter((mayBeOk: HttpResponse<IFacturacion[]>) => mayBeOk.ok),
                map((response: HttpResponse<IFacturacion[]>) => response.body)
            )
            .subscribe(
                (res: IFacturacion[]) => {
                    if (!this.equipoEmpresas.facturacion || !this.equipoEmpresas.facturacion.id) {
                        this.facturacions = res;
                    } else {
                        this.facturacionService
                            .find(this.equipoEmpresas.facturacion.id)
                            .pipe(
                                filter((subResMayBeOk: HttpResponse<IFacturacion>) => subResMayBeOk.ok),
                                map((subResponse: HttpResponse<IFacturacion>) => subResponse.body)
                            )
                            .subscribe(
                                (subRes: IFacturacion) => (this.facturacions = [subRes].concat(res)),
                                (subRes: HttpErrorResponse) => this.onError(subRes.message)
                            );
                    }
                },
                (res: HttpErrorResponse) => this.onError(res.message)
            );
        this.perfilEquipoEmpresaService
            .query({ filter: 'equipoempresas-is-null' })
            .pipe(
                filter((mayBeOk: HttpResponse<IPerfilEquipoEmpresa[]>) => mayBeOk.ok),
                map((response: HttpResponse<IPerfilEquipoEmpresa[]>) => response.body)
            )
            .subscribe(
                (res: IPerfilEquipoEmpresa[]) => {
                    if (!this.equipoEmpresas.perfilEquipoEmpresa || !this.equipoEmpresas.perfilEquipoEmpresa.id) {
                        this.perfilequipoempresas = res;
                    } else {
                        this.perfilEquipoEmpresaService
                            .find(this.equipoEmpresas.perfilEquipoEmpresa.id)
                            .pipe(
                                filter((subResMayBeOk: HttpResponse<IPerfilEquipoEmpresa>) => subResMayBeOk.ok),
                                map((subResponse: HttpResponse<IPerfilEquipoEmpresa>) => subResponse.body)
                            )
                            .subscribe(
                                (subRes: IPerfilEquipoEmpresa) => (this.perfilequipoempresas = [subRes].concat(res)),
                                (subRes: HttpErrorResponse) => this.onError(subRes.message)
                            );
                    }
                },
                (res: HttpErrorResponse) => this.onError(res.message)
            );
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

    byteSize(field) {
        return this.dataUtils.byteSize(field);
    }

    openFile(contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    }

    setFileData(event, entity, field, isImage) {
        this.dataUtils.setFileData(event, entity, field, isImage);
    }

    clearInputImage(field: string, fieldContentType: string, idInput: string) {
        this.dataUtils.clearInputImage(this.equipoEmpresas, this.elementRef, field, fieldContentType, idInput);
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.equipoEmpresas.id !== undefined) {
            this.subscribeToSaveResponse(this.equipoEmpresasService.update(this.equipoEmpresas));
        } else {
            this.subscribeToSaveResponse(this.equipoEmpresasService.create(this.equipoEmpresas));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IEquipoEmpresas>>) {
        result.subscribe((res: HttpResponse<IEquipoEmpresas>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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

    trackFacturacionById(index: number, item: IFacturacion) {
        return item.id;
    }

    trackPerfilEquipoEmpresaById(index: number, item: IPerfilEquipoEmpresa) {
        return item.id;
    }

    trackMiembrosEquipoEmpresasById(index: number, item: IMiembrosEquipoEmpresas) {
        return item.id;
    }
}
