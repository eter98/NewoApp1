import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { Newoapp1SharedModule } from 'app/shared';
import {
    HostSedeComponent,
    HostSedeDetailComponent,
    HostSedeUpdateComponent,
    HostSedeDeletePopupComponent,
    HostSedeDeleteDialogComponent,
    hostSedeRoute,
    hostSedePopupRoute
} from './';

const ENTITY_STATES = [...hostSedeRoute, ...hostSedePopupRoute];

@NgModule({
    imports: [Newoapp1SharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        HostSedeComponent,
        HostSedeDetailComponent,
        HostSedeUpdateComponent,
        HostSedeDeleteDialogComponent,
        HostSedeDeletePopupComponent
    ],
    entryComponents: [HostSedeComponent, HostSedeUpdateComponent, HostSedeDeleteDialogComponent, HostSedeDeletePopupComponent],
    providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Newoapp1HostSedeModule {
    constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
        this.languageHelper.language.subscribe((languageKey: string) => {
            if (languageKey !== undefined) {
                this.languageService.changeLanguage(languageKey);
            }
        });
    }
}
