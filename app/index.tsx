import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Slider,
  Image,
  ScrollView,
  FlatList,
  SafeAreaView,
} from 'react-native';

//para fazer o carrossel
//import img1 from '../imgs/01_Honda_Civic_Type-R_Frente_Lateral_Blue_Pearl.png';

const App = () => {
  const caixaPesquisa = {
    width: '100%',
    height: '210px',
    backgroundColor: 'orange',
    display: 'flex',
    alignItems: 'center',
    marginTop: '30px',
  };

  const textoCaixa = {
    color: 'white',
    margin: '10px',
  };

  const pesquisador = {
    position: 'absolute',
    top: '155px',
    width: '90%',
    height: '220px',
    backgroundColor: 'gray',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  const textoPesquisador = {
    color: 'white',
    marginLeft: '3%',
  };

  const titleBox = {
    backgroundColor: 'gray',
    width: '100%',
    marginTop: '200px',
  };

  const titleText = {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'orange',
    marginLeft: '15px',
  };

  //carrossel
  const imgcarro = {
    width: 250,
    height: 100,
    alignSelf: 'center',
  };

  const carros = [
    require('./honda.png'),
    require('./honda.png'),
    require('./honda.png'),
  ];

  const carouselStyle = {
    display: 'flex',
    overflowX: 'auto',
    scrollSnapType: 'x mandatory',
    scrollbarWidth: 'none', // Firefox
    WebkitOverflowScrolling: 'touch',
  };

  const slideStyle = {
    flex: '0 0 100%',
    scrollSnapAlign: 'start',
    position: 'relative',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    display: 'block',
  };

  const Personagem = ({ item }) => (
    <Pressable
      onPress={() =>
        alert(
          item.descricao === '' ? 'Personagem sem descrição' : item.descricao
        )
      }>
      <View style={styles.containerPersonagem}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: item.imagem,
          }}
        />
        <Text style={styles.paragraph}>{item.nome}</Text>
      </View>
    </Pressable>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <div style={caixaPesquisa}>
        <Text style={textoCaixa}>ROMCOS</Text>
      </div>

      <div style={pesquisador}>
        <Text style={textoPesquisador}>Olá Mundo</Text>
        <TextInput
          autoCorrect={false}
          //placeholder={MENSAGEM_EMAIL}
          placeholderTextColor="grey"
          style={styles.textInput}
          clearButtonMode="always"
          //defaultValue={EMAIL}
          onChangeText={(value) => setUser(value)}
        />

        <Text style={textoPesquisador}>Olá Mundo</Text>
        <TextInput
          autoCorrect={false}
          //placeholder={MENSAGEM_EMAIL}
          placeholderTextColor="grey"
          style={styles.textInput}
          clearButtonMode="always"
          //defaultValue={EMAIL}
          onChangeText={(value) => setUser(value)}
        />
      </div>
      <div style={titleBox}>
        <Text style={titleText}>Veículos populares</Text>
        <Text style={textoPesquisador}>ver mais</Text>
      </div>

      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={Personagem}
          keyExtractor={(item) => item.id}
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
    borderBottom: '2px solid #ccc',
    color: 'white',
    fontSize: 15,
    height: 40,
    padding: '1px 4px',
    alignSelf: 'center',
    marginBottom: '3%',
    marginTop: '3%',
    lineHeight: '1',
  },
});

export default App;
