// services/athlete.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../environments/environment';

export interface Athlete {
  id?: number;
  name: string;
  email: string;
  phone?: string;
  sport: string;
  category?: string;
  birth_date?: string;
  bio?: string;
  profile_image?: string;
  is_active?: boolean;
  created_at?: string;
}

export interface AthleteCreate {
  name: string;
  email: string;
  phone?: string;
  sport: string;
  category?: string;
  birthDate?: string;
  bio?: string;
  profileImage?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AthleteService {
  private apiUrl = `${environment.apiUrl}/api/athletes`;

  constructor(private http: HttpClient) { }

  createAthlete(athlete: AthleteCreate): Observable<Athlete> {
    return this.http.post<Athlete>(this.apiUrl + '/', athlete)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getAthletes(skip: number = 0, limit: number = 100): Observable<Athlete[]> {
    return this.http.get<Athlete[]>(`${this.apiUrl}/?skip=${skip}&limit=${limit}`)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getAthlete(id: number): Observable<Athlete> {
    return this.http.get<Athlete>(`${this.apiUrl}/${id}`)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  updateAthlete(id: number, athlete: Partial<AthleteCreate>): Observable<Athlete> {
    return this.http.put<Athlete>(`${this.apiUrl}/${id}`, athlete)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  deleteAthlete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Ocorreu um erro desconhecido';
    
    if (error.error instanceof ErrorEvent) {
      // Erro do lado do cliente
      errorMessage = `Erro: ${error.error.message}`;
    } else {
      // Erro do lado do servidor
      switch (error.status) {
        case 400:
          errorMessage = error.error?.detail || 'Dados inválidos';
          break;
        case 404:
          errorMessage = 'Atleta não encontrado';
          break;
        case 500:
          errorMessage = 'Erro interno do servidor';
          break;
        default:
          errorMessage = `Erro ${error.status}: ${error.error?.detail || error.message}`;
      }
    }
    
    console.error('Erro na API:', error);
    return throwError(() => ({ error: { detail: errorMessage } }));
  }
}