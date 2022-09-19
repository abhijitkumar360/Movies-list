import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import Header from './Header.js';
import {useNavigation} from '@react-navigation/native';
import {BACK, SEARCH, FOOD1, FOOD2, FOOD3, BACK1} from './media/index.js';
import {FlatList} from 'react-native';
import {MoviesApi} from './services/services';

export default function Movie() {
  const navigation = useNavigation();
  const [Data, setData] = useState('');
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    MoviesApi()
      .then(res => res.json())
      .then(result => {
        console.log(
          JSON.stringify(result.movies),
          '<==============================result',
        );
        setData(result.movies);
        setloading(false);
      });
  }, []);

  const actionItem = ({item}) => {
    const gen = item.genres.filter(actionfun);
    function actionfun(input) {
      return input == 'Action';
    }
    return (
      <View>
        {gen == 'Action' && (
          <View style={{margin: 10}}>
            <Image source={{uri: item.poster}} style={styles.image1} />
            <Text style={styles.text1}>{item.title}</Text>
          </View>
        )}
      </View>
    );
  };

  const crimeItem = ({item}) => {
    const gen = item.genres.filter(crimefun);
    function crimefun(input) {
      return input == 'Crime';
    }
    return (
      <View>
        {gen == 'Crime' && (
          <View style={{margin: 10}}>
            <Image source={{uri: item.poster}} style={styles.image1} />
            <Text style={styles.text1}>{item.title}</Text>
          </View>
        )}
      </View>
    );
  };

  const dramaItem = ({item}) => {
    const gen = item.genres.filter(dramafun);
    function dramafun(input) {
      return input == 'Drama';
    }
    return (
      <View>
        {gen == 'Drama' && (
          <View style={{margin: 10}}>
            <Image source={{uri: item.poster}} style={styles.image1} />
            <Text style={styles.text1}>{item.title}</Text>
          </View>
        )}
      </View>
    );
  };

  const animationItem = ({item}) => {
    const gen = item.genres.filter(animationfun);
    function animationfun(input) {
      return input == 'Animation';
    }
    return (
      <View>
        {gen == 'Animation' && (
          <View style={{margin: 10}}>
            <Image source={{uri: item.poster}} style={styles.image1} />
            <Text style={styles.text1}>{item.title}</Text>
          </View>
        )}
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      {!loading ? (
        <ScrollView>
          <View style={{marginHorizontal: 10}}>
            <Text style={{color: 'gray', fontSize: 15}}>Action</Text>
          </View>
          <FlatList
            data={Data}
            renderItem={actionItem}
            horizontal
            keyExtractor={(item, index) => item.id}
          />
          <View style={{marginHorizontal: 10}}>
            <Text style={{color: 'gray', fontSize: 15}}>Crime</Text>
          </View>
          <FlatList
            data={Data}
            renderItem={crimeItem}
            horizontal
            keyExtractor={(item, index) => item.id}
          />
          <View style={{marginHorizontal: 10}}>
            <Text style={{color: 'gray', fontSize: 15}}>Drama</Text>
          </View>
          <FlatList
            data={Data}
            renderItem={dramaItem}
            horizontal
            keyExtractor={(item, index) => item.id}
          />
          <View style={{marginHorizontal: 10}}>
            <Text style={{color: 'gray', fontSize: 15}}>Animation</Text>
          </View>
          <FlatList
            data={Data}
            renderItem={animationItem}
            horizontal
            keyExtractor={(item, index) => item.id}
          />
        </ScrollView>
      ) : (
        <View style={styles.loaderstyle}>
          <ActivityIndicator size={50} color={'black'} />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image1: {
    height: 150,
    width: 100,
  },
  text1: {
    color: 'white',
    width: 100,
    textAlign: 'center',
    backgroundColor: 'skyblue',
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
  },
  loaderstyle: {
    alignContent: 'center',
    justifyContent: 'center',
    margin: 30,
  },
});
