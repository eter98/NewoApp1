import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiAlertService, JhiDataUtils } from 'ng-jhipster';
import { ISedes } from 'app/shared/model/sedes.model';
import { SedesService } from './sedes.service';
import { ICiudad } from 'app/shared/model/ciudad.model';
import { CiudadService } from 'app/entities/ciudad';
import { ILanding } from 'app/shared/model/landing.model';
import { LandingService } from 'app/entities/landing';
import { IEntradaMiembros } from 'app/shared/model/entrada-miembros.model';
import { EntradaMiembrosService } from 'app/entities/entrada-miembros';
import { IHostSede } from 'app/shared/model/host-sede.model';
import { HostSedeService } from 'app/entities/host-sede';
import { IEspaciosReserva } from 'app/shared/model/espacios-reserva.model';
import { EspaciosReservaService } from 'app/entities/espacios-reserva';
import { IEspacioLibre } from 'app/shared/model/espacio-libre.model';
import { EspacioLibreService } from 'app/entities/espacio-libre';

@Component({
    selector: 'jhi-sedes-update',
    templateUrl: './sedes-update.component.html'
})
export class SedesUpdateComponent implements OnInit {
    sedes: ISedes;
    isSaving: boolean;

    ciudads: ICiudad[];

    landings: ILanding[];

    entradamiembros: IEntradaMiembros[];

    hostsedes: IHostSede[];

    espaciosreservas: IEspaciosReserva[];

    espaciolibres: IEspacioLibre[];

    constructor(
        protected dataUtils: JhiDataUtils,
        protected jhiAlertService: JhiAlertService,
        protected sedesService: SedesService,
        protected ciudadService: CiudadService,
        protected landingService: LandingService,
        protected entradaMiembrosService: EntradaMiembrosService,
        protected hostSedeService: HostSedeService,
        protected espaciosReservaService: EspaciosReservaService,
        protected espacioLibreService: EspacioLibreService,
        protected elementRef: ElementRef,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ sedes }) => {
            this.sedes = sedes;
        });
        this.ciudadService
            .query({ filter: 'sedes-is-null' })
            .pipe(
                filter((mayBeOk: HttpResponse<ICiudad[]>) => mayBeOk.ok),
                map((response: HttpResponse<ICiudad[]>) => response.body)
            )
            .subscribe(
                (res: ICiudad[]) => {
                    if (!this.sedes.ciudad || !this.sedes.ciudad.id) {
                        this.ciudads = res;
                    } else {
                        this.ciudadService
                            .find(this.sedes.ciudad.id)
                            .pipe(
                                filter((subResMayBeOk: HttpResponse<ICiudad>) => subResMayBeOk.ok),
                                map((subResponse: HttpResponse<ICiudad>) => subResponse.body)
                            )
                            .subscribe(
                                (subRes: ICiudad) => (this.ciudads = [subRes].concat(res)),
                                (subRes: HttpErrorResponse) => this.onError(subRes.message)
                            );
                    }
                },
                (res: HttpErrorResponse) => this.onError(res.message)
            );
        this.landingService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<ILanding[]>) => mayBeOk.ok),
                map((response: HttpResponse<ILanding[]>) => response.body)
            )
            .subscribe((res: ILanding[]) => (this.landings = res), (res: HttpErrorResponse) => this.onError(res.message));
        this.entradaMiembrosService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<IEntradaMiembros[]>) => mayBeOk.ok),
                map((response: HttpResponse<IEntradaMiembros[]>) => response.body)
            )
            .subscribe((res: IEntradaMiembros[]) => (this.entradamiembros = res), (res: HttpErrorResponse) => this.onError(res.message));
        this.hostSedeService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<IHostSede[]>) => mayBeOk.ok),
                map((response: HttpResponse<IHostSede[]>) => response.body)
            )
            .subscribe((res: IHostSede[]) => (this.hostsedes = res), (res: HttpErrorResponse) => this.onError(res.message));
        this.espaciosReservaService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<IEspaciosReserva[]>) => mayBeOk.ok),
                map((response: HttpResponse<IEspaciosReserva[]>) => response.body)
            )
            .subscribe((res: IEspaciosReserva[]) => (this.espaciosreservas = res), (res: HttpErrorResponse) => this.onError(res.message));
        this.espacioLibreService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<IEspacioLibre[]>) => mayBeOk.ok),
                map((response: HttpResponse<IEspacioLibre[]>) => response.body)
            )
            .subscribe((res: IEspacioLibre[]) => (this.espaciolibres = res), (res: HttpErrorResponse) => this.onError(res.message));
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
        this.dataUtils.clearInputImage(this.sedes, this.elementRef, field, fieldContentType, idInput);
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.sedes.id !== undefined) {
            this.subscribeToSaveResponse(this.sedesService.update(this.sedes));
        } else {
            this.subscribeToSaveResponse(this.sedesService.create(this.sedes));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<ISedes>>) {
        result.subscribe((res: HttpResponse<ISedes>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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

    trackCiudadById(index: number, item: ICiudad) {
        return item.id;
    }

    trackLandingById(index: number, item: ILanding) {
        return item.id;
    }

    trackEntradaMiembrosById(index: number, item: IEntradaMiembros) {
        return item.id;
    }

    trackHostSedeById(index: number, item: IHostSede) {
        return item.id;
    }

    trackEspaciosReservaById(index: number, item: IEspaciosReserva) {
        return item.id;
    }

    trackEspacioLibreById(index: number, item: IEspacioLibre) {
        return item.id;
    }
}
