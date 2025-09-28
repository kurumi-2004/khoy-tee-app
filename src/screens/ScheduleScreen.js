import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const ScheduleScreen = () => {
  const navigation = useNavigation();

  const goToAssetsScreen = () => {
    navigation.navigate('AssetsStack');
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Lịch ca làm việc</Text>
          <TouchableOpacity style={styles.calendarButton}>
            <Ionicons name="calendar" size={24} color="#00BCD4" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.scheduleCard}>
          <View style={styles.scheduleHeader}>
            <Text style={styles.scheduleDate}>Hôm nay, 15/06/2023</Text>
            <View style={styles.scheduleStatus}>
              <View style={styles.statusDot} />
              <Text style={styles.statusText}>Đang làm</Text>
            </View>
          </View>
          <View style={styles.scheduleTime}>
            <Ionicons name="time-outline" size={20} color="#555" />
            <Text style={styles.timeText}>08:00 - 16:00</Text>
          </View>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.importButton} onPress={goToAssetsScreen}>
            <Ionicons name="cube-outline" size={20} color="#fff" />
            <Text style={styles.importButtonText}>Nhập hàng</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 40,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  calendarButton: {
    padding: 8,
  },
  scheduleCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  scheduleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  scheduleDate: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  scheduleStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4CAF50',
    marginRight: 6,
  },
  statusText: {
    fontSize: 12,
    color: '#4CAF50',
    fontWeight: '500',
  },
  scheduleTime: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  timeText: {
    fontSize: 15,
    color: '#555',
    marginLeft: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginBottom: 16,
  },
  importButton: {
    backgroundColor: '#00BCD4',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 8,
  },
  importButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default ScheduleScreen;