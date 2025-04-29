import { readFile, writeFile } from 'react-native-fs';
import { join } from 'path';
import { Usuario } from '../models/Usuario';

const USUARIO_FILE_PATH = join('/data/', 'usuarios.json');

export const getUsuarios = async (): Promise<Usuario[]> => {
  try {
    const data = await readFile(USUARIO_FILE_PATH);
    return JSON.parse(data);
  } catch (e) {
    console.error('Erro ao ler informações dos Usuarios:', e);
    return [];
  }
};

export const saveUsuarios = async (Usuarios: Usuario[]): Promise<void> => {
  try {
    const data = JSON.stringify(Usuarios, null, 2);
    await writeFile(USUARIO_FILE_PATH, data, 'utf8');
  } catch (e) {
    console.error('Erro ao salvar informações dos usuarios:', e);
  }
};

export const addUsuario = async (Usuario: Usuario): Promise<void> => {
  const usuarios = await getUsuarios();
  usuarios.push(Usuario);
  await saveUsuarios(usuarios);
};
