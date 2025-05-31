import { View, Text, Image, Pressable, StyleSheet, FlatList, ImageSourcePropType } from 'react-native';

import { Carro } from '../../models/Carro';
import { Autodromo } from '../../models/Autodromo';
import DefaultStyles from './styles/default';
import ImageStyles from './styles/images';
import DetailStyles from './styles/details';
import PerkStyles from './styles/perks';

import { useNavigation } from '@react-navigation/native';

const RenderImage = (images: string[] | ImageSourcePropType[], isCar: boolean = true) => {
    const renderItem = ({ item }: { item: string | ImageSourcePropType }) => (
        <Image
            style={isCar === true ? ImageStyles.bigCar: ImageStyles.bigTrack}
            source={typeof item === 'string' ? { uri: item } : item}
            resizeMode="contain"
        />
    );

    return (
        <FlatList
            data={images as (string | ImageSourcePropType)[]}
            renderItem={renderItem}
            keyExtractor={(_, index) => index.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={true}
        />
    );
};

export const FrontDisplay = ({ item }: {item: Autodromo | Carro}) => (
    <Pressable onPress={() => alert( item.descricao === '' ? 'Sem descrição' : item.descricao ) }>
        <View style={ styles.carros }>
        <Text style={DefaultStyles.textBold}>{'nome' in item ? item.nome : `${item.marca} - ${item.modelo}`}</Text>
        <Image
            style={ImageStyles.small}
            source={Array.isArray(item.imagem) 
                ? (typeof item.imagem[0] === 'string' ? { uri: item.imagem[0] } : item.imagem[0])
                : (typeof item.imagem === 'string' ? { uri: item.imagem } : item.imagem)}
            resizeMode="contain"
        />
        </View>
    </Pressable>
);


export const Details = ({ item }: { item: Autodromo | Carro }) => {
    let details;
    let isCar = true;
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
        isCar = false;
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
        <View>
            <Text style={DefaultStyles.textBold}>{'nome' in item ? item.nome : `${item.marca} - ${item.modelo}`}</Text>
            {RenderImage(item.imagem || [], isCar)}
            {details}
        </View>
    )
};

export const Perks = ({ item }: { item: Autodromo | Carro }) => {
    let details
    let isCar = true
    const navigation = useNavigation();
    details = (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {item.traits?.map((trait, index) => (
                <Pressable key={index} style={PerkStyles.perk}>
                    <Text style={{fontSize: 13}}>{trait}</Text>
                </Pressable>
            ))}
        </View>
    )

    if ('localizacao' in item) {
        isCar = false;
    }
    return (
        <View style={{marginBottom: 20}}>
            <Text style={DefaultStyles.textBold}>{'nome' in item ? item.nome : `${item.marca} - ${item.modelo}`}</Text>
            {RenderImage(item.imagem || [], isCar)}
            {details}
            <Pressable onPress={() => {
                if ('localizacao' in item) {
                    navigation.navigate('viewAutodromo', { autodromo: item });
                } else {
                    navigation.navigate('viewCar', { carro: item });
                }
            }} style={DefaultStyles.buttonOne}>
                <Text style={DefaultStyles.buttonOneText}>Ver mais informações</Text>
            </Pressable>
        </View>
    )
};

export const TinyView = ({ item }: {item: Autodromo | Carro}) => {
    return(
        <Pressable onPress={() => alert( item.descricao === '' ? 'Sem descrição' : item.descricao ) }>
            <View>
            <Image
                style={ImageStyles.tiny}
                source={Array.isArray(item.imagem) 
                ? (typeof item.imagem[0] === 'string' ? { uri: item.imagem[0] } : item.imagem[0])
                : (typeof item.imagem === 'string' ? { uri: item.imagem } : item.imagem)}
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
            source={Array.isArray(item.imagem) 
                ? (typeof item.imagem[0] === 'string' ? { uri: item.imagem[0] } : item.imagem[0])
                : (typeof item.imagem === 'string' ? { uri: item.imagem } : item.imagem)}
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