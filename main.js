import {Tarefas} from "./Tarefas.js";
import {ListaDeTarefas} from "./ListaDeTarefas.js";


const lista = new ListaDeTarefas(); // Instanciando a lista

function adicionar(){
    const nomeTarefa = document.getElementById("nomeTarefa").value;
    const prioridade = document.getElementById("prioridade").value;

    const tarefa = new Tarefas(nomeTarefa, prioridade);
    lista.adicionar(tarefa); // Usando o método acessor

    lista.atualizarLista();

}


function atualizarLista(){
    const listaTarefas = document.getElementById('listaTarefas');
  listaTarefas.innerHTML = ''; // Limpa a lista antes de recriá-la

  // Adiciona cada tarefa à lista no HTML
  lista.tarefas.forEach(tarefa => {
    const li = document.createElement('li');
    li.textContent = `Tarefa: ${tarefa.descricao}, Prioridade: ${tarefa.prioridade}, Concluída: ${tarefa.concluida}`;
    listaTarefas.appendChild(li);
  });}

  atualizarLista();