import React from 'react';

import Menu from './components/menu';
import Header from './components/header';
import DefaultStyles from './components/styles/default';

import { View, Text, FlatList, Pressable, ScrollView } from 'react-native';

import data from './dev/customData';
import { Perks } from './components/entities';


const CarSelection = () => {
    const { CARRO_DATA } = data;

    return (
        <><ScrollView contentContainerStyle={DefaultStyles.container}>
            <Header title="Conheça nossos Carros" />
            <FlatList style={[DefaultStyles.flatList, { marginTop: -120 }]} //passando marginTop aqui porque passando diretamente na imagem
                // o header acaba a sobrepondo, deixando ela recortada
                data={CARRO_DATA}
                renderItem={({ item }) => <Perks item={item} />}
                keyExtractor={(item) => item.id}
                horizontal={false}
                showsHorizontalScrollIndicator={true} />
        </ScrollView>
        <View style={{ position: 'absolute', top: 60, zIndex: 1000, width: '90%', height: 'auto'}}>
            <Pressable onPress={() => alert('INfos')} style={[DefaultStyles.buttonTwo, {left: 120, maxWidth: 150}]}>
                <Text style={DefaultStyles.buttonTwoText}>Veículo Próprio</Text>
            </Pressable>
        </View>
        <Menu /></>
    )
}

export default CarSelection;