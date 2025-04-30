import React, { useEffect, useState } from 'react';
import { View, FlatList, TextInput, Button, Text, StyleSheet, ScrollView } from 'react-native';
import { Autodromo } from '../../models/Autodromo';
import { getAutodromos, addAutodromo, updateAutodromo, deleteAutodromo } from '../../services/Autodromo';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const AutodromoScreen = () => {
  const [autodromos, setAutodromos] = useState<Autodromo[]>([]);
  const [form, setForm] = useState<Partial<Autodromo>>({});
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    loadAutodromos();
  }, []);

  const loadAutodromos = async () => {
    const data = await getAutodromos();
    setAutodromos(data);
  };

  const handleSave = async () => {
    const newAutodromo: Autodromo = {
      id: editingId || uuidv4(),
      nome: form.nome || '',
      tamanho: Number(form.tamanho) || 0,
      tipo_pista: form.tipo_pista || '',
      principais_eventos: form.principais_eventos || [],
      infraestrutura: form.infraestrutura || [],
      localizacao: form.localizacao || '',
      destaque: form.destaque || '',
      imagem: form.imagem || '',
      descricao: form.descricao || '',
    };

    if (editingId) {
      await updateAutodromo(newAutodromo);
    } else {
      await addAutodromo(newAutodromo);
    }

    console.log('Autódromo salvo com sucesso:', newAutodromo);

    setForm({});
    setEditingId(null);
    await loadAutodromos();
  };

  const handleEdit = (autodromo: Autodromo) => {
    setForm({
      ...autodromo,
      principais_eventos: autodromo.principais_eventos || undefined,
      infraestrutura: autodromo.infraestrutura || undefined,
    });
    setEditingId(autodromo.id);
  };

  const handleDelete = async (id: string) => {
    await deleteAutodromo(id);
    await loadAutodromos();
  };

  return (
    <ScrollView>
      <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Autódromo</Text>
      
      {['nome', 'tamanho', 'tipo_pista', 'principais_eventos', 'infraestrutura', 'localizacao', 'destaque', 'imagem', 'descricao'].map((field) => (
        <TextInput
          key={field}
          style={styles.input}
          placeholder={field}
          value={form[field as keyof Autodromo]?.toString() || ''}
          onChangeText={(text) => setForm({ ...form, [field]: text })}
        />
      ))}

      <Button title={editingId ? 'Atualizar Autódromo' : 'Adicionar Autódromo'} onPress={handleSave} />

      <Text style={styles.subtitle}>Lista de Autódromos</Text>
      <FlatList<Autodromo>
        data={autodromos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }: { item: Autodromo }) => (
          <View style={styles.item}>
            <Text style={styles.itemTitle}>{item.nome}</Text>
            <Text>{item.localizacao}</Text>
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button title="Editar" onPress={() => handleEdit(item)} />
              </View>
              <View style={styles.button}>
                <Button title="Excluir" color="#c00" onPress={() => handleDelete(item.id)} />
              </View>
            </View>
          </View>
        )}
      />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 12 },
  subtitle: { fontSize: 18, marginTop: 20, marginBottom: 10 },
  input: { borderWidth: 1, padding: 8, marginVertical: 6, borderRadius: 4 },
  item: { marginBottom: 16, padding: 10, backgroundColor: '#f0f0f0', borderRadius: 6 },
  itemTitle: { fontWeight: 'bold' },

  buttonContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 8,
  },
  
  button: {
    flex: 1,
    marginHorizontal: 4,
  },

});


export default AutodromoScreen;