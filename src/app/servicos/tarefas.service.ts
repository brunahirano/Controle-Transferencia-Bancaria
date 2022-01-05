import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class TarefasService {
  //informando o Angular que todas as rotinas realizadas no backend (post, put, get, delete) serão acessadas através dessa rota /contas
  url = '/contas'

  //construtor com private cria uma variável http para instanciar o HttpClient
  constructor(private http: HttpClient) { }

  //encontrar todas as contas cadastradas no bd
  getContas(){
    return this.http.get(this.url)
  }

  //encontrar uma conta
  getUmaConta(id:any){
    return this.http.get(this.url + '/' + id)

  }

  //adicionar Conta
  addConta(conta:Conta){
    return this.http.post(this.url, conta)
  }

  //deletar uma conta através do id
  excluirConta(id:any){
    return this.http.delete(this.url + '/' + id)
  }

  //editar uma conta
  editarConta(id:any, conta:Conta){
    return this.http.put(this.url + '/' + id, conta)
  }

}

//model Conta
export interface Conta {
  id_transferencia?: string
  nomeCliente?: string
  valor?:string
  contaCliente?: string
}
