import { funcionario } from "./funcionario";
/*2) Crie um sistema de gestão de funcionários em uma empresa. Teremos uma
interface Funcionario que define a estrutura básica de um funcionário, e duas
classes Gerente e Desenvolvedor que implementam essa interface em arquivos
separados. */

class Gerente implements funcionario{
    setor(): string {
        return 'Administração'
    }
    salario(): number {
        return 5000;
    }
}

class Desenvolvedor implements funcionario{
    setor(): string {
        return 'TI';
    }
    salario(): number {
        return 7000;
    }
    
}