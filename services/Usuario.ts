import AsyncStorage from '@react-native-async-storage/async-storage';
import { Usuario } from '../models/Usuario';

const USUARIO_KEY = 'Usuarios';

export const getUsuarios = async (): Promise<Usuario[]> => {
  try {
    const json = await AsyncStorage.getItem(USUARIO_KEY);
    return json ? JSON.parse(json) : [];
  } catch (e) {
    console.error('Erro ao ler informações dos Autódromos:', e);
    return [];
  }
};

export const saveUsuarios = async (Usuarios: Usuario[]): Promise<void> => {
  try {
    await AsyncStorage.setItem(USUARIO_KEY, JSON.stringify(Usuarios));
  } catch (e) {
    console.error('Erro ao salvar autódromos:', e);
  }
};

export const addUsuario = async (Usuario: Usuario): Promise<void> => {
  const usuarios = await getUsuarios();
  usuarios.push(Usuario);
  await saveUsuarios(usuarios);
};

export const updateUsuario = async (Usuario: Usuario): Promise<void> => {
  const usuarios = await getUsuarios();
  const index = usuarios.findIndex(a => a.id === Usuario.id);
  if (index !== -1) {
    usuarios[index] = Usuario;
    await saveUsuarios(usuarios);
  }
};

export const deleteUsuario = async (id: string): Promise<void> => {
  const usuarios = await getUsuarios();
  const updated = usuarios.filter(a => a.id !== id);
  await saveUsuarios(updated);
};
