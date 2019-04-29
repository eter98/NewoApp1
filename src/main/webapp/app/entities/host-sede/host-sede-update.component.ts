import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiAlertService } from 'ng-jhipster';
import { IHostSede } from 'app/shared/model/host-sede.model';
import { HostSedeService } from './host-sede.service';
import { ISedes } from 'app/shared/model/sedes.model';
import { SedesService } from 'app/entities/sedes';
import { IMiembros } from 'app/shared/model/miembros.model';
import { MiembrosService } from 'app/entities/miembros';

@Component({
    selector: 'jhi-host-sede-update',
    templateUrl: './host-sede-update.component.html'
})
export class HostSedeUpdateComponent implements OnInit {
    hostSede: IHostSede;
    isSaving: boolean;

    sedes: ISedes[];

    miembros: IMiembros[];

    constructor(
        protected jhiAlertService: JhiAlertService,
        protected hostSedeService: HostSedeService,
        protected sedesService: SedesService,
        protected miembrosService: MiembrosService,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ hostSede }) => {
            this.hostSede = hostSede;
        });
        this.sedesService
            .query({ filter: 'hostsede-is-null' })
            .pipe(
                filter((mayBeOk: HttpResponse<ISedes[]>) => mayBeOk.ok),
                map((response: HttpResponse<ISedes[]>) => response.body)
            )
            .subscribe(
                (res: ISedes[]) => {
                    if (!this.hostSede.sedes || !this.hostSede.sedes.id) {
                        this.sedes = res;
                    } else {
                        this.sedesService
                            .find(this.hostSede.sedes.id)
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
        if (this.hostSede.id !== undefined) {
            this.subscribeToSaveResponse(this.hostSedeService.update(this.hostSede));
        } else {
            this.subscribeToSaveResponse(this.hostSedeService.create(this.hostSede));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IHostSede>>) {
        result.subscribe((res: HttpResponse<IHostSede>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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
}
