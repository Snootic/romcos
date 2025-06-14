import React from 'react';

import Menu from './components/menu';
import Header from './components/header';
import DefaultStyles from './components/styles/default';

import { View, Text, FlatList, Pressable, ScrollView } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import type { RootStackParamList } from '../App';

import { Carro } from '../models/Carro';

import { Details } from './components/entities';
import { SafeAreaView } from 'react-native-safe-area-context';

const ViewCar = () => {
    const navigation = useNavigation()
    const route = useRoute<RouteProp<RootStackParamList, 'viewCar'>>();
    const { carro } = route.params;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={DefaultStyles.container}>
                <Header title="Selecione o Carro" />
                <View style={{marginTop: -100, marginBottom: 50}}>
                    <Details item={carro}></Details>
                </View>

                <Pressable onPress={() => navigation.navigate('confirmSchedule')} style={DefaultStyles.buttonOne}>
                    <Text style={DefaultStyles.buttonOneText}>Selecionar Carro</Text>
                </Pressable>
                <Pressable onPress={() => alert('INfos')} style={DefaultStyles.buttonTwo}>
                    <Text style={DefaultStyles.buttonTwoText}>Veículo Próprio</Text>
                </Pressable>
            </ScrollView>
            <Menu />
        </SafeAreaView>
    )
}

export default ViewCar;