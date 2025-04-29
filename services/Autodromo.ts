import { readFile, writeFile } from 'react-native-fs';
import { join } from 'path';
import { Autodromo } from '../models/Autodromo';

const AUTODROMO_FILE_PATH = join('/data/', 'autodromo.json');

export const getAutodromo = async (): Promise<Autodromo[]> => {
  try {
    const data = await readFile(AUTODROMO_FILE_PATH);
    return JSON.parse(data);
  } catch (e) {
    console.error('Erro ao ler informações dos Autodromos:', e);
    return [];
  }
};

export const saveAutodromo = async (carros: Autodromo[]): Promise<void> => {
  try {
    const data = JSON.stringify(carros, null, 2);
    await writeFile(AUTODROMO_FILE_PATH, data, 'utf8');
  } catch (e) {
    console.error('Erro ao salvar informações do autodromo:', e);
  }
};

export const addAutodromo = async (autodromo: Autodromo): Promise<void> => {
  const autodromos = await getAutodromo();
  autodromos.push(autodromo);
  await saveAutodromo(autodromos);
};
