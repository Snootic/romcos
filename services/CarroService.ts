import { readFile, writeFile } from 'react-native-fs';
import { join } from 'path';
import { Carro } from '@/models/Carro';

const CAR_FILE_PATH = join('/data/', 'cars.json');

export const getCarros = async (): Promise<Carro[]> => {
  try {
    const data = await readFile(CAR_FILE_PATH);
    return JSON.parse(data);
  } catch (e) {
    console.error('Erro ao ler informações dos carros:', e);
    return [];
  }
};

export const saveCarros = async (carros: Carro[]): Promise<void> => {
  try {
    const data = JSON.stringify(carros, null, 2);
    await writeFile(CAR_FILE_PATH, data, 'utf8');
  } catch (e) {
    console.error('Error saving cars data:', e);
  }
};

export const addCarro = async (carro: Carro): Promise<void> => {
  const cars = await getCarros();
  cars.push(carro);
  await saveCarros(cars);
};
