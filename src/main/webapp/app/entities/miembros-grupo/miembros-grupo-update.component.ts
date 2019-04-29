import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiAlertService } from 'ng-jhipster';
import { IMiembrosGrupo } from 'app/shared/model/miembros-grupo.model';
import { MiembrosGrupoService } from './miembros-grupo.service';
import { IGrupos } from 'app/shared/model/grupos.model';
import { GruposService } from 'app/entities/grupos';
import { IMiembros } from 'app/shared/model/miembros.model';
import { MiembrosService } from 'app/entities/miembros';

@Component({
    selector: 'jhi-miembros-grupo-update',
    templateUrl: './miembros-grupo-update.component.html'
})
export class MiembrosGrupoUpdateComponent implements OnInit {
    miembrosGrupo: IMiembrosGrupo;
    isSaving: boolean;

    grupos: IGrupos[];

    miembros: IMiembros[];

    constructor(
        protected jhiAlertService: JhiAlertService,
        protected miembrosGrupoService: MiembrosGrupoService,
        protected gruposService: GruposService,
        protected miembrosService: MiembrosService,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ miembrosGrupo }) => {
            this.miembrosGrupo = miembrosGrupo;
        });
        this.gruposService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<IGrupos[]>) => mayBeOk.ok),
                map((response: HttpResponse<IGrupos[]>) => response.body)
            )
            .subscribe((res: IGrupos[]) => (this.grupos = res), (res: HttpErrorResponse) => this.onError(res.message));
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
        if (this.miembrosGrupo.id !== undefined) {
            this.subscribeToSaveResponse(this.miembrosGrupoService.update(this.miembrosGrupo));
        } else {
            this.subscribeToSaveResponse(this.miembrosGrupoService.create(this.miembrosGrupo));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IMiembrosGrupo>>) {
        result.subscribe((res: HttpResponse<IMiembrosGrupo>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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

    trackGruposById(index: number, item: IGrupos) {
        return item.id;
    }

    trackMiembrosById(index: number, item: IMiembros) {
        return item.id;
    }
}
