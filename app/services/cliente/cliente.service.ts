import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../../models/model.cliente';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url="https://localhost:44377/api/clientes"
  }

  get():Observable<Cliente[]>
  {
    return this.httpClient.get<Cliente[]>(this.url);
  }

  getById(id:string):Observable<Cliente>{
    const url = `${this.url}/${id}`;
    return this.httpClient.get<Cliente>(url);
  }

  delete(id:string):Observable<null>{
    const url = `${this.url}/${id}`;
    return this.httpClient.delete<null>(url);
  }

  post(cliente:Cliente):Observable<Cliente>{
    return this.httpClient.post<Cliente>(this.url,cliente)
  }

  put(cliente:Cliente):Observable<Cliente>{
    const url = `${this.url}/${cliente.Id}`;
    this.inverterData(cliente)
    return this.httpClient.put<Cliente>(url,cliente);
  }

  inverterData(cliente:Cliente): string{
    if (cliente.DataNascimento == null || cliente.DataNascimento == '') {
      return ''
    }
    cliente.DataNascimento = `${cliente.DataNascimento?.split('/')[2]}-${cliente.DataNascimento?.split('/')[1]}-${cliente.DataNascimento?.split('/')[0]}`;
    return cliente.DataNascimento
  }
}
