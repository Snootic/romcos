import { StyleSheet } from "react-native";

const DefaultStyles = StyleSheet.create({
    container: {
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      minHeight: '100%',
    },
    textBold: {
      fontSize: 15,
      fontWeight: 'bold',
      color: '#333',
      textAlign: 'center',
    },
    textInput: {
      width: '90%',
      borderBottomWidth: 2,
      borderBottomColor: '#ccc',
      color: 'white',
      fontSize: 15,
      height: 40,
      paddingTop: 1,
      paddingBottom: 1,
      paddingLeft: 4,
      paddingRight: 4,
      alignSelf: 'center',
      marginBottom: '3%',
      marginTop: '3%',
      lineHeight: 1,
    },
    titulo: {
      color: 'white',
      margin: 10,
      fontSize: 30,
      fontWeight: 'bold',
      alignSelf: 'flex-start',
      left: 30
    },
    titleBox: {
      width: '100%',
      marginTop: 20,
      display: 'flex',
      flexDirection: 'row',
    },
    titleText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#F57300',
      marginLeft: 15,
    },
    subtitleText: {
      color: '#9D9D9D',
      marginLeft: '3%',
      top: 3,
      textDecorationLine: 'underline',
    },
    header: {
      width: '100%',
      height: 210,
      backgroundColor: '#F57300',
      display: 'flex',
      alignItems: 'center',
      marginTop: 30
    }
});

export default DefaultStyles;