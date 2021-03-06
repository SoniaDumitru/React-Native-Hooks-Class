import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Map from '../components/Map';
import MapView from 'react-native-maps';
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';
import '../_mocklocation';

const TrackCreateScreen = () => {
  const [err, setError] = useState(null);

  const startWatching = async () => {
    try {
      const { granted } = await requestPermissionsAsync();
      await watchPositionAsync({
        accuracy: Accuracy.BestForNavigation,
        timeInterval: 1000, 
        distanceInterval: 10,
      }, (location) => {
        console.log(location)
      });
      if (!granted) {
        throw new Error('Location permission not granted');
      }
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2 style={{ fontSize: 48 }}>Create a Track</Text>
      <Map/>
      { err ? <Text>Please enable location services</Text> : null }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
