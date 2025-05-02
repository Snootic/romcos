import { View, Text, StyleSheet } from 'react-native';

export default function Header(props: HeaderProps) {
    return (
            <View style={styles.header}>
                <Text style={styles.titulo}>{props.title}</Text>
            </View>
    );
}

type HeaderProps = {
    title: string;
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 210,
        backgroundColor: '#F57300',
        display: 'flex',
        alignItems: 'center',
        marginTop: 20,
        zIndex: -1000,
        position: 'relative'
      },
      titulo: {
        color: 'white',
        margin: 10,
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        left: 10
      }
})
