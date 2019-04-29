import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { Newoapp1SharedModule } from 'app/shared';
import {
    EspacioLibreComponent,
    EspacioLibreDetailComponent,
    EspacioLibreUpdateComponent,
    EspacioLibreDeletePopupComponent,
    EspacioLibreDeleteDialogComponent,
    espacioLibreRoute,
    espacioLibrePopupRoute
} from './';

const ENTITY_STATES = [...espacioLibreRoute, ...espacioLibrePopupRoute];

@NgModule({
    imports: [Newoapp1SharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        EspacioLibreComponent,
        EspacioLibreDetailComponent,
        EspacioLibreUpdateComponent,
        EspacioLibreDeleteDialogComponent,
        EspacioLibreDeletePopupComponent
    ],
    entryComponents: [
        EspacioLibreComponent,
        EspacioLibreUpdateComponent,
        EspacioLibreDeleteDialogComponent,
        EspacioLibreDeletePopupComponent
    ],
    providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Newoapp1EspacioLibreModule {
    constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
        this.languageHelper.language.subscribe((languageKey: string) => {
            if (languageKey !== undefined) {
                this.languageService.changeLanguage(languageKey);
            }
        });
    }
}
