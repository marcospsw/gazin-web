import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateNivelDTO, NivelResponseDTO, OneNivelResponseDTO } from '../interfaces/nivel';

@Injectable({
  providedIn: 'root',
})
export class NiveisService {
  constructor(private httpClient: HttpClient) {}

  getNiveis(): Observable<NivelResponseDTO[]> {
    return this.httpClient
      .get<NivelResponseDTO[]>(environment.URL_SERVER + 'niveis')
      .pipe(retry(2), catchError(this.handleError));
  }

  getOneNivel(id: string): Observable<OneNivelResponseDTO> {
    return this.httpClient
      .get<OneNivelResponseDTO>(environment.URL_SERVER + 'niveis/' + id)
      .pipe(retry(2), catchError(this.handleError));
  }

  updateNivel(id: string, nivel: CreateNivelDTO): Observable<NivelResponseDTO> {
    return this.httpClient
      .put<NivelResponseDTO>(environment.URL_SERVER + 'niveis/' + id, nivel)
      .pipe(retry(2), catchError(this.handleError));
  }

  createNivel(nivel: CreateNivelDTO) {
    return this.httpClient.post(environment.URL_SERVER + 'niveis', nivel).pipe(retry(2), catchError(this.handleError));
  }

  deleteNivel(id: String) {
    return this.httpClient.delete(environment.URL_SERVER + 'niveis/' + id).pipe(retry(2), catchError(this.handleError));
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
