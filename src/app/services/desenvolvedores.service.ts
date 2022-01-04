import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateDesenvolvedorDTO, DesenvolvedorResponseDTO, UpdateDesenvolvedorDTO } from '../interfaces/desenvolvedor';

@Injectable({
  providedIn: 'root',
})
export class DesenvolvedoresService {
  constructor(private httpClient: HttpClient) {}

  getDesenvolvedores(): Observable<DesenvolvedorResponseDTO[]> {
    return this.httpClient
      .get<DesenvolvedorResponseDTO[]>(environment.URL_SERVER + 'desenvolvedores')
      .pipe(retry(2), catchError(this.handleError));
  }

  getOneDesenvolvedor(id: string): Observable<DesenvolvedorResponseDTO> {
    return this.httpClient
      .get<DesenvolvedorResponseDTO>(environment.URL_SERVER + 'desenvolvedores/' + id)
      .pipe(retry(2), catchError(this.handleError));
  }

  createDesenvolvedor(desenvolvedor: CreateDesenvolvedorDTO) {
    return this.httpClient
      .post(environment.URL_SERVER + 'desenvolvedores', desenvolvedor)
      .pipe(retry(2), catchError(this.handleError));
  }

  updateDesenvolvedor(id: string, desenvolvedor: UpdateDesenvolvedorDTO) {
    return this.httpClient
      .put(environment.URL_SERVER + 'desenvolvedores/' + id, desenvolvedor)
      .pipe(retry(2), catchError(this.handleError));
  }

  deleteDesenvolvedor(id: String) {
    return this.httpClient
      .delete(environment.URL_SERVER + 'desenvolvedores/' + id)
      .pipe(retry(2), catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
