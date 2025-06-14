import React from 'react';
import Menu from './components/menu';
import Header from './components/header';
import DefaultStyles from './components/styles/default';
import { View, Text, Pressable, StyleSheet, Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CustomDatePicker, TimePicker, NativeDatePicker, NativeTimePicker } from './components/customDatePicker';

import { TinyView } from './components/entities';

import { Autodromo } from '../models/Autodromo';
import { Carro } from '../models/Carro';

import CustomData from './dev/customData';

export default function Schedule() {
    const navigation = useNavigation();
    const selectedCar = CustomData.CARRO_DATA[0];
    const selectedTrack = CustomData.AUTODROMO_DATA[0];

    let pickers
    if (Platform.OS === 'web') {
        pickers = (
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20, zIndex: 100 }}>
                <CustomDatePicker selected={new Date()} onChange={() => {}} isClearable={false} readonly={true} />
                <TimePicker selected={new Date()} onChange={() => {}} isClearable={false} readonly={true}/>
            </View>
        )
    }
    else {
        pickers = (
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20 }}>
                <NativeDatePicker/>
                <NativeTimePicker/>
            </View>
        )
    }
    return (
        <><ScrollView contentContainerStyle={DefaultStyles.container}>
            <Header title="Seu agendamento" />
            <View style={styles.boxContainer}>
                <Text style={[DefaultStyles.textoGrande, { color: "white" }]}>Total</Text>
                <Text style={[DefaultStyles.textoGrande, { color: "white" }]}>R$ 800,00</Text>
            </View>
            <View style={styles.box}>
                <Text style={DefaultStyles.textoGrande}>Retirada</Text>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20 }}>
                    <Text style={DefaultStyles.textBold}>Data</Text>
                    <Text style={DefaultStyles.textBold}>Horário</Text>
                </View>

                {pickers}

                <Text style={DefaultStyles.textoGrande}>Devolução</Text>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20 }}>
                    <Text style={DefaultStyles.textBold}>Data</Text>
                    <Text style={DefaultStyles.textBold}>Horário</Text>
                </View>

                {pickers}

                <Text style={DefaultStyles.textoGrande}>Itens selecionados</Text>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 20 }}>
                    <TinyView item={selectedCar} />
                    <TinyView item={selectedTrack} />
                </View>
            </View>
            <Pressable onPress={() => alert('Cancelado!!!')} style={DefaultStyles.buttonOne}>
                <Text style={DefaultStyles.buttonOneText}>Cancelar Agendamento</Text>
            </Pressable>
            {/* <Pressable onPress={() => alert('INfos')} style={DefaultStyles.buttonTwo}>
                <Text style={DefaultStyles.buttonTwoText}>Alterar</Text>
            </Pressable> */}
        </ScrollView>
        <Menu /></>
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
        height: '60%',
        alignSelf: 'center',
        backgroundColor: '#F4F4F4',
        marginTop: -20,
        borderEndEndRadius: 20,
        borderStartEndRadius: Platform.OS === 'android' ? 20 : 0,
        borderEndStartRadius: Platform.OS === 'web' ? 20 : 0,
        boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.3)',
        zIndex: 1000,
        marginBottom: 50,
        paddingTop: 20
    }
})