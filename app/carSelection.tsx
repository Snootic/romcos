import React from 'react';

import Menu from './components/menu';
import Header from './components/header';
import DefaultStyles from './components/styles/default';

import { View, Text, FlatList, Pressable } from 'react-native';

import data from './dev/customData';
import { Details } from './components/entities';


const CarSelection = () => {
    const { CARRO_DATA } = data;

    return (
        <View style={DefaultStyles.container}>
            <Header title="Selecione o carro" />
            <FlatList style={[DefaultStyles.flatList, {marginTop: -120}]}//passando marginTop aqui porque passando diretamente na imagem
            // o header acaba a sobrepondo, deixando ela recortada
                data={CARRO_DATA}
                renderItem={({ item }) => <Details item={item} />}
                keyExtractor={(item) => item.id}
                horizontal = { true }
                showsHorizontalScrollIndicator={true}
            />
            <Pressable onPress={() => alert('Carro selecionado')} style={DefaultStyles.buttonOne}>
                <Text style={DefaultStyles.buttonOneText}>Selecionar Carro</Text>
            </Pressable>
            <Pressable onPress={() => alert('INfos')} style={DefaultStyles.buttonTwo}>
                <Text style={DefaultStyles.buttonTwoText}>Veículo Próprio</Text>
            </Pressable>
            <Menu/>
        </View>
    )
}

export default CarSelection;