import { Funcionario } from "./usuario";

export interface Folha {
  id?: number;
  valorHora: number;
  quantidadeHoras: number;
  mes: number;
  ano: number;
  funcionarioId: number;
  funcionario?: Funcionario;
  impostoInss?: number;
  impostoFgts?: number;
  impostoRenda?: number;
  salarioLiquido?: number;
  salarioBruto?: number;
  criadoEm?: Date;
}