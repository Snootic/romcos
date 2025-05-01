import { StyleSheet, Pressable, View, Image } from 'react-native';

export default function Menu() {
    return ( 
        <View style={styles.menu}>
            <Pressable onPress={() => alert( "clicado" ) }>
                <Image
                style={styles.menuItem}
                source = { require('../../assets/images/home.png')} 
                resizeMode="contain"
                />
            </Pressable>
            <Pressable onPress={() => alert( "clicado" ) }>
                <Image
                style={styles.menuItem}
                source = { require('../../assets/images/car_menu.png')} 
                resizeMode="contain"
                />
            </Pressable>
            <Pressable onPress={() => alert( "clicado" ) }>
                <Image
                style={styles.menuItem}
                source = { require('../../assets/images/help.webp')} 
                resizeMode="contain"
                />
            </Pressable>
            <Pressable onPress={() => alert( "clicado" ) }>
                <Image
                style={styles.menuItem}
                source = { require('../../assets/images/user.png')} 
                resizeMode="contain"
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
        position: 'sticky',
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
        tintColor: '#F57300',
    },
});