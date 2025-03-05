import { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { router } from 'expo-router';
import Animated, { 
  useAnimatedStyle, 
  withSpring, 
  withSequence,
  withDelay,
  useSharedValue
} from 'react-native-reanimated';

export default function SplashScreen() {
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.8);

  useEffect(() => {
    opacity.value = withSequence(
      withDelay(300, withSpring(1)),
      withDelay(2000, withSpring(0))
    );
    scale.value = withSequence(
      withDelay(300, withSpring(1)),
      withDelay(2000, withSpring(0.8))
    );

    const timeout = setTimeout(() => {
      router.replace('/(auth)/login');
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1498855926480-d98e83099315?auto=format&fit=crop&q=80' }}
        style={styles.backgroundImage}
      />
      <Animated.View style={[styles.logoContainer, animatedStyle]}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1516638022313-53fa45a84c7f?auto=format&fit=crop&q=80' }}
          style={styles.logo}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    opacity: 0.7,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
});