import React, {useState, useEffect} from 'react';
import {View, Text, ActivityIndicator, Button} from 'react-native';
import axios from 'axios';
import {
  ScrollView,
  FlatList,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';


const BrandView = ({route, navigation}) => {
  const {brand} = route.params;
  const [resp, setRes] = useState([]);
  const [load, setLoad] = useState(true);
  const [btm, setBtm] = useState(false);

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
  ];

  useEffect(() => {
    fetchData();
  }, [resp]);

  const fetchData = async () => {
    const d = await fetch(`https://maniteja66.pythonanywhere.com/api/${brand}`);
    const j = await d.json();
    setRes(j);
    setLoad(false);
  };

  const getColor = e => {
    let k = parseInt(e);
    if (k > 8) {
      k = k % 9;
      return k;
    } else return k;
  };

  {
    if (load) {
      return (
        <View style={styles.con}>
          <ActivityIndicator />
          <Text style={{fontFamily: 'sansbold', margin: 10}}>Loading..</Text>
        </View>
      );
    } else {
      let data = resp.map(d => {
        return (
          <View key={d.id}>
            <TouchableNativeFeedback
              onPress={() => {
                let name = d.name;
                let link = d.link;
                let config = d.config;
                let ver = d.version;
                navigation.navigate('Download', {
                  name: name,
                  link: link,
                  config: config,
                  ver: ver,
                });
              }}>
              <LinearGradient
                style={styles.lg}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                colors={color[getColor(d.id)]}>
                <Text
                  style={{
                    color: 'white',
                    fontFamily: 'sansbold',
                    fontSize: 20,
                  }}>
                  {d.name}
                </Text>
              </LinearGradient>
            </TouchableNativeFeedback>
          </View>
        );
      });
      return (
        <View style={styles.view}>
          <Text style={styles.text}>Select Your Model</Text>
          <View style={styles.line} />
          <ScrollView>{data}</ScrollView>
          <View />
        </View>
      );
    }
  }
};

const styles = {
  con: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
  },

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
    marginBottom: 15,
    borderRadius: 10,
    fontFamily: 'sansbold',
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

export default BrandView;
