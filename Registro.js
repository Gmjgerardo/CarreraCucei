import React, {Component} from 'react';
import {
  StyleSheet,
  ImageBackground,
  Image,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Icon, Input, Button} from 'react-native-elements';
import logo from './assets/imagen/logo.png';

export default class Registro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iconPass: 'eye',
      hidePass: true,
    };
  }

  _changeIcon() {
    this.setState(prevState => ({
      iconPass: prevState.iconPass === 'eye' ? 'eye-slash' : 'eye',
      hidePass: !prevState.hidePass,
    }));
  }

  render() {
    return (
      <ImageBackground
        source={require('./assets/imagen/fondoRegistro.png')}
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
        </View>
        <Text style={styles.textoLogin}>Nuevo Usuario</Text>
        <View style={styles.viewForm}>
          <View style={styles.viewInputs}>
            <Input
              placeholder="Nombre Completo"
              leftIcon={
                <Icon name="person" iconStyle={styles.iconoIzquierda} />
              }
              inputStyle={styles.inputStyle}
              containerStyle={styles.inputContain}
              inputContainerStyle={styles.inputContainer}
              errorStyle={styles.errorInputStyle}
              placeholderTextColor="#000"
            />
            <Input
              placeholder="Email"
              leftIcon={
                <Icon
                  iconStyle={styles.iconoIzquierda}
                  name="envelope"
                  type="font-awesome"
                />
              }
              inputStyle={styles.inputStyle}
              containerStyle={styles.inputContain}
              inputContainerStyle={styles.inputContainer}
              errorStyle={styles.errorInputStyle}
              placeholderTextColor="#000"
            />
            <Input
              placeholder="Telefono"
              leftIcon={
                <Icon
                  iconStyle={styles.iconoIzquierda}
                  name="phone"
                  type="font-awesome"
                />
              }
              inputStyle={styles.inputStyle}
              containerStyle={styles.inputContain}
              inputContainerStyle={styles.inputContainer}
              errorStyle={styles.errorInputStyle}
              placeholderTextColor="#000"
            />
            <Input
              placeholder="Contraseña"
              secureTextEntry={this.state.hidePass}
              leftIcon={<Icon name="lock" iconStyle={styles.iconoIzquierda} />}
              rightIcon={
                <Icon
                  name={this.state.iconPass}
                  type="font-awesome"
                  iconStyle={styles.iconoMostrarContrasena}
                  onPress={() => this._changeIcon()}
                />
              }
              inputStyle={styles.inputStyle}
              containerStyle={styles.inputContain}
              inputContainerStyle={styles.inputContainer}
              errorStyle={styles.errorInputStyle}
              placeholderTextColor="#000"
            />
            <Input
              placeholder="Centro Universitario"
              leftIcon={
                <Icon
                  iconStyle={styles.iconoIzquierda}
                  name="university"
                  type="font-awesome"
                />
              }
              inputStyle={styles.inputStyle}
              containerStyle={styles.inputContain}
              inputContainerStyle={styles.inputContainer}
              errorStyle={styles.errorInputStyle}
              placeholderTextColor="#000"
            />
            <View style={[styles.twoInputs, styles.inputContain]}>
              <Input
                placeholder="Código"
                leftIcon={
                  <Icon
                    iconStyle={styles.iconoIzquierda}
                    name="id-card"
                    type="font-awesome"
                  />
                }
                inputStyle={styles.inputStyle}
                containerStyle={{width: '55%'}}
                inputContainerStyle={styles.inputContainer}
                errorStyle={styles.errorInputStyle}
                placeholderTextColor="#000"
              />
              <Input
                placeholder="Semestre"
                leftIcon={
                  <Icon
                    iconStyle={styles.iconoIzquierda}
                    name="calendar"
                    type="font-awesome"
                  />
                }
                inputStyle={styles.inputStyle}
                containerStyle={{width: '45%'}}
                inputContainerStyle={styles.inputContainer}
                errorStyle={styles.errorInputStyle}
                placeholderTextColor="#000"
              />
            </View>
          </View>
          <Button
            title="Registrar"
            buttonStyle={styles.botonIngreso}
            containerStyle={styles.btnContainer}
            titleStyle={{
              fontFamily: 'tahomabd',
              fontSize: 30,
              color: '#000',
            }}
          />
        </View>
        <Image style={styles.logo} resizeMode="contain" source={logo} />
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
    width: '100%',
    height: '15%',
  },
  imagenUdg: {
    height: '100%',
    width: '40%',
    marginLeft: 40,
  },
  textoLogin: {
    height: '10%',
    fontSize: 45,
    fontFamily: 'tahomabd',
    color: '#F2E205',
  },
  viewForm: {
    marginTop: 10,
    height: '55%',
    width: '85%',
  },
  viewInputs: {
    height: '85%',
  },
  twoInputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContain: {
    height: '16.66%',
  },
  inputContainer: {
    height: '90%',
    borderWidth: 2,
    borderBottomWidth: 3,
    borderColor: '#A30000',
    backgroundColor: '#F2BB35FF',
    borderRadius: 15,
  },
  inputStyle: {
    color: 'black',
    fontFamily: 'light',
    fontSize: 18,
  },
  iconoIzquierda: {
    color: '#000',
    marginLeft: 10,
    fontSize: 20,
  },
  iconoMostrarContrasena: {
    color: '#000',
    marginRight: 10,
    fontSize: 18,
  },
  btnContainer: {
    height: '15%',
    width: '55%',
    alignSelf: 'center',
  },
  botonIngreso: {
    backgroundColor: '#F2BB16',
    borderRadius: 25,
    height: '100%',
  },
  logo: {
    alignSelf: 'center',
    height: '20%',
    width: '80%',
  },
});
