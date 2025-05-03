import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

import { Carro } from '../../models/Carro';
import { Autodromo } from '../../models/Autodromo';
import DefaultStyles from './styles/default';
import ImageStyles from './styles/images';
import DetailStyles from './styles/details';

export const FrontDisplay = ({ item }: {item: Autodromo | Carro}) => (
    <Pressable onPress={() => alert( item.descricao === '' ? 'Sem descrição' : item.descricao ) }>
        <View style={ styles.carros }>
        <Text style={DefaultStyles.textBold}>{'nome' in item ? item.nome : `${item.marca} - ${item.modelo}`}</Text>
        <Image
            style={ImageStyles.small}
            source={typeof item.imagem === 'string' ? { uri: item.imagem } : item.imagem}
            resizeMode="contain"
        />
        </View>
    </Pressable>
);


export const Details = ({ item }: { item: Autodromo | Carro }) => {
    let details
    if ('localizacao' in item) {
        details = (
            <Text style={DetailStyles.descricao}>
            {item.descricao}{'\n'}
            Localização: {item.localizacao}{'\n'}
            Tamanho: {item.tamanho} metros{'\n'}
            Tipo de Pista: {item.tipo_pista}{'\n'}
            Principais Eventos: {item.principais_eventos?.join(', ')}{'\n'}
            Infraestrutura: {item.infraestrutura?.join(', ')}{'\n'}
            Destaque: {item.destaque}
        </Text>
        )
    }
    else {
        details = (
            <Text style={DetailStyles.descricao}>
                {item.descricao}{'\n'}
                Potência: {item.potencia} cavalos{'\n'}
                peso: {item.peso} metros{'\n'}
                0-100 km/h: {item.km100} segundos{'\n'}
                Velocidade Máxima: {item.max_vel} km/h{'\n'}
                Motor: {item.motor}
            </Text>
        )
    }
    return (
        <View style={{width: 360}}>
            <Text style={DefaultStyles.textBold}>{'nome' in item ? item.nome : `${item.marca} - ${item.modelo}`}</Text>
            <Image
            style={'localizacao' in item ? ImageStyles.bigTrack : ImageStyles.bigCar}
            source={typeof item.imagem === 'string' ? { uri: item.imagem } : item.imagem}
            resizeMode="contain"
            />
            {details}
        </View>
    )
};

export const TinyView = ({ item }: {item: Autodromo | Carro}) => {
    return(
        <Pressable onPress={() => alert( item.descricao === '' ? 'Sem descrição' : item.descricao ) }>
            <View>
            <Image
                style={ImageStyles.tiny}
                source={typeof item.imagem === 'string' ? { uri: item.imagem } : item.imagem}
                resizeMode="contain"
            />
            </View>
            <Text style={DefaultStyles.textBold}>{'nome' in item ? item.nome : `${item.marca} - ${item.modelo}`}</Text>
        </Pressable>
    );
};

export const ProfileDisplay = ({ item }: {item: Autodromo | Carro}) => (
    <Pressable onPress={() => alert( item.descricao === '' ? 'Sem descrição' : item.descricao ) }>
        <View style={ styles.carros }>
        <Text style={DefaultStyles.textBold}>{'nome' in item ? item.nome : `${item.marca} - ${item.modelo}`}</Text>
        <Image
            style={ImageStyles.small}
            source={typeof item.imagem === 'string' ? { uri: item.imagem } : item.imagem}
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

export default { FrontDisplay, Details, TinyView, ProfileDisplay };