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
    desc?: string;
}