import { StyleSheet, Pressable, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

export default function Menu() {
    const navigation = useNavigation();
    return ( 
        <View style={styles.menu}>
            <Pressable onPress={() => navigation.navigate('index')}>
                <Image
                style={styles.menuItem}
                source = { require('../../assets/images/home.png')} 
                resizeMode="contain"
                tintColor={'#F57300'}
                />
            </Pressable>
            <Pressable onPress={() => navigation.navigate('userSchedules') }>
                <Image
                style={styles.menuItem}
                source = { require('../../assets/images/car_menu.png')} 
                resizeMode="contain"
                tintColor={'#F57300'}
                />
            </Pressable>
            <Pressable onPress={() => navigation.navigate('confirmSchedule') }>
                <Image
                style={styles.menuItem}
                source = { require('../../assets/images/cart.png')} 
                resizeMode="contain"
                tintColor={'#F57300'}
                />
            </Pressable>
            <Pressable onPress={() => navigation.navigate('profile') }>
                <Image
                style={styles.menuItem}
                source = { require('../../assets/images/user.png')} 
                resizeMode="contain"
                tintColor={'#F57300'}
                />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    menu: {
        backgroundColor: '#F4F4F4',
        width: '100%',
        height: 50,
        position: 'fixed',
        display: 'flex',
        flexDirection: 'row',
        bottom: 0,
        justifyContent: 'space-around',
      },
    menuItem: {
        width: 40,
        height: 30,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});