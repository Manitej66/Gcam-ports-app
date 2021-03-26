import React, {Component, useState, useEffect} from 'react';
import {
  Button,
  View,
  Text,
  Linking,
  StyleSheet,
  Alert,
  TouchableNativeFeedback,
  PermissionsAndroid,
} from 'react-native';
import Modal, {
  ModalTitle,
  ModalContent,
  ModalFooter,
  ModalButton,
  SlideAnimation,
  ScaleAnimation,
} from 'react-native-modals';
import RNFetchBlob from 'rn-fetch-blob';
import LinearGradient from 'react-native-linear-gradient';
import FileViewer from 'react-native-file-viewer';
import {ScrollView} from 'react-native-gesture-handler';

const Download = ({route, navigation}) => {
  const {name} = route.params;
  const {link} = route.params;
  const {config} = route.params;
  const {ver} = route.params;
  const [scaleAnimationModal, s] = useState(false);
  const android = RNFetchBlob.android;

  const color = [
    ['#ff5858', '#f09819'],
    ['#88d3ce', '#6e45e2'],
    ['#0ba360', '#3cba92'],
  ];

  const loadInBrowser = () => {
    Linking.openURL(
      'https://www.celsoazevedo.com/files/android/google-camera/f/settings09',
    ).catch(err => console.error("Couldn't load page", err));
  };

  const per = async () => {
    if (!g) {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          setG(true);
        } else {
          Alert.alert('You Cannot Download Any File!');
          navigation.navigate('BrandView');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };
  useEffect(() => {
    per();
  });

  const al = () => {
    return (
      <Modal
        onTouchOutside={() => {
          s(false);
        }}
        width={0.9}
        visible={true}
        onSwipeOut={() => {
          s(false);
        }}
        modalAnimation={new ScaleAnimation()}
        onHardwareBackPress={() => {
          console.log('onHardwareBackPress');
          s(false);
          return true;
        }}
        modalTitle={
          <ModalTitle title="Modal - Scale Animation" hasTitleBar={false} />
        }
        actions={[
          <ModalButton
            text="DISMISS"
            onPress={() => {
              s(false);
            }}
            key="button-1"
          />,
        ]}>
        <ModalContent>
          <Button
            title="Show Modal - Default Animation"
            onPress={() => {
              s(true);
            }}
          />
        </ModalContent>
      </Modal>
    );
  };

  const downloadImage = v => {
    var date = new Date();
    var image_URL = v;
    var ext = getExtention(image_URL);
    ext = '.' + ext[0];
    const {config, fs} = RNFetchBlob;
    let PictureDir = fs.dirs.DownloadDir;

    if (RNFetchBlob.fs.exists(fs.dirs.DownloadDir + '/Gcam/Configs7')) {
      PictureDir = fs.dirs.DownloadDir + '/Gcam/Configs7/';
    } else {
      RNFetchBlob.fs.mkdir('Gcam/Configs7').then(() => {
        console.log('done');
      });
      PictureDir = fs.dirs.DownloadDir + '/Gcam/Configs7/';
    }

    let options = {
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path: PictureDir + `${name}` + ext,
        description: 'Downloading...',
      },
    };

    config(options)
      .fetch('GET', image_URL)
      .then(res => {
        Alert.alert(
          'Gcam Download Success!',
          'Go to Download/Gcam/Configs7/ to find the APK',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'open', onPress: () => open()},
          ],
          {cancelable: false},
        );
      });
  };

  const open = () => {
    const path = RNFetchBlob.fs.dirs.DownloadDir + '/Gcam/Configs7/';
    android.actionViewIntent(path, '*/*');
  };

  const getExtention = filename => {
    return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
  };

  return (
    <View style={styles.MainContainer}>
      <Text style={styles.text2}>Gcam Info</Text>
      <Text
        style={{
          fontFamily: 'sansbold',
          color: '#fff',
          fontSize: 20,
          textAlign: 'center',
          backgroundColor: '#fc5185',
          padding: 10,
          margin: 10,
          borderRadius: 10,
        }}>
        {name}
      </Text>
      <Text
        style={{
          fontFamily: 'sansbold',
          color: '#fff',
          fontSize: 20,
          textAlign: 'center',
          backgroundColor: '#0e153a',
          padding: 10,
          margin: 10,
          borderRadius: 10,
        }}>
        {ver}
      </Text>
      <ScrollView style={{padding: 0, margin: 0}}>
        <TouchableNativeFeedback
          onPress={() => {
            downloadImage(link);
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
                textAlign: 'center',
              }}>
              Download APK
            </Text>
          </LinearGradient>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          onPress={() => {
            downloadImage(config);
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
                textAlign: 'center',
              }}>
              Download CONFIG
            </Text>
          </LinearGradient>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          onPress={() => {
            open();
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
                textAlign: 'center',
              }}>
              My Downloads
            </Text>
          </LinearGradient>
        </TouchableNativeFeedback>
        <Text
          onPress={() => {
            loadInBrowser();
          }}
          style={{
            fontFamily: 'sansbold',
            fontSize: 20,
            color: 'black',
            margin: 20,
          }}>
          How to use config?
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text2: {
    color: 'black',
    fontFamily: 'sansbold',
    fontSize: 20,
    padding: 20,
    textAlign: 'center',
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
    width: '80%',
    marginTop: 30,
    borderRadius: 10,
    fontFamily: 'sansbold',
  },
  button: {
    width: '80%',
    paddingTop: 3,
    textAlign: 'center',
    paddingBottom: 3,
    backgroundColor: '#2E7D32',
    borderRadius: 7,
    margin: 10,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    padding: 5,
  },
});
export default Download;
