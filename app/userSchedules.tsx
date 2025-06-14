import React from 'react';
import Menu from './components/menu';
import Header from './components/header';
import DefaultStyles from './components/styles/default';
import { View, Text, Pressable, StyleSheet, Platform, ScrollView } from 'react-native';
import { CustomDatePicker, TimePicker, NativeDatePicker, NativeTimePicker } from './components/customDatePicker';
import { useNavigation } from '@react-navigation/native';
import CustomData from './dev/customData';
import { TinyView } from './components/entities';

export default function UserSchedules() {
    const navigation = useNavigation();
    const selectedCar = CustomData.CARRO_DATA[0];
    const selectedTrack = CustomData.AUTODROMO_DATA[0];
    const carros = CustomData.CARRO_DATA.slice(1, 10);
    const autodromos = CustomData.AUTODROMO_DATA.slice(1, 10);

    let pickers
    if (Platform.OS === 'web') {
        pickers = (
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingRight:10, zIndex: 100 }}>
                <CustomDatePicker selected={new Date(2025, 5, 13)} onChange={() => {}} isClearable={false} readonly={true} />
                <TimePicker selected={new Date(2025, 5, 13, 14, 0)} onChange={() => {}} isClearable={false} readonly={true} />
            </View>
        )
    }
    else {
        pickers = (
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <NativeDatePicker/>
                <NativeTimePicker/>
            </View>
        )
    }

    const maxLength = Math.max(carros.length, autodromos.length);
    const intercalados = [];
    for (let i = 0; i < maxLength; i++) {
        intercalados.push(
            <Text style={[DefaultStyles.textBold, {color: 'black'}]}>Pedido {i+1}</Text>
        )
        if (carros[i]) {
            intercalados.push(
                <View style={styles.itemBox} key={`carro-${carros[i].id || i}`}>
                    <View style={[styles.elementsBox, {width: '40%'}]}>
                        <TinyView item={carros[i]} />
                    </View>
                    <View style={[styles.elementsBox, {width: '60%'}]}>
                        <Text style={DefaultStyles.textBold}>Data de retirada</Text>
                        {pickers}
                        <Text style={DefaultStyles.textBold}>Data de Devolução</Text>
                        {pickers}
                    </View>
                </View>
            );
        }
        if (autodromos[i]) {
            intercalados.push(
                <View style={styles.itemBox} key={`autodromo-${autodromos[i].id || i}`}>
                    <View style={[styles.elementsBox, {width: '40%'}]}>
                        <TinyView item={autodromos[i]} />
                    </View>
                    <View style={[styles.elementsBox, {width: '60%'}]}>
                        <Text style={DefaultStyles.textBold}>Data de retirada</Text>
                        {pickers}
                        <Text style={DefaultStyles.textBold}>Data de Devolução</Text>
                        {pickers}
                    </View>
                </View>
            );
        }
    }
    return (
        <><ScrollView contentContainerStyle={DefaultStyles.container}>
            <Header title="Seus agendamentos" />
            <Pressable 
                style={[styles.boxContainer, {marginTop: -130}]}
                onPress={() => navigation.navigate('schedule')}>
                <Text style={[DefaultStyles.titleText, {color: 'black'}]}>Em andamento</Text>
                <View style={styles.itemBox}>
                    <View style={[styles.elementsBox, {width: '40%'}]}>
                        <TinyView item={selectedCar} />
                    </View>
                    <View style={[styles.elementsBox, {width: '60%'}]}>
                        <Text style={DefaultStyles.textBold}>Data de retirada</Text>
                        {pickers}
                        <Text style={DefaultStyles.textBold}>Data de Devolução</Text>
                        {pickers}
                    </View>
                </View>
                <View style={styles.itemBox}>
                    <View style={[styles.elementsBox, {width: '40%'}]}>
                        <TinyView item={selectedTrack} />
                    </View>
                    <View style={[styles.elementsBox, {width: '60%'}]}>
                        <Text style={DefaultStyles.textBold}>Data de retirada</Text>
                        {pickers}
                        <Text style={DefaultStyles.textBold}>Data de Devolução</Text>
                        {pickers}
                    </View>
                </View>
            </Pressable>
            <Pressable 
                style={[styles.boxContainer, {marginTop: 70}]}>
                <Text style={[DefaultStyles.titleText, {color: 'black'}]}>Finalizados</Text>
                {intercalados}
            </Pressable>
        </ScrollView>
        <Menu /></>
    )
}

const styles = StyleSheet.create({
    boxContainer: {
        borderRadius: 20, 
        width: '90%',
        height: '20%',
        // marginTop: -120,
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
        borderRadius: 20,
        boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.3)',
        zIndex: 1000,
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'row'
    },
    elementsBox: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column'
    }
})