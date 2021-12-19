import React from 'react';
import {Text, Image, ImageBackground, View, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.card}>
        <ImageBackground
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png',
          }}
          style={styles.image}>
          <View style={styles.cardInner}>
            <Text style={styles.name}>Elon Muskk</Text>
            <Text style={styles.bio}>
              A dude with a rocket is looking for a gal with fuel
            </Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  card: {
    width: '95%',
    height: '70%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.7,
    shadowRadius: 10.32,
    elevation: 16,
  },
  cardInner: {
    padding: 10
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  name: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 18,
    color: 'white',
    lineHeight: 25,
  },
});

export default App;
