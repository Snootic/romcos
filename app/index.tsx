import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';

import { Carro }  from '../models/Carro';
import { getCarros } from '../services/CarroService';

import { Autodromo } from '../models/Autodromo';
import { getAutodromos } from '../services/Autodromo';

import data from './dev/customData';
const { CARRO_DATA, AUTODROMO_DATA } = data;

import Menu from './components/menu';

const Index = () => {

  const [carroData, setCarroData] = React.useState<Carro[]>([]);
  const [autodromoData, setAutodromoData] = React.useState<Autodromo[]>([]);

  React.useEffect(() => {
    getCarros()
      .then((carros) => setCarroData(carros))
      .catch((error) => {
        console.error('Erro ao obter carros:', error);
        setCarroData([]);
      });
  }, []);

  React.useEffect(() => {
    getAutodromos()
      .then((autodromos) => setAutodromoData(autodromos))
      .catch((error) => {
        console.error('Erro ao obter carros:', error);
        setCarroData([]);
      });
  }, []);


  const Carro = ({ item }: {item: Carro}) => (
    <Pressable onPress={() => alert( item.desc === '' ? 'Carro sem descrição' : item.desc ) }>
      <View style={ styles.carros }>
        <Text style={styles.text}>{item.marca} - {item.modelo}</Text>
        <Image
          style={styles.tinyLogo}
          source={item.imagem}
          resizeMode="contain"
        />
      </View>
    </Pressable>
  );

  const Autodromo = ({ item }: {item: Autodromo}) => (
    <Pressable onPress={() => alert( item.descricao === '' ? 'Autódromo sem descrição' : item.descricao ) }>
      <View style={ styles.carros }>
        <Text style={styles.text}>{item.nome}</Text>
        <Image
          style={styles.tinyLogo}
          source={item.imagem}
          resizeMode="contain"
        />
      </View>
    </Pressable>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.caixaPesquisa}>
        <Text style={styles.textoCaixa}>ROMCOS</Text>
      </View>

      <View style={styles.pesquisador}>
        <TextInput
          autoCorrect={false}
          placeholder={"Em qual autódromo deseja correr?"}
          placeholderTextColor="grey"
          style={styles.textInput}
          clearButtonMode="always"
        />
        <TextInput
          autoCorrect={false}
          placeholder={"Qual carro quer dirigir?"}
          placeholderTextColor="grey"
          style={styles.textInput}
          clearButtonMode="always"
        />
      </View>

      <View style={styles.titleBox}>
        <Text style={styles.titleText}>Veículos populares</Text>
        <Text style={styles.textoPesquisador}>ver mais</Text>
      </View>

      <FlatList
          // data={carroData}
          data={CARRO_DATA}
          renderItem={Carro}
          keyExtractor={(item) => item.id}
          horizontal={ true }
      />

      <View style={styles.titleBox}>
        <Text style={styles.titleText}>Autódromos Favoritos</Text>
        <Text style={styles.textoPesquisador}>ver mais</Text>
      </View>
      <FlatList
          // data={autodromoData}
          data={AUTODROMO_DATA}
          renderItem={Autodromo}
          keyExtractor={(item) => item.id}
          horizontal={ true }
      />
      <Menu/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  textInput: {
    width: '90%',
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    color: 'white',
    fontSize: 15,
    height: 40,
    paddingTop: 1,
    paddingBottom: 1,
    paddingLeft: 4,
    paddingRight: 4,
    alignSelf: 'center',
    marginBottom: '3%',
    marginTop: '3%',
    lineHeight: 1,
  },
  tinyLogo: {
    width: 230,
    height: 160,
    alignSelf: 'center',
  },
  caixaPesquisa: {
    width: '100%',
    height: 210,
    backgroundColor: '#F57300',
    display: 'flex',
    alignItems: 'center',
    marginTop: 30
  },
  textoCaixa: {
    color: 'white',
    margin: 10,
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    left: 30
  },
  pesquisador: {
    marginTop: -165,
    width: '90%',
    height: 220,
    backgroundColor: '#F4F4F4',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: 30,
    boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.3)',
  },
  textoPesquisador: {
    color: '#9D9D9D',
    marginLeft: '3%',
    top: 3
  },
  titleBox: {
    width: '100%',
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F57300',
    marginLeft: 15,
  },
  carros: {
    marginLeft: 10,
  }
});

export default Index;
