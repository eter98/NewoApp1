import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiAlertService, JhiDataUtils } from 'ng-jhipster';
import { ILanding } from 'app/shared/model/landing.model';
import { LandingService } from './landing.service';
import { ISedes } from 'app/shared/model/sedes.model';
import { SedesService } from 'app/entities/sedes';

@Component({
    selector: 'jhi-landing-update',
    templateUrl: './landing-update.component.html'
})
export class LandingUpdateComponent implements OnInit {
    landing: ILanding;
    isSaving: boolean;

    sedes: ISedes[];

    constructor(
        protected dataUtils: JhiDataUtils,
        protected jhiAlertService: JhiAlertService,
        protected landingService: LandingService,
        protected sedesService: SedesService,
        protected elementRef: ElementRef,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ landing }) => {
            this.landing = landing;
        });
        this.sedesService
            .query({ filter: 'landing-is-null' })
            .pipe(
                filter((mayBeOk: HttpResponse<ISedes[]>) => mayBeOk.ok),
                map((response: HttpResponse<ISedes[]>) => response.body)
            )
            .subscribe(
                (res: ISedes[]) => {
                    if (!this.landing.sedes || !this.landing.sedes.id) {
                        this.sedes = res;
                    } else {
                        this.sedesService
                            .find(this.landing.sedes.id)
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
        this.dataUtils.clearInputImage(this.landing, this.elementRef, field, fieldContentType, idInput);
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.landing.id !== undefined) {
            this.subscribeToSaveResponse(this.landingService.update(this.landing));
        } else {
            this.subscribeToSaveResponse(this.landingService.create(this.landing));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<ILanding>>) {
        result.subscribe((res: HttpResponse<ILanding>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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
}
