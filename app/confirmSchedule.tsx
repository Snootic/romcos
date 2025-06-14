import React from 'react';
import Menu from './components/menu';
import Header from './components/header';
import DefaultStyles from './components/styles/default';
import { View, Text, Pressable, StyleSheet, Platform, ScrollView } from 'react-native';
import { CustomDatePicker, TimePicker, NativeDatePicker, NativeTimePicker } from './components/customDatePicker';
import { useNavigation } from '@react-navigation/native';
import { Autodromo } from '../models/Autodromo';
import { Carro } from '../models/Carro';
import CustomData from './dev/customData';
import { TinyView } from './components/entities';

export default function ConfirmSchedule() {
    const navigation = useNavigation();
    const selectedCar = CustomData.CARRO_DATA[0];
    const selectedTrack = CustomData.AUTODROMO_DATA[0];

    let data_retirada = new Date()
    let data_devolucao = new Date()
    let horario_retirada = new Date()
    let horario_devolucao = new Date()

    let pickersRetirada
    let pickersDevolucao
    if (Platform.OS === 'web') {
        pickersRetirada = (
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingRight:10, zIndex: 100 }}>
                <CustomDatePicker selected={data_retirada} onChange={() => {}} isClearable={true} readonly={false} />
                <TimePicker selected={horario_retirada} onChange={() => {}} isClearable={true} readonly={false} />
            </View>
        )
        pickersDevolucao = (
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingRight:10, zIndex: 100 }}>
                <CustomDatePicker selected={data_devolucao} onChange={() => {}} isClearable={true} readonly={false} />
                <TimePicker selected={horario_devolucao} onChange={() => {}} isClearable={true} readonly={false} />
            </View>
        )
    }
    else {
        pickersRetirada = (
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <NativeDatePicker/>
                <NativeTimePicker/>
            </View>
        )
        pickersDevolucao = pickersRetirada
    }
    return (
        <><ScrollView contentContainerStyle={DefaultStyles.container}>
            <Header title="Confirme seu agendamento" />
            <View style={styles.boxContainer}>
                <View style={styles.itemBox}>
                    <View style={[styles.elementsBox, {width: '40%'}]}>
                        <TinyView item={selectedCar} />
                    </View>
                    <View style={[styles.elementsBox, {width: '60%'}]}>
                        <Text style={DefaultStyles.textBold}>Data de retirada</Text>
                        {pickersRetirada}
                        <Text style={DefaultStyles.textBold}>Data de Devolução</Text>
                        {pickersDevolucao}
                    </View>
                </View>
                <View style={styles.bottomBox}>
                    <Text style={DefaultStyles.textBold}>Valor: R$500</Text>
                </View>
                <View style={styles.itemBox}>
                    <View style={[styles.elementsBox, {width: '40%'}]}>
                        <TinyView item={selectedTrack} />
                    </View>
                    <View style={[styles.elementsBox, {width: '60%'}]}>
                        <Text style={DefaultStyles.textBold}>Data de retirada</Text>
                        {pickersRetirada}
                        <Text style={DefaultStyles.textBold}>Data de Devolução</Text>
                        {pickersDevolucao}
                    </View>
                </View>
                <View style={styles.bottomBox}>
                    <Text style={DefaultStyles.textBold}>Valor: R$500</Text>
                </View>
                <View style={[styles.itemBox, {height: '20%', borderRadius: 20, marginBottom: 20}]}>
                    <Text style={[DefaultStyles.textBold, {marginLeft: 20}]}>Total</Text>
                    <Text style={[DefaultStyles.titleText, {marginRight: 20}]}>R$1000</Text>
                </View>
                <Pressable onPress={() => alert('Confirmado!')} style={DefaultStyles.buttonOne}>
                    <Text style={DefaultStyles.buttonOneText}>Agendar</Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('carSelection')} style={DefaultStyles.buttonTwo}>
                    <Text style={DefaultStyles.buttonTwoText}>Alterar</Text>
                </Pressable>
            </View>
        </ScrollView>
        <Menu /></>
    )
}

const styles = StyleSheet.create({
    boxContainer: {
        borderRadius: 20, 
        width: '90%',
        height: '45%',
        marginTop: -140,
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        textAlign: "left"
    },
    itemBox: {
        width: '100%',
        height: '50%',
        backgroundColor: '#F4F4F4',
        alignItems: "center",
        borderTopEndRadius: 20,
        borderStartStartRadius: Platform.OS === 'android' ? 20 : 0,
        borderTopStartRadius: Platform.OS === 'web' ? 20 : 0,
        boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.3)',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    bottomBox: {
        width: '100%',
        height: 50,
        backgroundColor: '#E9E9E9',
        justifyContent: 'center',
        borderEndEndRadius: 20,
        borderStartEndRadius: Platform.OS === 'android' ? 20 : 0,
        borderEndStartRadius: Platform.OS === 'web' ? 20 : 0,
        boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.3)',
        marginBottom: 20,
        zIndex: 1000,
    },
    elementsBox: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 1001
    }
})