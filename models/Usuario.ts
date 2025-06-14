export interface Usuario {
    id: string;
    nome: string;
    email: string;
    senha: string;
    cnh: string;
    historico?: string[];
    imagem?: string;
    genero: string;
}