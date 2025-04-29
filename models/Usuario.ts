export interface Usuario {
    id: number;
    nome: string;
    email: string;
    senha: string;
    cnh: string;
    historico?: string[];
}