import React from 'react';

import Menu from './components/menu';
import Header from './components/header';
import DefaultStyles from './components/styles/default';

import { View, Text, FlatList, Pressable, ScrollView } from 'react-native';

import data from './dev/customData';
import { Perks } from './components/entities';

const TrackSelection = () => {
    const { AUTODROMO_DATA } = data;

    return (
        <><ScrollView contentContainerStyle={DefaultStyles.container} nestedScrollEnabled={true}>
            <Header title="Selecione o autódromo" />
            <FlatList style={[DefaultStyles.flatList, { marginTop: -120 }]} //passando marginTop aqui porque passando diretamente na imagem
                // o header acaba a sobrepondo, deixando ela recortada
                data={AUTODROMO_DATA}
                renderItem={({ item }) => <Perks item={item} />}
                keyExtractor={(item) => item.id}
                horizontal={false}
                showsHorizontalScrollIndicator={true} />
        </ScrollView><Menu /></>
    )
}

export default TrackSelection;