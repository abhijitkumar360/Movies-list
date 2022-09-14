import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import {MENU, SEARCH} from './media/index.js';
export default function Header() {
  // const {onBackPressed, title, onSearchPressed} = props;
  return (
    <View style={styles.back}>
      <View style={{alignSelf: 'center', justifyContent: 'center',}}>
        <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white'}}>
          FS MOVIES
        </Text>
      </View>
      <View style={{alignSelf: 'center', justifyContent: 'space-between', flexDirection:'row',}}>
        <View
          // onPress={() => onSearchPressed()}
          style={{height: 30, width: 30,margin:5}}>
          <Image source={SEARCH} style={styles.image1} />
        </View>
        <View
          // onPress={() => onSearchPressed()}
          style={{height: 30, width: 30, margin:5}}
          >
          <Image source={MENU} style={styles.image1} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  back: {
    flexDirection: 'row',
    // paddingHorizontal: 20,
    justifyContent:"space-between",
    padding: 15,
    backgroundColor: 'blue',
    // alignSelf: 'center',
    // alignItems:'center'
  },
  image1: {
    height: 28,
    width: 28,
    resizeMode: 'stretch',
    tintColor: 'white',
    // transform: [{rotate: '180deg'}],
  },
  text1: {
    width: '90%',
    textAlign: 'center',
    // justifyContent: 'center',
    // backgroundColor:'red',
    // alignSelf:"center",
    fontSize: 20,
    color: '#fff',
  },
});
