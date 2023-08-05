import React, {Component} from 'react';
import {
  StyleSheet,
  ImageBackground,
  Image,
  View,
  Text,
  StatusBar,
  Alert,
} from 'react-native';
import {Icon, Input, Button, Switch} from 'react-native-elements';
import {NavigationContext} from '@react-navigation/native';
import logo from './assets/imagen/logo.png';

export default class Login extends Component {
  static contextType = NavigationContext;

  constructor(props) {
    super(props);
    this.state = {
      icon: 'eye',
      hide: true,
      tLogin: '',
      tPassword: '',
    };
  }

  _changeIcon() {
    this.setState(prevState => ({
      icon: prevState.icon === 'eye' ? 'eye-slash' : 'eye',
      hide: !prevState.hide,
    }));
  }

  render() {
    const navigation = this.context;

    const btnRegistro = () => {
      navigation.navigate('Registro');
    };

    const btnLogin = () => {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
          console.log(xhttp.responseText);
          if (xhttp.responseText == 1) {
            navigation.navigate('Principal');
          } else if (xhttp.responseText == 2) {
            Alert.alert('Error', 'Password erroneo, intente de nuevo', [
              // Acciones botones alert
              {
                text: 'OK',
                onPress: () => console.log('Pass error'),
              },
            ]);
          } else {
            Alert.alert('Error', 'Usuario inexistente, cree uno nuevo', [
              // Acciones botones alert
              {
                text: 'OK',
                onPress: () => console.log('User error'),
              },
            ]);
          }
        }
      };
      xhttp.open(
        'GET',
        `https://carreracucei.000webhostapp.com/Login.php?codigo=${this.state.tLogin}&pass=${this.state.tPassword}`,
        true,
      );
      xhttp.send();
    };

    return (
      <ImageBackground
        source={require('./assets/imagen/fondo.png')}
        resizeMode="stretch"
        style={styles.container}>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor="#0D0D0D"
          translucent={true}
        />
        <View style={styles.viewTop}>
          <Image
            resizeMode="contain"
            style={styles.imagenUdg}
            source={require('./assets/imagen/udg.png')}
          />
          <Icon
            name="align-justify"
            type="font-awesome"
            size={40}
            color="white"
            paddingRight={40}
          />
        </View>
        <Text style={styles.textoLogin}>Iniciar sesión</Text>
        <View style={styles.viewInput}>
          <Input
            placeholder="Código"
            keyboardType="number-pad"
            inputContainerStyle={styles.inputContainer}
            leftIcon={
              <Icon name="person" size={24} color="#FFF" marginLeft={10} />
            }
            inputStyle={styles.inputStyle}
            errorStyle={styles.errorInputStyle}
            placeholderTextColor="#FFF"
            onChangeText={tLogin => this.setState({tLogin})}
          />
          <Input
            placeholder="Contraseña"
            inputContainerStyle={styles.inputContainer}
            secureTextEntry={this.state.hide}
            leftIcon={
              <Icon name="lock" size={24} color="#FFF" marginLeft={10} />
            }
            rightIcon={
              <Icon
                name={this.state.icon}
                type="font-awesome"
                iconStyle={styles.icono}
                onPress={() => this._changeIcon()}
              />
            }
            inputStyle={styles.inputStyle}
            errorStyle={styles.errorInputStyle}
            placeholderTextColor="#FFF"
            onChangeText={tPassword => this.setState({tPassword})}
          />
          <View style={styles.viewPreBoton}>
            <View style={styles.viewSwitch}>
              <Switch color="#F2BB16" value={true} />
              <Text style={styles.textoReco}>Recuérdame</Text>
            </View>
            <Button
              title="Registrarse"
              titleStyle={styles.textoReco}
              buttonStyle={styles.botonRegistro}
              onPress={btnRegistro}
            />
          </View>
          <Button
            title="Ingresar"
            buttonStyle={styles.botonIngreso}
            titleStyle={{
              fontFamily: 'tahomabd',
              fontSize: 30,
              color: '#000',
            }}
            onPress={btnLogin}
          />
        </View>
        <Image style={styles.logo} resizeMode="cover" source={logo} />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  viewTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '15%',
  },
  imagenUdg: {
    height: '100%',
    width: '40%',
    marginLeft: 40,
  },
  textoLogin: {
    marginTop: 20,
    fontSize: 45,
    fontFamily: 'tahomabd',
    color: '#F2E205',
  },
  viewInput: {
    marginTop: 10,
    width: '80%',
  },
  inputContainer: {
    borderWidth: 3,
    borderColor: '#000',
    backgroundColor: 'rgba(242, 27, 45, 0.95)',
    borderRadius: 9,
  },
  inputStyle: {
    color: 'white',
    fontFamily: 'light',
    fontSize: 18,
  },
  viewPreBoton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '95%',
    marginTop: -20,
  },
  viewSwitch: {
    flexDirection: 'row',
  },
  textoReco: {
    color: 'white',
    fontFamily: 'tahoma',
    fontSize: 14,
  },
  botonRegistro: {
    backgroundColor: 'rgba(0,0,0,0)',
  },
  botonIngreso: {
    backgroundColor: '#F2BB16',
    borderRadius: 25,
    height: 60,
    width: '60%',
    alignSelf: 'center',
    marginTop: 20,
  },
  logo: {
    marginTop: 30,
    alignSelf: 'center',
    height: 220,
    width: 220,
  },
  icono: {
    color: 'white',
    fontSize: 18,
    marginRight: 10,
  },
});
