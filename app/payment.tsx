import React from 'react';
import Menu from './components/menu';
import Header from './components/header';
import DefaultStyles from './components/styles/default';
import { View, Text, Pressable, StyleSheet, Platform, ScrollView, Image } from 'react-native';

export default function Payment() {
    return (
        <><ScrollView contentContainerStyle={DefaultStyles.container}>
            <Header title="Escolha como pagar" />
            <Text style={[DefaultStyles.titleText, {marginTop: -130, color: 'black'}]}>Cartões</Text>
            <Pressable style={styles.itemBox}>
                <Image source={require('../assets/images/card.png')} style={styles.icon} />
                <Text style={DefaultStyles.textBold}>Cartão de crédito</Text>
                <Image source={require('../assets/images/arrow.png')} style={styles.arrow} />
            </Pressable>
            <Pressable style={styles.itemBox}>
                <Image source={require('../assets/images/card.png')} style={styles.icon} />
                <Text style={DefaultStyles.textBold}>Cartão de débito</Text>
                <Image source={require('../assets/images/arrow.png')} style={styles.arrow} />
            </Pressable>
            <Text style={[DefaultStyles.titleText, {color: 'black'}]}>Pix</Text>
            <Pressable style={styles.itemBox}>
                <Image source={require('../assets/images/pix.png')} style={styles.icon} />
                <View style={styles.Textos}>
                    <Text style={[DefaultStyles.textBold, {textAlign: 'left'}]}>Pix</Text>
                    <Text>Aprovação imediata</Text>
                </View>
                <Image source={require('../assets/images/arrow.png')} style={styles.arrow} />
            </Pressable>
            <Pressable style={styles.itemBox}>
                <Image source={require('../assets/images/barcode.png')} style={styles.icon} />
                <View style={styles.Textos}>
                    <Text style={[DefaultStyles.textBold, {textAlign: 'left'}]}>Boleto</Text>
                    <Text>Aprovação em 1 a 2 dias úteis</Text>
                </View>
                <Image source={require('../assets/images/arrow.png')} style={styles.arrow} />
            </Pressable>
        </ScrollView>
        <Menu /></>
    )
}

const styles = StyleSheet.create({
    itemBox: {
        alignSelf: 'center',
        width: '90%',
        backgroundColor: '#F4F4F4',
        alignItems: "center",
        borderRadius: 20,
        boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.3)',
        zIndex: 1000,
        padding: 20,
        display: 'flex',
        marginBottom: 20,
        flexDirection: 'row'
    },
    Textos: {
        display: 'flex',
        flexDirection: 'column'
    },
    icon: {
        width: 40,
        height: 40,
        marginRight: 10
    },
    arrow: {
        width: 20,
        height: 20,
        marginRight: 10,
        alignSelf: 'center',
        marginLeft: 'auto'
    }
})