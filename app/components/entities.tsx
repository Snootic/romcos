import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

import { Carro } from '../../models/Carro';
import { Autodromo } from '../../models/Autodromo';
import DefaultStyles from './styles/default';
import ImageStyles from './styles/images';

const CarroView = ({ item }: {item: Carro}) => (
    <Pressable onPress={() => alert( item.desc === '' ? 'Carro sem descrição' : item.desc ) }>
      <View style={ styles.carros }>
        <Text style={DefaultStyles.textBold}>{item.marca} - {item.modelo}</Text>
        <Image
          style={ImageStyles.tinyLogo}
          source={item.imagem}
          resizeMode="contain"
        />
      </View>
    </Pressable>
);

const AutodromoView = ({ item }: {item: Autodromo}) => (
    <Pressable onPress={() => alert( item.descricao === '' ? 'Autódromo sem descrição' : item.descricao ) }>
        <View style={ styles.carros }>
        <Text style={DefaultStyles.textBold}>{item.nome}</Text>
        <Image
            style={ImageStyles.tinyLogo}
            source={item.imagem}
            resizeMode="contain"
        />
        </View>
    </Pressable>
);

const styles = StyleSheet.create({
  carros: {
    marginLeft: 10,
  }
});

const EntityView = [
    CarroView,
    AutodromoView
]

export default EntityView;