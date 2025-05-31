export interface Autodromo{
    id: string;
    nome: string;
    tamanho: number;
    tipo_pista: string;
    principais_eventos?: string[];
    infraestrutura?: string[];
    localizacao: string;
    destaque?: string;
    imagem?: string[];
    descricao?: string,
    traits?: string[],
}