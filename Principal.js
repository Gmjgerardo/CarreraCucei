/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  StyleSheet,
  ImageBackground,
  StatusBar,
  Image,
  View,
  Text,
} from 'react-native';
import { Icon } from 'react-native-elements';
import logo from './assets/imagen/logo.png';

export default class Principal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ImageBackground
        source={require('./assets/imagen/fondo.png')}
        resizeMode="stretch"
        style={styles.container}>
        <View style={styles.viewHeader}>
          <Icon
            name="align-justify"
            type="font-awesome"
            iconStyle={styles.iconoNav}
          />
          <Image
            source={require('./assets/imagen/udg.png')}
            style={styles.logoUdg}
          />
        </View>

        <Text style={styles.txtPrincipal}> Principal </Text>

        <Image
          style={styles.logo}
          //resizeMode="center"
          source={logo}
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    alignItems: 'center',
  },
  viewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: '10%',
    alignItems: 'center',
  },
  iconoNav: {
    fontSize: 45,
    color: 'white',
    paddingLeft: 40,
  },
  logoUdg: {
    resizeMode: 'contain',
    width: '50%',
    height: '100%',
    marginVertical: -1,
  },
  txtPrincipal: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    height: '10%',
  },
  logo: {
    height: '80%',
    width: '90%',
    resizeMode: 'contain',
  },
});
