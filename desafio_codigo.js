class hero{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo
    }
    atacar(){
        switch (this.tipo) {
            case "mago":
                console.log(`${this.tipo} atacou usando magia.`);
                break;
            case "guerreiro":
                console.log(`${this.tipo} atacou usando espada.`);
                break;
            case "monge":
                console.log(`${this.tipo} atacou usando artes marciais.`);
                break;
            case "ninja":
                console.log(`${this.tipo} atacou usando shuriken.`);
                break;
            default:
                console.log(`${this.tipo} não tem um tipo de ataque definido.`);
            }
    }
}   

let mago = new hero("Apolo", 75, "mago");
let guerreiro = new hero("Hercules", 35, "guerreiro");
let monge = new hero("Anthony", 56, "monge");
let ninja = new hero("Li", 32, "ninja");

mago.atacar()

