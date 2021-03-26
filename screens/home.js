import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableHighlight,
  Button,
  TouchableNativeFeedback,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const Home = ({navigation}) => {
  const color = [
    ['#4facfe', '#00f2fe'],
    ['#667eea', '#764ba2'],
    ['#0ba360', '#3cba92'],
    ['#6a85b6', '#bac8e0'],
    ['#a7a6cb', '#8989ba'],
    ['#88d3ce', '#6e45e2'],
    ['#13547a', '#80d0c7'],
    ['#09203f', '#537895'],
    ['#fc6076', '#ff9a44'],
    ['#ed6ea0', '#ec8c69'],
    ['#20E2D7', '#F9FEA5'],
  ];

  const getColor = e => {
    let k = parseInt(e);
    if (k > 8) {
      k = k % 9;
      return k;
    } else return k;
  };

  return (
    <View style={styles.view}>
      <StatusBar barStyle="dark-content" backgroundColor="#a7ff83" />
      <Text style={styles.text}>Select Your Brand</Text>
      <View style={styles.line} />

      <ScrollView style={{backgroundColor: 'white'}}>
        <TouchableNativeFeedback
          onPress={() => {
            navigation.navigate('BrandView', {
              brand: 'Redmi',
            });
          }}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={color[0]}
            style={styles.lg}>
            <Text
              style={{
                color: 'white',
                fontFamily: 'sansbold',
                fontSize: 20,
              }}>
              Redmi
            </Text>
          </LinearGradient>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback
          onPress={() => {
            navigation.navigate('BrandView', {
              brand: 'Xiaomi',
            });
          }}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={color[1]}
            style={styles.lg}>
            <Text
              style={{
                color: 'white',
                fontFamily: 'sansbold',
                fontSize: 20,
              }}>
              Xiaomi
            </Text>
          </LinearGradient>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback
          onPress={() => {
            navigation.navigate('BrandView', {
              brand: 'OPPO',
            });
          }}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={color[2]}
            style={styles.lg}>
            <Text
              style={{
                color: 'white',
                fontFamily: 'sansbold',
                fontSize: 20,
              }}>
              OPPO
            </Text>
          </LinearGradient>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          onPress={() => {
            navigation.navigate('BrandView', {
              brand: 'Moto',
            });
          }}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={color[3]}
            style={styles.lg}>
            <Text
              style={{
                color: 'white',
                fontFamily: 'sansbold',
                fontSize: 20,
              }}>
              Moto
            </Text>
          </LinearGradient>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          onPress={() => {
            navigation.navigate('BrandView', {
              brand: 'Samsung',
            });
          }}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={color[4]}
            style={styles.lg}>
            <Text
              style={{
                color: 'white',
                fontFamily: 'sansbold',
                fontSize: 20,
              }}>
              Samsung
            </Text>
          </LinearGradient>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          onPress={() => {
            navigation.navigate('BrandView', {
              brand: 'POCO',
            });
          }}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={color[5]}
            style={styles.lg}>
            <Text
              style={{
                color: 'white',
                fontFamily: 'sansbold',
                fontSize: 20,
              }}>
              POCO
            </Text>
          </LinearGradient>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          onPress={() => {
            navigation.navigate('BrandView', {
              brand: 'Realme',
            });
          }}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={color[6]}
            style={styles.lg}>
            <Text
              style={{
                color: 'white',
                fontFamily: 'sansbold',
                fontSize: 20,
              }}>
              Realme
            </Text>
          </LinearGradient>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          onPress={() => {
            navigation.navigate('BrandView', {
              brand: 'Oneplus',
            });
          }}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={color[7]}
            style={styles.lg}>
            <Text
              style={{
                color: 'white',
                fontFamily: 'sansbold',
                fontSize: 20,
              }}>
              Oneplus
            </Text>
          </LinearGradient>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          onPress={() => {
            navigation.navigate('BrandView', {
              brand: 'Asus',
            });
          }}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={color[8]}
            style={styles.lg}>
            <Text
              style={{
                color: 'white',
                fontFamily: 'sansbold',
                fontSize: 20,
              }}>
              Asus
            </Text>
          </LinearGradient>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          onPress={() => {
            navigation.navigate('BrandView', {
              brand: 'Nokia',
            });
          }}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={color[9]}
            style={styles.lg}>
            <Text
              style={{
                color: 'white',
                fontFamily: 'sansbold',
                fontSize: 20,
              }}>
              Nokia
            </Text>
          </LinearGradient>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          onPress={() => {
            navigation.navigate('BrandView', {
              brand: 'LG',
            });
          }}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={color[10]}
            style={styles.lg}>
            <Text
              style={{
                color: 'white',
                fontFamily: 'sansbold',
                fontSize: 20,
              }}>
              LG
            </Text>
          </LinearGradient>
        </TouchableNativeFeedback>
      </ScrollView>
    </View>
  );
};

const styles = {
  view: {
    backgroundColor: 'white',
    flex: 1,
  },
  text: {
    color: 'black',
    fontFamily: 'sansbold',
    fontSize: 20,
    padding: 20,
    textAlign: 'center',
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    marginLeft: 20,
    marginRight: 20,
    opacity: 0.3,
  },

  box: {
    padding: 25,
    textAlign: 'center',
    fontFamily: 'sansbold',
    fontSize: 20,
    backgroundColor: '#a7ff83',
    color: 'black',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
    borderRadius: 10,
    elevation: 1,
    position: 'relative',
  },
  lg: {
    padding: 25,
    textAlign: 'center',
    fontFamily: 'sansbold',
    fontSize: 20,
    backgroundColor: '#a7ff83',
    color: 'black',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
    borderRadius: 10,
    fontFamily: 'sansbold',
  },
};

export default Home;
