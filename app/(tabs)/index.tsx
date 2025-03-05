import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { MapPin, Star, Clock } from 'lucide-react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.8;

const featuredPlaces = [
  {
    id: 1,
    title: 'Saltos del Laja',
    image: 'https://images.unsplash.com/photo-1498855926480-d98e83099315?auto=format&fit=crop&q=80',
    rating: 4.8,
    location: 'Cabrero, Biobío',
    description: 'Impresionante cascada natural con múltiples caídas de agua',
  },
  {
    id: 2,
    title: 'Mirador Principal',
    image: 'https://images.unsplash.com/photo-1516638022313-53fa45a84c7f?auto=format&fit=crop&q=80',
    rating: 4.5,
    location: 'Saltos del Laja',
    description: 'Vista panorámica de las cascadas y el río Laja',
  },
  {
    id: 3,
    title: 'Sendero Ancestral',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80',
    rating: 4.6,
    location: 'Reserva Natural',
    description: 'Ruta de trekking con vistas espectaculares',
  },
];

const upcomingEvents = [
  {
    id: 1,
    title: 'Feria Gastronómica',
    date: '15 Mar',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    title: 'Festival de Artesanía',
    date: '22 Mar',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80',
  },
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Bienvenido a</Text>
        <Text style={styles.title}>Los Saltos del Laja</Text>
        <Text style={styles.subtitle}>Descubre la magia de la naturaleza</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Lugares Destacados</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.featuredContainer}
          decelerationRate="fast"
          snapToInterval={CARD_WIDTH + 20}>
          {featuredPlaces.map((place, index) => (
            <Animated.View
              key={place.id}
              entering={FadeInDown.delay(index * 200)}
              style={styles.featuredCard}>
              <Image source={{ uri: place.image }} style={styles.cardImage} />
              <View style={styles.cardContent}>
                <View style={styles.cardHeader}>
                  <Text style={styles.cardTitle}>{place.title}</Text>
                  <View style={styles.ratingContainer}>
                    <Star size={16} color="#FFB800" fill="#FFB800" />
                    <Text style={styles.rating}>{place.rating}</Text>
                  </View>
                </View>
                <View style={styles.locationContainer}>
                  <MapPin size={16} color="#64748B" />
                  <Text style={styles.locationText}>{place.location}</Text>
                </View>
                <Text style={styles.description}>{place.description}</Text>
              </View>
            </Animated.View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Próximos Eventos</Text>
        <View style={styles.eventsContainer}>
          {upcomingEvents.map((event, index) => (
            <Animated.View
              key={event.id}
              entering={FadeInDown.delay(index * 200)}
              style={styles.eventCard}>
              <Image source={{ uri: event.image }} style={styles.eventImage} />
              <View style={styles.eventContent}>
                <Text style={styles.eventTitle}>{event.title}</Text>
                <View style={styles.dateContainer}>
                  <Clock size={16} color="#64748B" />
                  <Text style={styles.dateText}>{event.date}</Text>
                </View>
              </View>
            </Animated.View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    padding: 24,
    paddingTop: 60,
    backgroundColor: '#0EA5E9',
  },
  greeting: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: 'rgba(255,255,255,0.9)',
    marginBottom: 4,
  },
  title: {
    fontFamily: 'Playfair-Bold',
    fontSize: 32,
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: 'rgba(255,255,255,0.9)',
    marginBottom: 16,
  },
  section: {
    padding: 24,
  },
  sectionTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: '#1E293B',
    marginBottom: 16,
  },
  featuredContainer: {
    paddingRight: 24,
    gap: 20,
  },
  featuredCard: {
    width: CARD_WIDTH,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  cardContent: {
    padding: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: '#1E293B',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  rating: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#1E293B',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 8,
  },
  locationText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#64748B',
  },
  description: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#64748B',
    lineHeight: 20,
  },
  eventsContainer: {
    gap: 16,
  },
  eventCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  eventImage: {
    width: 100,
    height: 100,
  },
  eventContent: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  eventTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#1E293B',
    marginBottom: 8,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  dateText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#64748B',
  },
});