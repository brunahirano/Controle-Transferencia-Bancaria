import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { TarefasService, Conta } from 'src/app/servicos/tarefas.service';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  conta: Conta = {
    id_transferencia: '',
    nomeCliente: '',
    valor: '',
    contaCliente: ''
  }

  constructor(private tarefasService: TarefasService,
              private router: Router,
              private activateRoute: ActivatedRoute) {
            }


  ngOnInit(): void {
    //snapshot é uma função para identificar qual parêmetro que foi passado na Rota
    const id_entrada = <any>this.activateRoute.snapshot.params['id']
    //id_entrada que representa o id que peguei na rota e que identifica o meu objeto no banco de dados
    console.log("id de entrada: " + id_entrada)
    this.tarefasService.getUmaConta(id_entrada).subscribe({
      next: (resultado) => {
        console.log(resultado)
        this.conta = resultado}, //para aparecer o resultado no input do editar, chamo com ngModel no editar.html
      error: (erro) => console.error(erro),
      complete: () => console.info('Conta encontrada')
    })
  }

  //Editar uma tarefa, chamamos a função editarConta(que está no tarefas.service e que se referencia a rota PUT do backend) que está no TarefasService e passamos os parâmetros id_transferencia e o objeto que contém os dados da conta
  editar() {
    this.tarefasService.editarConta(this.conta.id_transferencia, this.conta).subscribe({
        next: (resultado) => console.log("Conta bancária editada com sucesso"),
        error: (erro) => console.error(erro),
        complete: () => console.info("Edição completada com sucesso")
      })
    //voltamos para a rota /inicio, com a lista editada
    this.router.navigate(['/inicio'])
  }

}

