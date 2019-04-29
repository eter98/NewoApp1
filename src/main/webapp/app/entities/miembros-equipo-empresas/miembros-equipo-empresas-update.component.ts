import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiAlertService } from 'ng-jhipster';
import { IMiembrosEquipoEmpresas } from 'app/shared/model/miembros-equipo-empresas.model';
import { MiembrosEquipoEmpresasService } from './miembros-equipo-empresas.service';
import { IEquipoEmpresas } from 'app/shared/model/equipo-empresas.model';
import { EquipoEmpresasService } from 'app/entities/equipo-empresas';
import { IMiembros } from 'app/shared/model/miembros.model';
import { MiembrosService } from 'app/entities/miembros';

@Component({
    selector: 'jhi-miembros-equipo-empresas-update',
    templateUrl: './miembros-equipo-empresas-update.component.html'
})
export class MiembrosEquipoEmpresasUpdateComponent implements OnInit {
    miembrosEquipoEmpresas: IMiembrosEquipoEmpresas;
    isSaving: boolean;

    equipoempresas: IEquipoEmpresas[];

    miembros: IMiembros[];

    constructor(
        protected jhiAlertService: JhiAlertService,
        protected miembrosEquipoEmpresasService: MiembrosEquipoEmpresasService,
        protected equipoEmpresasService: EquipoEmpresasService,
        protected miembrosService: MiembrosService,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ miembrosEquipoEmpresas }) => {
            this.miembrosEquipoEmpresas = miembrosEquipoEmpresas;
        });
        this.equipoEmpresasService
            .query({ filter: 'miembrosequipoempresas-is-null' })
            .pipe(
                filter((mayBeOk: HttpResponse<IEquipoEmpresas[]>) => mayBeOk.ok),
                map((response: HttpResponse<IEquipoEmpresas[]>) => response.body)
            )
            .subscribe(
                (res: IEquipoEmpresas[]) => {
                    if (!this.miembrosEquipoEmpresas.equipoEmpresas || !this.miembrosEquipoEmpresas.equipoEmpresas.id) {
                        this.equipoempresas = res;
                    } else {
                        this.equipoEmpresasService
                            .find(this.miembrosEquipoEmpresas.equipoEmpresas.id)
                            .pipe(
                                filter((subResMayBeOk: HttpResponse<IEquipoEmpresas>) => subResMayBeOk.ok),
                                map((subResponse: HttpResponse<IEquipoEmpresas>) => subResponse.body)
                            )
                            .subscribe(
                                (subRes: IEquipoEmpresas) => (this.equipoempresas = [subRes].concat(res)),
                                (subRes: HttpErrorResponse) => this.onError(subRes.message)
                            );
                    }
                },
                (res: HttpErrorResponse) => this.onError(res.message)
            );
        this.miembrosService
            .query({ filter: 'miembrosequipoempresas-is-null' })
            .pipe(
                filter((mayBeOk: HttpResponse<IMiembros[]>) => mayBeOk.ok),
                map((response: HttpResponse<IMiembros[]>) => response.body)
            )
            .subscribe(
                (res: IMiembros[]) => {
                    if (!this.miembrosEquipoEmpresas.miembros || !this.miembrosEquipoEmpresas.miembros.id) {
                        this.miembros = res;
                    } else {
                        this.miembrosService
                            .find(this.miembrosEquipoEmpresas.miembros.id)
                            .pipe(
                                filter((subResMayBeOk: HttpResponse<IMiembros>) => subResMayBeOk.ok),
                                map((subResponse: HttpResponse<IMiembros>) => subResponse.body)
                            )
                            .subscribe(
                                (subRes: IMiembros) => (this.miembros = [subRes].concat(res)),
                                (subRes: HttpErrorResponse) => this.onError(subRes.message)
                            );
                    }
                },
                (res: HttpErrorResponse) => this.onError(res.message)
            );
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.miembrosEquipoEmpresas.id !== undefined) {
            this.subscribeToSaveResponse(this.miembrosEquipoEmpresasService.update(this.miembrosEquipoEmpresas));
        } else {
            this.subscribeToSaveResponse(this.miembrosEquipoEmpresasService.create(this.miembrosEquipoEmpresas));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IMiembrosEquipoEmpresas>>) {
        result.subscribe(
            (res: HttpResponse<IMiembrosEquipoEmpresas>) => this.onSaveSuccess(),
            (res: HttpErrorResponse) => this.onSaveError()
        );
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

    trackEquipoEmpresasById(index: number, item: IEquipoEmpresas) {
        return item.id;
    }

    trackMiembrosById(index: number, item: IMiembros) {
        return item.id;
    }
}
