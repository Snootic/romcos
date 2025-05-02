import React from 'react';
import Menu from './components/menu';
import DefaultStyles from './components/styles/default';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CustomDatePicker, TimePicker } from './components/customDatePicker';

import { TinyCar, TinyTrack } from './components/entities';

import { Autodromo } from '../models/Autodromo';
import { Carro } from '../models/Carro';

import CustomData from './dev/customData';

export default function Agendamento() {
    const navigation = useNavigation();
    const selectedCar = CustomData.CARRO_DATA[0];
    const selectedTrack = CustomData.AUTODROMO_DATA[0];

    return (
        <View style={DefaultStyles.container}>
            <View style={DefaultStyles.header}>
                <Text style={DefaultStyles.titulo}>Seu agendamento</Text>
            </View>
            <View style={styles.boxContainer}>
                <Text style={DefaultStyles.titulo}>Total</Text>
                <Text style={DefaultStyles.titulo}>R$ 0,00</Text>
            </View>
            <View style={styles.box}>
                <Text style={[DefaultStyles.titulo, { color: 'black', alignSelf: 'center' }]}>Retirada</Text>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20 }}>
                    <Text style={DefaultStyles.textBold}>Data</Text>
                    <Text style={DefaultStyles.textBold}>Horário</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20 }}>
                    <CustomDatePicker selected={new Date()} onChange={() => {}} />
                    <TimePicker selected={new Date()} onChange={() => {}} />
                </View>

                <Text style={[DefaultStyles.titulo, { color: 'black', alignSelf: 'center' }]}>Devolução</Text>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20 }}>
                    <Text style={DefaultStyles.textBold}>Data</Text>
                    <Text style={DefaultStyles.textBold}>Horário</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20 }}>
                    <CustomDatePicker selected={new Date()} onChange={() => {}} />
                    <TimePicker selected={new Date()} onChange={() => {}} />
                </View>

                <Text style={[DefaultStyles.titulo, { color: 'black', alignSelf: 'center' }]}>Itens selecionados</Text>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 20 }}>
                    <TinyCar item={selectedCar} />
                    <TinyTrack item={selectedTrack} />
                </View>
            </View>
            <Pressable onPress={() => alert('a')} style={DefaultStyles.buttonOne}>
                <Text style={DefaultStyles.buttonOneText}>Agendar</Text>
            </Pressable>
            <Pressable onPress={() => alert('INfos')} style={DefaultStyles.buttonTwo}>
                <Text style={DefaultStyles.buttonTwoText}>Alterar</Text>
            </Pressable>
            <Menu />
        </View>
    )
}

const styles = StyleSheet.create({
    boxContainer: {
        backgroundColor: 'grey',
        borderRadius: 20, width: '80%',
        height: 70,
        marginTop: -120,
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 20,
        textAlign: "left"
    },
    box: {
        width: '80%',
        height: '50%',
        alignSelf: 'center',
        backgroundColor: '#F4F4F4',
        marginTop: -20,
        borderEndEndRadius: 20,
        borderEndStartRadius: 20,
        boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.3)',
        zIndex: 1000,
        marginBottom: 50,
    }
})