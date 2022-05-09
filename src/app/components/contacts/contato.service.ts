import { Contato } from './contato.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  baseUrl = "http://localhost:8080/api/contatos";

  constructor(private http: HttpClient) { }

  read(): Observable<Contato[]>{
    return this.http.get<Contato[]>(this.baseUrl);
  }

  readById(id: number): Observable<Contato>{
    return this.http.get<Contato>(`${this.baseUrl}/${id}`);
  } 

  delete(id: number): Observable<Contato>{
    return this.http.delete<Contato>(`${this.baseUrl}/${id}`);
  }

  update(id: number ,contact: Contato) {
    return this.http.put<Contato>(`${this.baseUrl}/${id}`, contact);
  }

  create(contact: Contato): Observable<Contato>{
    return this.http.post<Contato>(this.baseUrl, contact);
  }

  favorite(id: number): Observable<Contato> {
    return this.http.patch<Contato>(`${this.baseUrl}/${id}/favorito`, "");
  }

}
