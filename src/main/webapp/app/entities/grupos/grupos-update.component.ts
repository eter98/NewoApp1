import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiAlertService, JhiDataUtils } from 'ng-jhipster';
import { IGrupos } from 'app/shared/model/grupos.model';
import { GruposService } from './grupos.service';
import { IEvento } from 'app/shared/model/evento.model';
import { EventoService } from 'app/entities/evento';

@Component({
    selector: 'jhi-grupos-update',
    templateUrl: './grupos-update.component.html'
})
export class GruposUpdateComponent implements OnInit {
    grupos: IGrupos;
    isSaving: boolean;

    eventos: IEvento[];

    constructor(
        protected dataUtils: JhiDataUtils,
        protected jhiAlertService: JhiAlertService,
        protected gruposService: GruposService,
        protected eventoService: EventoService,
        protected elementRef: ElementRef,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ grupos }) => {
            this.grupos = grupos;
        });
        this.eventoService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<IEvento[]>) => mayBeOk.ok),
                map((response: HttpResponse<IEvento[]>) => response.body)
            )
            .subscribe((res: IEvento[]) => (this.eventos = res), (res: HttpErrorResponse) => this.onError(res.message));
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
        this.dataUtils.clearInputImage(this.grupos, this.elementRef, field, fieldContentType, idInput);
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.grupos.id !== undefined) {
            this.subscribeToSaveResponse(this.gruposService.update(this.grupos));
        } else {
            this.subscribeToSaveResponse(this.gruposService.create(this.grupos));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IGrupos>>) {
        result.subscribe((res: HttpResponse<IGrupos>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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

    trackEventoById(index: number, item: IEvento) {
        return item.id;
    }
}
