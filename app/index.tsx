import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Carro } from '../models/Carro';
import { getCarros } from '../services/CarroService';

import { Autodromo } from '../models/Autodromo';
import { getAutodromos } from '../services/AutodromoService';

import data from './dev/customData';

import Menu from './components/menu';
import { CarroView, AutodromoView } from './components/entities';

import DefaultStyles from './components/styles/default';

const Index = () => {
  const navigation = useNavigation();

  const [carroData, setCarroData] = React.useState<Carro[]>([]);
  const [autodromoData, setAutodromoData] = React.useState<Autodromo[]>([]);

  const { CARRO_DATA, AUTODROMO_DATA } = data;
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
    <ScrollView contentContainerStyle={DefaultStyles.container} nestedScrollEnabled={true}>
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
          onChangeText={(text) => text === "Twice até que é bom" ? navigation.navigate("dev/autodromoTest") : null}
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
        <Text style={DefaultStyles.subtitleText} onPress={() => navigation.navigate("carSelection")}>ver mais</Text>
      </View>

      <FlatList nestedScrollEnabled={true}
        // data={carroData}
        data={CARRO_DATA}
        renderItem={({item}) => <CarroView item={item} />}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={true}
      />

      <View style={DefaultStyles.titleBox}>
        <Text style={DefaultStyles.titleText}>Autódromos Favoritos</Text>
        <Text style={DefaultStyles.subtitleText} onPress={() => navigation.navigate("trackSelection")}>ver mais</Text>
      </View>

      <FlatList nestedScrollEnabled={true}
        // data={autodromoData}
        data={AUTODROMO_DATA}
        renderItem={({item}) => <AutodromoView item={item} />}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={true}
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
    alignSelf: 'center',
  },
  textoPesquisador: {
    color: '#9D9D9D',
    marginLeft: '3%',
    top: 3
  }
});

export default Index;
