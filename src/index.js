class heroiProperties {
    constructor(name, idade,  tipo) {
        this.name = name;
        this.idade = idade;
        this.tipo = tipo
    }

    atacar(){
        let ataque = ""
        if (this.tipo.toLowerCase() == "mago"){
            ataque = "magia";
            console.log(`O ${this.tipo.toLowerCase()} atacou usando ${ataque}`);
        } else if (this.tipo.toLowerCase()  == "guerreiro"){
            ataque = "espada";
            console.log(`O ${this.tipo.toLowerCase()} atacou usando ${ataque}`);
        } else if (this.tipo.toLowerCase()  == "monge"){
            ataque = "artes marciais";
            console.log(`O ${this.tipo.toLowerCase()} atacou usando ${ataque}`);
        } else if (this.tipo.toLowerCase()  == "ninja"){
            ataque = "shuriken";
            console.log(`O ${this.tipo.toLowerCase()} atacou usando ${ataque}`);
        } else{
            console.log("seu tipo não foi identificado")
        }
    }
}

let test1 = new heroiProperties("Ekkolol1",25,"Ninja");
console.log(test1)
test1.atacar()

const test2 = new heroiProperties("user1342", 19, "Mago");
console.log(test2);
test2.atacar()

const test3  = new heroiProperties("uasd2", 18, "guerreiro");
console.log(test3);
test3.atacar()

const test4 = new heroiProperties("asd34", 20, "MONGE")
console.log(test4);
test4.atacar();