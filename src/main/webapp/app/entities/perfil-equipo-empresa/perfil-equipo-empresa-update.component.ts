import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiAlertService, JhiDataUtils } from 'ng-jhipster';
import { IPerfilEquipoEmpresa } from 'app/shared/model/perfil-equipo-empresa.model';
import { PerfilEquipoEmpresaService } from './perfil-equipo-empresa.service';
import { IEmpresa } from 'app/shared/model/empresa.model';
import { EmpresaService } from 'app/entities/empresa';
import { IEquipoEmpresas } from 'app/shared/model/equipo-empresas.model';
import { EquipoEmpresasService } from 'app/entities/equipo-empresas';
import { IProductosServicios } from 'app/shared/model/productos-servicios.model';
import { ProductosServiciosService } from 'app/entities/productos-servicios';

@Component({
    selector: 'jhi-perfil-equipo-empresa-update',
    templateUrl: './perfil-equipo-empresa-update.component.html'
})
export class PerfilEquipoEmpresaUpdateComponent implements OnInit {
    perfilEquipoEmpresa: IPerfilEquipoEmpresa;
    isSaving: boolean;

    empresas: IEmpresa[];

    equipoempresas: IEquipoEmpresas[];

    productosservicios: IProductosServicios[];

    constructor(
        protected dataUtils: JhiDataUtils,
        protected jhiAlertService: JhiAlertService,
        protected perfilEquipoEmpresaService: PerfilEquipoEmpresaService,
        protected empresaService: EmpresaService,
        protected equipoEmpresasService: EquipoEmpresasService,
        protected productosServiciosService: ProductosServiciosService,
        protected elementRef: ElementRef,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ perfilEquipoEmpresa }) => {
            this.perfilEquipoEmpresa = perfilEquipoEmpresa;
        });
        this.empresaService
            .query({ filter: 'perfilequipoempresa-is-null' })
            .pipe(
                filter((mayBeOk: HttpResponse<IEmpresa[]>) => mayBeOk.ok),
                map((response: HttpResponse<IEmpresa[]>) => response.body)
            )
            .subscribe(
                (res: IEmpresa[]) => {
                    if (!this.perfilEquipoEmpresa.empresa || !this.perfilEquipoEmpresa.empresa.id) {
                        this.empresas = res;
                    } else {
                        this.empresaService
                            .find(this.perfilEquipoEmpresa.empresa.id)
                            .pipe(
                                filter((subResMayBeOk: HttpResponse<IEmpresa>) => subResMayBeOk.ok),
                                map((subResponse: HttpResponse<IEmpresa>) => subResponse.body)
                            )
                            .subscribe(
                                (subRes: IEmpresa) => (this.empresas = [subRes].concat(res)),
                                (subRes: HttpErrorResponse) => this.onError(subRes.message)
                            );
                    }
                },
                (res: HttpErrorResponse) => this.onError(res.message)
            );
        this.equipoEmpresasService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<IEquipoEmpresas[]>) => mayBeOk.ok),
                map((response: HttpResponse<IEquipoEmpresas[]>) => response.body)
            )
            .subscribe((res: IEquipoEmpresas[]) => (this.equipoempresas = res), (res: HttpErrorResponse) => this.onError(res.message));
        this.productosServiciosService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<IProductosServicios[]>) => mayBeOk.ok),
                map((response: HttpResponse<IProductosServicios[]>) => response.body)
            )
            .subscribe(
                (res: IProductosServicios[]) => (this.productosservicios = res),
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
        this.dataUtils.clearInputImage(this.perfilEquipoEmpresa, this.elementRef, field, fieldContentType, idInput);
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.perfilEquipoEmpresa.id !== undefined) {
            this.subscribeToSaveResponse(this.perfilEquipoEmpresaService.update(this.perfilEquipoEmpresa));
        } else {
            this.subscribeToSaveResponse(this.perfilEquipoEmpresaService.create(this.perfilEquipoEmpresa));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IPerfilEquipoEmpresa>>) {
        result.subscribe((res: HttpResponse<IPerfilEquipoEmpresa>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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

    trackEmpresaById(index: number, item: IEmpresa) {
        return item.id;
    }

    trackEquipoEmpresasById(index: number, item: IEquipoEmpresas) {
        return item.id;
    }

    trackProductosServiciosById(index: number, item: IProductosServicios) {
        return item.id;
    }
}
