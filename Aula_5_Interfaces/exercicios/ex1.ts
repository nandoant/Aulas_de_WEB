import {animal} from "./animal";
/*1) Suponha que estamos desenvolvendo um sistema de gerenciamento de animais
em um zoológico. Vamos criar uma interface Animal que define a estrutura básica
de um animal, e duas classes Mamifero e Ave que implementam essa interface em
arquivos separados.*/
class mamifero implements animal{
    isHeterotrofico(): boolean {
        return true;
    }
    Respira(): boolean {
        return true;
    }
    mama():boolean{
        return true;
    }
}

class ave implements animal{
    isHeterotrofico(): boolean {
        return true;
    }
    Respira(): boolean {
        return true;
    }
}