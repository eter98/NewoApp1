/* tslint:disable max-line-length */
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { GruposService } from 'app/entities/grupos/grupos.service';
import { IGrupos, Grupos, TipoGrupod, Categoriad, TipoConsumod } from 'app/shared/model/grupos.model';

describe('Service Tests', () => {
    describe('Grupos Service', () => {
        let injector: TestBed;
        let service: GruposService;
        let httpMock: HttpTestingController;
        let elemDefault: IGrupos;
        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [HttpClientTestingModule]
            });
            injector = getTestBed();
            service = injector.get(GruposService);
            httpMock = injector.get(HttpTestingController);

            elemDefault = new Grupos(
                0,
                'AAAAAAA',
                'AAAAAAA',
                'AAAAAAA',
                'AAAAAAA',
                'AAAAAAA',
                TipoGrupod.INTERNO,
                Categoriad.GENERAL,
                TipoConsumod.GRATIS,
                0,
                'AAAAAAA',
                'image/png',
                'AAAAAAA',
                'image/png',
                'AAAAAAA',
                'image/png',
                'AAAAAAA',
                'image/png',
                'AAAAAAA',
                'image/png',
                'AAAAAAA'
            );
        });

        describe('Service methods', async () => {
            it('should find an element', async () => {
                const returnedFromService = Object.assign({}, elemDefault);
                service
                    .find(123)
                    .pipe(take(1))
                    .subscribe(resp => expect(resp).toMatchObject({ body: elemDefault }));

                const req = httpMock.expectOne({ method: 'GET' });
                req.flush(JSON.stringify(returnedFromService));
            });

            it('should create a Grupos', async () => {
                const returnedFromService = Object.assign(
                    {
                        id: 0
                    },
                    elemDefault
                );
                const expected = Object.assign({}, returnedFromService);
                service
                    .create(new Grupos(null))
                    .pipe(take(1))
                    .subscribe(resp => expect(resp).toMatchObject({ body: expected }));
                const req = httpMock.expectOne({ method: 'POST' });
                req.flush(JSON.stringify(returnedFromService));
            });

            it('should update a Grupos', async () => {
                const returnedFromService = Object.assign(
                    {
                        nombreGrupo: 'BBBBBB',
                        instagram: 'BBBBBB',
                        facebook: 'BBBBBB',
                        twiter: 'BBBBBB',
                        linkedIn: 'BBBBBB',
                        tipoGrupo: 'BBBBBB',
                        categoria: 'BBBBBB',
                        tipoConsumo: 'BBBBBB',
                        valorSuscripcion: 1,
                        reglasGrupo: 'BBBBBB',
                        audio: 'BBBBBB',
                        video: 'BBBBBB',
                        foto1: 'BBBBBB',
                        foto2: 'BBBBBB',
                        banner: 'BBBBBB'
                    },
                    elemDefault
                );

                const expected = Object.assign({}, returnedFromService);
                service
                    .update(expected)
                    .pipe(take(1))
                    .subscribe(resp => expect(resp).toMatchObject({ body: expected }));
                const req = httpMock.expectOne({ method: 'PUT' });
                req.flush(JSON.stringify(returnedFromService));
            });

            it('should return a list of Grupos', async () => {
                const returnedFromService = Object.assign(
                    {
                        nombreGrupo: 'BBBBBB',
                        instagram: 'BBBBBB',
                        facebook: 'BBBBBB',
                        twiter: 'BBBBBB',
                        linkedIn: 'BBBBBB',
                        tipoGrupo: 'BBBBBB',
                        categoria: 'BBBBBB',
                        tipoConsumo: 'BBBBBB',
                        valorSuscripcion: 1,
                        reglasGrupo: 'BBBBBB',
                        audio: 'BBBBBB',
                        video: 'BBBBBB',
                        foto1: 'BBBBBB',
                        foto2: 'BBBBBB',
                        banner: 'BBBBBB'
                    },
                    elemDefault
                );
                const expected = Object.assign({}, returnedFromService);
                service
                    .query(expected)
                    .pipe(
                        take(1),
                        map(resp => resp.body)
                    )
                    .subscribe(body => expect(body).toContainEqual(expected));
                const req = httpMock.expectOne({ method: 'GET' });
                req.flush(JSON.stringify([returnedFromService]));
                httpMock.verify();
            });

            it('should delete a Grupos', async () => {
                const rxPromise = service.delete(123).subscribe(resp => expect(resp.ok));

                const req = httpMock.expectOne({ method: 'DELETE' });
                req.flush({ status: 200 });
            });
        });

        afterEach(() => {
            httpMock.verify();
        });
    });
});
