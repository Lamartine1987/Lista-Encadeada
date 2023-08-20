class Pessoa{
    nome: string;
    idade: number;
    filho: Pessoa | null;
    constructor(nome:string, idade:number, filho:Pessoa | null = null){
        this.nome = nome;
        this.idade = idade;
        this.filho = filho
    }
}

class ListaEncadeada{
    head: Pessoa | null;
    constructor(){
        this.head = null;
    }

    adicionarPessoa(nome:string, idade:number, filho:Pessoa | null = null){
        const novaPessoa = new Pessoa(nome, idade, filho);
        if(!this.head){
            this.head = novaPessoa;
        }else{
            let atual = this.head;
            while(atual.filho !== null){
                atual = atual.filho;
            }
            atual.filho = novaPessoa;
        }
    }
}

const lista = new ListaEncadeada();
lista.adicionarPessoa("Lamartine", 35);
lista.adicionarPessoa("Cezar", 36);
lista.adicionarPessoa("Monteiro", 37);

let atual = lista.head;
while(atual !== null){
    console.log(`Nome: ${atual.nome}\nIdade: ${atual.idade}`);
    if(atual.filho){
        console.log(`Filho: ${atual.filho.nome}`);
    }else{
        console.log("Não possui filho.")
    }
    console.log();
    console.log();
    atual = atual.filho;
}