class Tarefas{
    constructor(nome, descricao, prioridade){
        this.nome = nome;
        this.descricao = descricao;
        this.prioridade = prioridade;
        this.status = false // Os objetos serão criados com o status definiado como false
    }

    setStatus(){
        this.status = True
    }

    getTarefas(){
        console.log(`Nome:${this.nome}, Descrição: ${this.descricao}, Prioridade ${this.prioridade}` )
    }


}