import { ImageSourcePropType } from "react-native";

export interface Carro{
    id: string;
    marca: string;
    modelo: string;
    ano: number;
    motor?: string;
    potencia?: number;
    peso?: number;
    km100?: number;
    max_vel?: number;
    descricao?: string;
    imagem?: ImageSourcePropType[]; // url da imagem
    traits?: string[];
}