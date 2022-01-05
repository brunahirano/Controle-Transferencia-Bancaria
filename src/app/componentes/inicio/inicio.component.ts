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
//uma variável que contém o modelo de objeto Tarefa que acabamos que criar no tarefa.service.ts
  ListarContas: Conta[]

  //instanciando a classe TarefaService que importamos aqui
  //dentro do construtor nós declaramos (passamos como parâmetro) a variável tarefaService do tipo TarefaService e a variável router para usar o Router
  constructor(private tarefasService: TarefasService, private router: Router) {
    this.ListarContas = []
  }

  //ao iniciar esse componente deve-se executar a função listarTarefas, que acabamos de criar logo abaixo. void(vazio)
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

  //função para excluir uma tarefe pelo seu id, exclui e chama a função listarTarefas(), que vai para carregar a página com a lista de tarefas
  excluir(id:any){
    this.tarefasService.excluirConta(id).subscribe({
      next: (resultado) => {console.log("Conta de usuário excluído")
                            this.listarContas()},
      error: (erro) => console.error(erro),
      complete: () => console.info("Processo de exclusão completado")
    })
  }

  //função editar, ao clicar no botão editar, ele abre a rota edit/:id, que tem o html modificar.html, ou seja, ao clicar em editar abre o form editar
  editar(id:any){
    this.router.navigate(['/editar/' + id])
  }

}
