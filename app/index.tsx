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
  SafeAreaView,
} from 'react-native';

import { Carro }  from '../models/Carro';
import { getCarros } from '@/services/CarroService';

const App = () => {

  const [carroData, setCarroData] = React.useState<Carro[]>([]);

  React.useEffect(() => {
    getCarros()
      .then((carros) => setCarroData(carros))
      .catch((error) => {
        console.error('Erro ao obter carros:', error);
        setCarroData([]);
      });
  }, []);

  const Carro = ({ item }: {item: Carro}) => (
    <Pressable onPress={() => alert( item.desc === '' ? 'Carro sem descrição' : item.desc ) }>
      <View>
        <Image
          style={styles.tinyLogo}
          source={item.imagem}
        />
        <Text style={styles.text}>{item.modelo}</Text>
      </View>
    </Pressable>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.caixaPesquisa}>
        <Text style={styles.textoCaixa}>ROMCOS</Text>
      </View>

      <View style={styles.pesquisador}>
        <Text style={styles.textoPesquisador}>Olá Mundo</Text>
        <TextInput
          autoCorrect={false}
          //placeholder={MENSAGEM_EMAIL}
          placeholderTextColor="grey"
          style={styles.textInput}
          clearButtonMode="always"
          //defaultValue={EMAIL}
          // onChangeText={(value) => setUser(value)}
        />

        <Text style={styles.textoPesquisador}>Olá Mundo</Text>
        <TextInput
          autoCorrect={false}
          //placeholder={MENSAGEM_EMAIL}
          placeholderTextColor="grey"
          style={styles.textInput}
          clearButtonMode="always"
          //defaultValue={EMAIL}
          // onChangeText={(value) => setUser(value)}
        />
      </View>
      <View style={styles.titleBox}>
        <Text style={styles.titleText}>Veículos populares</Text>
        <Text style={styles.textoPesquisador}>ver mais</Text>
      </View>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={carroData}
          renderItem={Carro}
          keyExtractor={(item) => item.id}
          horizontal={ true }
        />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
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
    width: 250,
    height: 150,
    alignSelf: 'center',
  },
  caixaPesquisa: {
    width: '100%',
    height: 210,
    backgroundColor: 'orange',
    display: 'flex',
    alignItems: 'center',
    marginTop: 30
  },
  textoCaixa: {
    color: 'white',
    margin: 10,
  },
  pesquisador: {
    position: 'absolute',
    top: 155,
    width: '90%',
    height: 220,
    backgroundColor: 'gray',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textoPesquisador: {
    color: 'white',
    marginLeft: '3%',
  },
  titleBox: {
    backgroundColor: 'gray',
    width: '100%',
    marginTop: 200,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'orange',
    marginLeft: 15,
  }
});

export default App;
