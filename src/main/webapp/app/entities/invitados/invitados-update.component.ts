import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiAlertService } from 'ng-jhipster';
import { IInvitados } from 'app/shared/model/invitados.model';
import { InvitadosService } from './invitados.service';
import { IEntradaInvitados } from 'app/shared/model/entrada-invitados.model';
import { EntradaInvitadosService } from 'app/entities/entrada-invitados';
import { IMiembros } from 'app/shared/model/miembros.model';
import { MiembrosService } from 'app/entities/miembros';

@Component({
    selector: 'jhi-invitados-update',
    templateUrl: './invitados-update.component.html'
})
export class InvitadosUpdateComponent implements OnInit {
    invitados: IInvitados;
    isSaving: boolean;

    entradainvitados: IEntradaInvitados[];

    miembros: IMiembros[];

    constructor(
        protected jhiAlertService: JhiAlertService,
        protected invitadosService: InvitadosService,
        protected entradaInvitadosService: EntradaInvitadosService,
        protected miembrosService: MiembrosService,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ invitados }) => {
            this.invitados = invitados;
        });
        this.entradaInvitadosService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<IEntradaInvitados[]>) => mayBeOk.ok),
                map((response: HttpResponse<IEntradaInvitados[]>) => response.body)
            )
            .subscribe((res: IEntradaInvitados[]) => (this.entradainvitados = res), (res: HttpErrorResponse) => this.onError(res.message));
        this.miembrosService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<IMiembros[]>) => mayBeOk.ok),
                map((response: HttpResponse<IMiembros[]>) => response.body)
            )
            .subscribe((res: IMiembros[]) => (this.miembros = res), (res: HttpErrorResponse) => this.onError(res.message));
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.invitados.id !== undefined) {
            this.subscribeToSaveResponse(this.invitadosService.update(this.invitados));
        } else {
            this.subscribeToSaveResponse(this.invitadosService.create(this.invitados));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IInvitados>>) {
        result.subscribe((res: HttpResponse<IInvitados>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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

    trackEntradaInvitadosById(index: number, item: IEntradaInvitados) {
        return item.id;
    }

    trackMiembrosById(index: number, item: IMiembros) {
        return item.id;
    }
}
