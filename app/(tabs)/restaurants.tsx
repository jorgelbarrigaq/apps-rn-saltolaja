import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Star, MapPin, Clock, ChevronRight } from 'lucide-react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

const { width } = Dimensions.get('window');

const restaurants = [
  {
    id: 1,
    name: 'Restaurante del Río',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80',
    rating: 4.7,
    cuisine: 'Chilena',
    priceRange: '$$',
    location: 'Junto a los Saltos',
    openNow: true,
    distance: '0.5 km',
    description: 'Cocina tradicional chilena con vista al río',
  },
  {
    id: 2,
    name: 'Café de la Cascada',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80',
    rating: 4.5,
    cuisine: 'Café & Pastelería',
    priceRange: '$',
    location: 'Plaza Central',
    openNow: true,
    distance: '0.8 km',
    description: 'Café artesanal y pasteles caseros',
  },
  {
    id: 3,
    name: 'Asador El Mirador',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80',
    rating: 4.8,
    cuisine: 'Parrilla',
    priceRange: '$$$',
    location: 'Mirador Principal',
    openNow: false,
    distance: '1.2 km',
    description: 'Carnes a la parrilla con vista panorámica',
  },
];

export default function RestaurantsScreen() {
  const [selectedCuisine, setSelectedCuisine] = useState('Todos');
  const cuisines = ['Todos', 'Chilena', 'Parrilla', 'Café', 'Internacional'];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>Restaurantes</Text>
        <Text style={styles.subtitle}>Descubre la gastronomía local</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filtersContainer}>
        {cuisines.map((cuisine, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.filterChip,
              selectedCuisine === cuisine && styles.filterChipActive,
            ]}
            onPress={() => setSelectedCuisine(cuisine)}>
            <Text
              style={[
                styles.filterText,
                selectedCuisine === cuisine && styles.filterTextActive,
              ]}>
              {cuisine}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.restaurantsContainer}>
        {restaurants.map((restaurant, index) => (
          <Animated.View
            key={restaurant.id}
            entering={FadeInDown.delay(index * 200)}
            style={styles.restaurantCard}>
            <Image source={{ uri: restaurant.image }} style={styles.restaurantImage} />
            <View style={styles.cardContent}>
              <View style={styles.cardHeader}>
                <View>
                  <Text style={styles.restaurantName}>{restaurant.name}</Text>
                  <View style={styles.ratingContainer}>
                    <Star size={16} color="#FFB800" fill="#FFB800" />
                    <Text style={styles.rating}>{restaurant.rating}</Text>
                    <Text style={styles.cuisine}>{restaurant.cuisine}</Text>
                    <Text style={styles.priceRange}>{restaurant.priceRange}</Text>
                  </View>
                </View>
                <ChevronRight size={24} color="#64748B" />
              </View>

              <View style={styles.infoContainer}>
                <View style={styles.infoItem}>
                  <MapPin size={16} color="#64748B" />
                  <Text style={styles.infoText}>{restaurant.distance}</Text>
                </View>
                <View style={styles.infoItem}>
                  <Clock size={16} color="#64748B" />
                  <Text
                    style={[
                      styles.infoText,
                      { color: restaurant.openNow ? '#10B981' : '#EF4444' },
                    ]}>
                    {restaurant.openNow ? 'Abierto' : 'Cerrado'}
                  </Text>
                </View>
              </View>

              <Text style={styles.description}>{restaurant.description}</Text>
            </View>
          </Animated.View>
        ))}
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
  },
  filtersContainer: {
    padding: 24,
    gap: 12,
  },
  filterChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  filterChipActive: {
    backgroundColor: '#0EA5E9',
    borderColor: '#0EA5E9',
  },
  filterText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#64748B',
  },
  filterTextActive: {
    color: '#FFFFFF',
  },
  restaurantsContainer: {
    padding: 24,
    gap: 24,
  },
  restaurantCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  restaurantImage: {
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
    marginBottom: 12,
  },
  restaurantName: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: '#1E293B',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  rating: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#1E293B',
  },
  cuisine: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#64748B',
  },
  priceRange: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#64748B',
  },
  infoContainer: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 12,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  infoText: {
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
});