/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { Newoapp1TestModule } from '../../../test.module';
import { GruposDetailComponent } from 'app/entities/grupos/grupos-detail.component';
import { Grupos } from 'app/shared/model/grupos.model';

describe('Component Tests', () => {
    describe('Grupos Management Detail Component', () => {
        let comp: GruposDetailComponent;
        let fixture: ComponentFixture<GruposDetailComponent>;
        const route = ({ data: of({ grupos: new Grupos(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [Newoapp1TestModule],
                declarations: [GruposDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(GruposDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(GruposDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.grupos).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
