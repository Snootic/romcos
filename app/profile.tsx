import React from 'react';
import Menu from './components/menu';
import Header from './components/header';
import DefaultStyles from './components/styles/default';
import ImageStyles from './components/styles/images';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

import data from './dev/customData';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProfileDisplay } from './components/entities';

export default function Profile() {
    const usuario = data.USUARIO_DATA[0];
    const { AUTODROMO_DATA } = data;

    // Filter the autodromos based on the user's historico
    const autodromosHistorico = AUTODROMO_DATA.filter(autodromo =>
        usuario.historico?.includes(autodromo.nome)
    );

    const userInfo = (
        <View style={styles.infoContainer}>
            <View style={styles.infoBox}>
                <Text style={styles.textoCinzaMedio}>Email</Text>
                <Text style={styles.textoCinzaMedio}>{usuario.email}</Text>
            </View>
            <View style={styles.infoBox}>
                <Text style={styles.textoCinzaMedio}>CNH</Text>
                <Text style={styles.textoCinzaMedio}>{usuario.cnh}</Text>
            </View>
            <View style={styles.infoBox}>
                <Text style={styles.textoCinzaMedio}>Telefone</Text>
                <Text style={styles.textoCinzaMedio}>{usuario.telefone}</Text>
            </View>
        </View>
    );

    const profile = (
        <View>
            <Image
                source={{ uri: usuario.imagem }}
                style={ImageStyles.profile}
            />
            <Text style={[DefaultStyles.textoGrande, { color: "white", left: 0 }]}>{usuario.nome}</Text>
        </View>
    );

    return (
        <SafeAreaView style={DefaultStyles.container}>
            <Header title="" />
            {profile}
            {userInfo}
            <Text style={[DefaultStyles.textoGrande, { color: "white", textAlign: "center", marginTop: 20 }]}>
                Histórico de Autódromos
            </Text>
            <Text style={styles.clickable}>
                Alterar Perfil
            </Text>
            <Text style={[DefaultStyles.titleText,{alignSelf: "center", fontSize: 25, marginBottom: 30, marginLeft: 0}]}>
                Suas Preferências
            </Text>
            <FlatList
                data={autodromosHistorico}
                renderItem={({ item }) => <ProfileDisplay item={item} />}
                keyExtractor={(item) => item.id}
                style={{ height: 'auto'}}
                horizontal={true}
            />
            <Menu />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    infoContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '90%',
        alignSelf: 'center',
    },
    infoBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    textoCinzaMedio: {
      color: 'grey',
      fontSize: 20,
      fontWeight: 'bold',
      alignSelf: 'center',
    },
    clickable: {
        color: 'black',
        textDecorationLine: 'underline',
        fontSize: 15,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: 20,
    }
});