import { TarefasService, Conta } from 'src/app/servicos/tarefas.service';
import { Component, OnInit } from '@angular/core';

//importar o Router para usar na linha 54
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})


export class InicioComponent implements OnInit {

  ListarContas: Conta[]

  constructor(private tarefasService: TarefasService, private router: Router) {
    this.ListarContas = []
  }

  ngOnInit(): void {
    this.listarContas()
  }

  listarContas() {
    this.tarefasService.getContas().subscribe({
      next: (resultado) => {console.log(resultado)
                            this.ListarContas = <any>resultado},
      error: (erro) => console.error(erro),
      complete: () => console.info('complete')
    })
  }

  excluir(id:any){
    this.tarefasService.excluirConta(id).subscribe({
      next: (resultado) => {console.log("Conta de usuário excluído")
                            this.listarContas()},
      error: (erro) => console.error(erro),
      complete: () => console.info("Processo de exclusão completado")
    })
  }

  
  editar(id:any){
    this.router.navigate(['/editar/' + id])
  }

}
