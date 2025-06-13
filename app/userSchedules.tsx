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

export default function UserSchedules() {
    const navigation = useNavigation();
    const selectedCar = CustomData.CARRO_DATA[0];
    const selectedTrack = CustomData.AUTODROMO_DATA[0];

    let pickers
    if (Platform.OS === 'web') {
        pickers = (
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingRight:10, zIndex: 100 }}>
                <CustomDatePicker selected={new Date()} onChange={() => {}} isClearable={false} readonly={true} />
                <TimePicker selected={new Date()} onChange={() => {}} isClearable={false} readonly={true} />
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
    return (
        <><ScrollView contentContainerStyle={DefaultStyles.container}>
            <Header title="Seus agendamentos" />
            <Text style={[DefaultStyles.titleText, {marginTop: -130, color: 'black'}]}>Em andamento</Text>
            <View style={styles.boxContainer}>
                <view style={styles.itemBox}>
                    
                    <view style={styles.elementsBox}>
                        <TinyView item={selectedCar} />
                    </view>
                    <view style={styles.elementsBox}>
                        <Text style={DefaultStyles.textBold}>Data de retirada</Text>
                        {pickers}
                        <Text style={DefaultStyles.textBold}>Data de Devolução</Text>
                        {pickers}
                    </view>
                </view>
                <view style={styles.itemBox}>
                    <view style={styles.elementsBox}>
                        <TinyView item={selectedTrack} />
                    </view>
                    <view style={styles.elementsBox}>
                        <Text style={DefaultStyles.textBold}>Data de retirada</Text>
                        {pickers}
                        <Text style={DefaultStyles.textBold}>Data de Devolução</Text>
                        {pickers}
                    </view>
                </view>
            </View>
            <Text style={[DefaultStyles.titleText, {color: 'black'}]}>Finalizados</Text>
        </ScrollView>
        <Menu /></>
    )
}

const styles = StyleSheet.create({
    boxContainer: {
        borderRadius: 20, 
        width: '90%',
        height: '80%',
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