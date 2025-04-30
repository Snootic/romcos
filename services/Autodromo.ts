import AsyncStorage from '@react-native-async-storage/async-storage';
import { Autodromo } from '../models/Autodromo';

const AUTODROMO_KEY = 'autodromos';

export const getAutodromos = async (): Promise<Autodromo[]> => {
  try {
    const json = await AsyncStorage.getItem(AUTODROMO_KEY);
    return json ? JSON.parse(json) : [];
  } catch (e) {
    console.error('Erro ao ler informações dos Autódromos:', e);
    return [];
  }
};

export const saveAutodromos = async (autodromos: Autodromo[]): Promise<void> => {
  try {
    await AsyncStorage.setItem(AUTODROMO_KEY, JSON.stringify(autodromos));
  } catch (e) {
    console.error('Erro ao salvar autódromos:', e);
  }
};

export const addAutodromo = async (autodromo: Autodromo): Promise<void> => {
  const autodromos = await getAutodromos();
  autodromos.push(autodromo);
  await saveAutodromos(autodromos);
};

export const updateAutodromo = async (autodromo: Autodromo): Promise<void> => {
  const autodromos = await getAutodromos();
  const index = autodromos.findIndex(a => a.id === autodromo.id);
  if (index !== -1) {
    autodromos[index] = autodromo;
    await saveAutodromos(autodromos);
  }
};

export const deleteAutodromo = async (id: string): Promise<void> => {
  const autodromos = await getAutodromos();
  const updated = autodromos.filter(a => a.id !== id);
  await saveAutodromos(updated);
};
