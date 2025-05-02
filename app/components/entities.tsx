import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

import { Carro } from '../../models/Carro';
import { Autodromo } from '../../models/Autodromo';
import DefaultStyles from './styles/default';
import ImageStyles from './styles/images';
import DetailStyles from './styles/details';

export const CarroView = ({ item }: {item: Carro}) => (
    <Pressable onPress={() => alert( item.desc === '' ? 'Carro sem descrição' : item.desc ) }>
      <View style={ styles.carros }>
        <Text style={DefaultStyles.textBold}>{item.marca} - {item.modelo}</Text>
        <Image
          style={ImageStyles.small}
          source={item.imagem}
          resizeMode="contain"
        />
      </View>
    </Pressable>
);

export const AutodromoView = ({ item }: {item: Autodromo}) => (
    <Pressable onPress={() => alert( item.descricao === '' ? 'Autódromo sem descrição' : item.descricao ) }>
        <View style={ styles.carros }>
        <Text style={DefaultStyles.textBold}>{item.nome}</Text>
        <Image
            style={ImageStyles.small}
            source={item.imagem}
            resizeMode="contain"
        />
        </View>
    </Pressable>
);

export const AutodromoDetails = ({ item }: { item: Autodromo }) => (
    <View style={{width: 360}}>
        <Text style={DefaultStyles.textBold}>{item.nome}</Text>
        <Image
            style={ImageStyles.bigTrack}
            source={item.imagem}
            resizeMode="contain"
        />
        <Text style={DetailStyles.descricao}>
            {item.descricao}{'\n'}
            Localização: {item.localizacao}{'\n'}
            Tamanho: {item.tamanho} metros{'\n'}
            Tipo de Pista: {item.tipo_pista}{'\n'}
            Principais Eventos: {item.principais_eventos?.join(', ')}{'\n'}
            Infraestrutura: {item.infraestrutura?.join(', ')}{'\n'}
            Destaque: {item.destaque}
        </Text>
    </View>
);

export const CarroDetails = ({ item }: {item: Carro}) => (
    <View>
        <Text style={DefaultStyles.textBold}>{item.marca} - {item.modelo}</Text>
        <Image
            style={ImageStyles.bigCar}
            source={item.imagem}
            resizeMode="contain"
        />
        <Text style={DetailStyles.descricao}>
            {item.desc}{'\n'}
            Potência: {item.potencia} cavalos{'\n'}
            peso: {item.peso} metros{'\n'}
            0-100 km/h: {item.km100} segundos{'\n'}
            Velocidade Máxima: {item.max_vel} km/h{'\n'}
            Motor: {item.motor}
        </Text>
    </View>
);

const styles = StyleSheet.create({
  carros: {
    marginLeft: 10,
  }
});

export default { CarroView, AutodromoView, AutodromoDetails, CarroDetails };