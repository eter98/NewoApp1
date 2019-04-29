import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as moment from 'moment';
import { JhiAlertService } from 'ng-jhipster';
import { IEntradaMiembros } from 'app/shared/model/entrada-miembros.model';
import { EntradaMiembrosService } from './entrada-miembros.service';
import { ISedes } from 'app/shared/model/sedes.model';
import { SedesService } from 'app/entities/sedes';
import { IMiembros } from 'app/shared/model/miembros.model';
import { MiembrosService } from 'app/entities/miembros';
import { IEspacioLibre } from 'app/shared/model/espacio-libre.model';
import { EspacioLibreService } from 'app/entities/espacio-libre';
import { IEspaciosReserva } from 'app/shared/model/espacios-reserva.model';
import { EspaciosReservaService } from 'app/entities/espacios-reserva';

@Component({
    selector: 'jhi-entrada-miembros-update',
    templateUrl: './entrada-miembros-update.component.html'
})
export class EntradaMiembrosUpdateComponent implements OnInit {
    entradaMiembros: IEntradaMiembros;
    isSaving: boolean;

    sedes: ISedes[];

    miembros: IMiembros[];

    espaciolibres: IEspacioLibre[];

    espaciosreservas: IEspaciosReserva[];
    fechaEntradaDp: any;

    constructor(
        protected jhiAlertService: JhiAlertService,
        protected entradaMiembrosService: EntradaMiembrosService,
        protected sedesService: SedesService,
        protected miembrosService: MiembrosService,
        protected espacioLibreService: EspacioLibreService,
        protected espaciosReservaService: EspaciosReservaService,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ entradaMiembros }) => {
            this.entradaMiembros = entradaMiembros;
        });
        this.sedesService
            .query({ filter: 'entradamiembros-is-null' })
            .pipe(
                filter((mayBeOk: HttpResponse<ISedes[]>) => mayBeOk.ok),
                map((response: HttpResponse<ISedes[]>) => response.body)
            )
            .subscribe(
                (res: ISedes[]) => {
                    if (!this.entradaMiembros.sedes || !this.entradaMiembros.sedes.id) {
                        this.sedes = res;
                    } else {
                        this.sedesService
                            .find(this.entradaMiembros.sedes.id)
                            .pipe(
                                filter((subResMayBeOk: HttpResponse<ISedes>) => subResMayBeOk.ok),
                                map((subResponse: HttpResponse<ISedes>) => subResponse.body)
                            )
                            .subscribe(
                                (subRes: ISedes) => (this.sedes = [subRes].concat(res)),
                                (subRes: HttpErrorResponse) => this.onError(subRes.message)
                            );
                    }
                },
                (res: HttpErrorResponse) => this.onError(res.message)
            );
        this.miembrosService
            .query({ filter: 'entradamiembros-is-null' })
            .pipe(
                filter((mayBeOk: HttpResponse<IMiembros[]>) => mayBeOk.ok),
                map((response: HttpResponse<IMiembros[]>) => response.body)
            )
            .subscribe(
                (res: IMiembros[]) => {
                    if (!this.entradaMiembros.miembros || !this.entradaMiembros.miembros.id) {
                        this.miembros = res;
                    } else {
                        this.miembrosService
                            .find(this.entradaMiembros.miembros.id)
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
        this.espacioLibreService
            .query({ filter: 'entradamiembros-is-null' })
            .pipe(
                filter((mayBeOk: HttpResponse<IEspacioLibre[]>) => mayBeOk.ok),
                map((response: HttpResponse<IEspacioLibre[]>) => response.body)
            )
            .subscribe(
                (res: IEspacioLibre[]) => {
                    if (!this.entradaMiembros.espacioLibre || !this.entradaMiembros.espacioLibre.id) {
                        this.espaciolibres = res;
                    } else {
                        this.espacioLibreService
                            .find(this.entradaMiembros.espacioLibre.id)
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
        this.espaciosReservaService
            .query({ filter: 'entradamiembros-is-null' })
            .pipe(
                filter((mayBeOk: HttpResponse<IEspaciosReserva[]>) => mayBeOk.ok),
                map((response: HttpResponse<IEspaciosReserva[]>) => response.body)
            )
            .subscribe(
                (res: IEspaciosReserva[]) => {
                    if (!this.entradaMiembros.espaciosReserva || !this.entradaMiembros.espaciosReserva.id) {
                        this.espaciosreservas = res;
                    } else {
                        this.espaciosReservaService
                            .find(this.entradaMiembros.espaciosReserva.id)
                            .pipe(
                                filter((subResMayBeOk: HttpResponse<IEspaciosReserva>) => subResMayBeOk.ok),
                                map((subResponse: HttpResponse<IEspaciosReserva>) => subResponse.body)
                            )
                            .subscribe(
                                (subRes: IEspaciosReserva) => (this.espaciosreservas = [subRes].concat(res)),
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
        if (this.entradaMiembros.id !== undefined) {
            this.subscribeToSaveResponse(this.entradaMiembrosService.update(this.entradaMiembros));
        } else {
            this.subscribeToSaveResponse(this.entradaMiembrosService.create(this.entradaMiembros));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IEntradaMiembros>>) {
        result.subscribe((res: HttpResponse<IEntradaMiembros>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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

    trackSedesById(index: number, item: ISedes) {
        return item.id;
    }

    trackMiembrosById(index: number, item: IMiembros) {
        return item.id;
    }

    trackEspacioLibreById(index: number, item: IEspacioLibre) {
        return item.id;
    }

    trackEspaciosReservaById(index: number, item: IEspaciosReserva) {
        return item.id;
    }
}
