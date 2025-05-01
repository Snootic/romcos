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

import { useNavigation } from '@react-navigation/native';

import { Carro } from '../models/Carro';
import { getCarros } from '../services/CarroService';

import { Autodromo } from '../models/Autodromo';
import { getAutodromos } from '../services/Autodromo';

import data from './dev/customData';

import Menu from './components/menu';
import EntityView from './components/entities';

import DefaultStyles from './components/styles/default';

const Index = () => {
  const navigation = useNavigation();
  console.log(navigation.getState()?.routes);

  const [carroData, setCarroData] = React.useState<Carro[]>([]);
  const [autodromoData, setAutodromoData] = React.useState<Autodromo[]>([]);

  const { CARRO_DATA, AUTODROMO_DATA } = data;
  const [CarroView, AutodromoView] = EntityView;

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

  return (
    <ScrollView contentContainerStyle={DefaultStyles.container}>
      <View style={DefaultStyles.header}>
        <Text style={DefaultStyles.titulo}>ROMCOS</Text>
      </View>

      <View style={styles.pesquisador}>
        <TextInput
          autoCorrect={false}
          placeholder={"Em qual autódromo deseja correr?"}
          placeholderTextColor="grey"
          style={DefaultStyles.textInput}
          clearButtonMode="always"
          onChangeText={() => navigation.navigate('trackSelection')}
        />
        <TextInput
          autoCorrect={false}
          placeholder={"Qual carro quer dirigir?"}
          placeholderTextColor="grey"
          style={DefaultStyles.textInput}
          clearButtonMode="always"
        />
      </View>

      <View style={DefaultStyles.titleBox}>
        <Text style={DefaultStyles.titleText}>Veículos populares</Text>
        <Text style={DefaultStyles.subtitleText}>ver mais</Text>
      </View>

      <FlatList
        // data={carroData}
        data={CARRO_DATA}
        renderItem={CarroView}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />

      <View style={DefaultStyles.titleBox}>
        <Text style={DefaultStyles.titleText}>Autódromos Favoritos</Text>
        <Text style={DefaultStyles.subtitleText}>ver mais</Text>
      </View>

      <FlatList
        // data={autodromoData}
        data={AUTODROMO_DATA}
        renderItem={AutodromoView}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />

      <Menu />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
  }
});

export default Index;
