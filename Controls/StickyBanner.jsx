import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from '../assets/StyleSheet';
const StickyBanner = () => {
  return (
    <View style={styles.bannerContainer}>
      <View style={styles.bannericonContainer}>
        <MaterialIcons name="info" style={styles.bannerIcon} />
      </View>
      <Text style={styles.bannerText}>
        8888 -  Welcome to the App! Check out the latest updates.
      </Text>
    </View>
  );
};

export default StickyBanner;
