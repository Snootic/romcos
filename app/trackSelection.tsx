import React from 'react';

import Menu from './components/menu';
import DefaultStyles from './components/styles/default';
import ImageStyles from './components/styles/images';

import { Autodromo } from '../models/Autodromo';

import { View, Text, FlatList, ScrollView, Pressable } from 'react-native';

import data from './dev/customData';
import { AutodromoDetails } from './components/entities';

const TrackSelection = () => {
    const { AUTODROMO_DATA } = data;

    return (
        <ScrollView contentContainerstyle={DefaultStyles.container}>
            <View style={DefaultStyles.header}>
                <Text style={DefaultStyles.titulo}>Selecione o Autódromo</Text>
            </View>
            <FlatList style={{marginTop: -120}} //passando marginTop aqui porque passando diretamente na imagem
            // o header acaba a sobrepondo, deixando ela recortada
                data={AUTODROMO_DATA}
                renderItem={AutodromoDetails}
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
        </ScrollView>
    )
}

export default TrackSelection;