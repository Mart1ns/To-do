class ListaDeTarefas{
    constructor(){
        this.tarefas = []
    }

    adicionarTarefas(tarefa){
        this.tarefas.push(tarefa);
    }

    removerTarefas(tarefa){
        this.tarefas.splice(tarefa)
    }

    exibirTarefas() {
        console.log("Lista de Tarefas:");
        this.tarefas.forEach(tarefa => {
          tarefa.exibirDetalhes();
        });
      }


}