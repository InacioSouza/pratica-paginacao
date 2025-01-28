import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private url: string = 'http://localhost:8080/pessoa';

  http = inject(HttpClient);

  constructor() { }

  getPessoa(pagina: number, limite: number): Observable<any> {
    return this.http.get<any>(`${this.url}?page=${pagina}&size=${limite}`);
  }
}
