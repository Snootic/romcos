import React from 'react';

import Menu from './components/menu';
import Header from './components/header';
import DefaultStyles from './components/styles/default';

import { View, Text, FlatList, Pressable } from 'react-native';

import data from './dev/customData';
import { AutodromoDetails } from './components/entities';

const TrackSelection = () => {
    const { AUTODROMO_DATA } = data;

    return (
        <View style={DefaultStyles.container}>
            <Header title="Selecione o autódromo" />
            <FlatList style={{marginTop: -120}} //passando marginTop aqui porque passando diretamente na imagem
            // o header acaba a sobrepondo, deixando ela recortada
                data={AUTODROMO_DATA}
                renderItem={({ item }) => <AutodromoDetails item={item} />}
                keyExtractor={(item) => item.id}
                horizontal = { true }
                showsHorizontalScrollIndicator={true}
            />
            <Pressable onPress={() => alert('Autódromo selecionado')} style={DefaultStyles.buttonOne}>
                <Text style={DefaultStyles.buttonOneText}>Selecionar Autódromo</Text>
            </Pressable>
            <Pressable onPress={() => alert('INfos')} style={DefaultStyles.buttonTwo}>
                <Text style={DefaultStyles.buttonTwoText}>Mais Informações</Text>
            </Pressable>
            <Menu/>
        </View>
    )
}

export default TrackSelection;