import { StyleSheet } from "react-native";

const DefaultStyles = StyleSheet.create({
    container: {
      backgroundColor: '#FFFFFF',
      // alignItems: 'center',
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
      color: 'black',
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
      fontSize: 25,
      fontWeight: 'bold',
      alignSelf: 'flex-start',
      left: 10
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
      marginTop: 20,
      zIndex: -1000,
      position: 'relative'
    },
    buttonOne: {
      backgroundColor: '#F57300',
      width: '60%',
      height: 50,
      borderRadius: 30,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
      alignSelf: 'center',
    },
    buttonOneText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
    buttonTwo: {
      backgroundColor: 'white',
      borderColor: '#F57300',
      borderWidth: 2,
      width: '60%',
      height: 50,
      borderRadius: 30,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
      alignSelf: 'center',
    },
    buttonTwoText: {
      color: '#F57300',
      fontSize: 18,
      fontWeight: 'bold',
    },
});

export default DefaultStyles;