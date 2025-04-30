import AsyncStorage from '@react-native-async-storage/async-storage';
import { Carro } from '../models/Carro';

const CARRO_KEY = 'Carros';

export const getCarros = async (): Promise<Carro[]> => {
  try {
    const json = await AsyncStorage.getItem(CARRO_KEY);
    return json ? JSON.parse(json) : [];
  } catch (e) {
    console.error('Erro ao ler informações dos Autódromos:', e);
    return [];
  }
};

export const saveCarros = async (Carros: Carro[]): Promise<void> => {
  try {
    await AsyncStorage.setItem(CARRO_KEY, JSON.stringify(Carros));
  } catch (e) {
    console.error('Erro ao salvar autódromos:', e);
  }
};

export const addCarro = async (Carro: Carro): Promise<void> => {
  const Carros = await getCarros();
  Carros.push(Carro);
  await saveCarros(Carros);
};

export const updateCarro = async (Carro: Carro): Promise<void> => {
  const carros = await getCarros();
  const index = carros.findIndex(a => a.id === Carro.id);
  if (index !== -1) {
    carros[index] = Carro;
    await saveCarros(carros);
  }
};

export const deleteCarro = async (id: string): Promise<void> => {
  const carros = await getCarros();
  const updated = carros.filter(a => a.id !== id);
  await saveCarros(updated);
};
