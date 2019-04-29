import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiAlertService } from 'ng-jhipster';
import { IEspaciosReserva } from 'app/shared/model/espacios-reserva.model';
import { EspaciosReservaService } from './espacios-reserva.service';
import { ISedes } from 'app/shared/model/sedes.model';
import { SedesService } from 'app/entities/sedes';
import { IReservas } from 'app/shared/model/reservas.model';
import { ReservasService } from 'app/entities/reservas';
import { IEntradaMiembros } from 'app/shared/model/entrada-miembros.model';
import { EntradaMiembrosService } from 'app/entities/entrada-miembros';
import { IEntradaInvitados } from 'app/shared/model/entrada-invitados.model';
import { EntradaInvitadosService } from 'app/entities/entrada-invitados';

@Component({
    selector: 'jhi-espacios-reserva-update',
    templateUrl: './espacios-reserva-update.component.html'
})
export class EspaciosReservaUpdateComponent implements OnInit {
    espaciosReserva: IEspaciosReserva;
    isSaving: boolean;

    sedes: ISedes[];

    reservas: IReservas[];

    entradamiembros: IEntradaMiembros[];

    entradainvitados: IEntradaInvitados[];

    constructor(
        protected jhiAlertService: JhiAlertService,
        protected espaciosReservaService: EspaciosReservaService,
        protected sedesService: SedesService,
        protected reservasService: ReservasService,
        protected entradaMiembrosService: EntradaMiembrosService,
        protected entradaInvitadosService: EntradaInvitadosService,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ espaciosReserva }) => {
            this.espaciosReserva = espaciosReserva;
        });
        this.sedesService
            .query({ filter: 'espaciosreserva-is-null' })
            .pipe(
                filter((mayBeOk: HttpResponse<ISedes[]>) => mayBeOk.ok),
                map((response: HttpResponse<ISedes[]>) => response.body)
            )
            .subscribe(
                (res: ISedes[]) => {
                    if (!this.espaciosReserva.sedes || !this.espaciosReserva.sedes.id) {
                        this.sedes = res;
                    } else {
                        this.sedesService
                            .find(this.espaciosReserva.sedes.id)
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
        this.reservasService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<IReservas[]>) => mayBeOk.ok),
                map((response: HttpResponse<IReservas[]>) => response.body)
            )
            .subscribe((res: IReservas[]) => (this.reservas = res), (res: HttpErrorResponse) => this.onError(res.message));
        this.entradaMiembrosService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<IEntradaMiembros[]>) => mayBeOk.ok),
                map((response: HttpResponse<IEntradaMiembros[]>) => response.body)
            )
            .subscribe((res: IEntradaMiembros[]) => (this.entradamiembros = res), (res: HttpErrorResponse) => this.onError(res.message));
        this.entradaInvitadosService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<IEntradaInvitados[]>) => mayBeOk.ok),
                map((response: HttpResponse<IEntradaInvitados[]>) => response.body)
            )
            .subscribe((res: IEntradaInvitados[]) => (this.entradainvitados = res), (res: HttpErrorResponse) => this.onError(res.message));
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.espaciosReserva.id !== undefined) {
            this.subscribeToSaveResponse(this.espaciosReservaService.update(this.espaciosReserva));
        } else {
            this.subscribeToSaveResponse(this.espaciosReservaService.create(this.espaciosReserva));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IEspaciosReserva>>) {
        result.subscribe((res: HttpResponse<IEspaciosReserva>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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

    trackReservasById(index: number, item: IReservas) {
        return item.id;
    }

    trackEntradaMiembrosById(index: number, item: IEntradaMiembros) {
        return item.id;
    }

    trackEntradaInvitadosById(index: number, item: IEntradaInvitados) {
        return item.id;
    }
}
