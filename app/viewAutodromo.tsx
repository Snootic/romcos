import React from 'react';

import Menu from './components/menu';
import Header from './components/header';
import DefaultStyles from './components/styles/default';

import { View, Text, FlatList, Pressable, ScrollView, SafeAreaView } from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import type { RootStackParamList } from '../App';

import { Autodromo } from '../models/Autodromo';

import { Details } from './components/entities';

const ViewAutodromo = () => {
    const navigation = useNavigation()
    const route = useRoute<RouteProp<RootStackParamList, 'viewAutodromo'>>();
    const { autodromo } = route.params;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={DefaultStyles.container}>
                <Header title="Selecione o Autódromo" />
                <View style={{marginTop: -120, marginBottom: 10}}>
                    <Details item={autodromo}></Details>
                </View>

                <Pressable onPress={() => navigation.navigate('confirmSchedule')} style={DefaultStyles.buttonOne}>
                    <Text style={DefaultStyles.buttonOneText}>Selecionar Autódromo</Text>
                </Pressable>
            </ScrollView>
            <Menu />
        </SafeAreaView>
    )
}

export default ViewAutodromo;