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

    const id_entrada = <any>this.activateRoute.snapshot.params['id']
  
    console.log("id de entrada: " + id_entrada)
    this.tarefasService.getUmaConta(id_entrada).subscribe({
      next: (resultado) => {
        console.log(resultado)
        this.conta = resultado}, //para aparecer o resultado no input do editar, chamo com ngModel no editar.html
      error: (erro) => console.error(erro),
      complete: () => console.info('Conta encontrada')
    })
  }


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

