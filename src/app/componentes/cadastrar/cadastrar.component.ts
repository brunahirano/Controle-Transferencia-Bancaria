import { Component, OnInit } from '@angular/core';
//importando a biblioteca para trabalhar com rotas
import {Router} from '@angular/router'
import { TarefasService, Conta } from 'src/app/servicos/tarefas.service';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  conta:Conta = {
    id_transferencia: '',
    nomeCliente: '',
    valor:'',
    contaCliente: ''
  }


  constructor(private tarefasService: TarefasService, private router:Router) { }

  ngOnInit(): void {

  }

  cadastrar(){
   
    delete this.conta.id_transferencia

    //aqui fizemos a inserção da nova tarefa no banco de dados
    this.tarefasService.addConta(this.conta).subscribe({
      next:(resultado) => console.log("Conta cadastrada com sucesso"),
      error: (erro) => console.error(erro),
      complete: () => console.info("Cadastro completado com sucesso")
    })

    //voltar para a tabela de tarefas (componente inicio)
    this.router.navigate(['/inicio'])
  }
}
