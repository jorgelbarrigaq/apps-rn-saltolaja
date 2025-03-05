import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const INITIAL_REGION = {
  latitude: -37.2182,
  longitude: -72.3847,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

const POINTS_OF_INTEREST = [
  {
    id: 1,
    title: 'Saltos del Laja',
    coordinate: {
      latitude: -37.2182,
      longitude: -72.3847,
    },
  },
  {
    id: 2,
    title: 'Mirador Principal',
    coordinate: {
      latitude: -37.2185,
      longitude: -72.3842,
    },
  },
];

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={INITIAL_REGION}
        showsUserLocation
        showsMyLocationButton>
        {POINTS_OF_INTEREST.map((poi) => (
          <Marker
            key={poi.id}
            coordinate={poi.coordinate}
            title={poi.title}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});