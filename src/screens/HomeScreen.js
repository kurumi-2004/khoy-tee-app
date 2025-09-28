import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="person-circle-outline" size={28} color="#fff" />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.greeting}>Chào buổi sáng, Hoàng Minh</Text>
          <View style={styles.roleContainer}>
            <Text style={styles.role}>Nhân viên</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.notificationButton}>
          <Ionicons name="notifications-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Shift Information */}
      <View style={styles.shiftCard}>
        <Text style={styles.shiftLabel}>Ca hôm nay</Text>
        <View style={styles.shiftTimeContainer}>
          <Text style={styles.shiftTime}>08:00 - 16:00</Text>
          <View style={styles.shiftStatusContainer}>
            <Ionicons name="time-outline" size={16} color="#4CAF50" />
            <Text style={styles.shiftStatus}>Yêu cầu nhanh</Text>
          </View>
        </View>
        <View style={styles.shiftInfoRow}>
          <View style={styles.shiftInfoItem}>
            <Ionicons name="calendar-outline" size={18} color="#666" />
            <Text style={styles.shiftInfoText}>Hôm nay (Thứ 3 - 03/06/2025)</Text>
          </View>
          <TouchableOpacity style={styles.viewScheduleButton}>
            <Text style={styles.viewScheduleText}>Xem lịch sử</Text>
            <Ionicons name="chevron-forward" size={16} color="#00BCD4" />
          </TouchableOpacity>
        </View>
        <View style={styles.shiftActions}>
          <TouchableOpacity style={styles.endShiftButton}>
            <Text style={styles.endShiftText}>Kết thúc ca</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Second Shift Card */}
      <View style={styles.shiftCard}>
        <Text style={styles.shiftTime}>08:00 - 16:00</Text>
        <Text style={styles.shiftInfoText}>Ca sắp tới</Text>
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActionsContainer}>
        <View style={styles.quickActionsRow}>
          <TouchableOpacity style={styles.quickActionButton}>
            <Ionicons name="cash-outline" size={24} color="#00BCD4" />
            <Text style={styles.quickActionText}>Lương</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickActionButton}>
            <Ionicons name="stats-chart-outline" size={24} color="#00BCD4" />
            <Text style={styles.quickActionText}>KPI</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickActionButton}>
            <Ionicons name="calendar-outline" size={24} color="#00BCD4" />
            <Text style={styles.quickActionText}>Đặt lịch</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.quickActionsRow}>
          <TouchableOpacity style={styles.quickActionButton}>
            <Ionicons name="document-text-outline" size={24} color="#00BCD4" />
            <Text style={styles.quickActionText}>Báo cáo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickActionButton}>
            <Ionicons name="bulb-outline" size={24} color="#00BCD4" />
            <Text style={styles.quickActionText}>Trung tâm cải tiến</Text>
          </TouchableOpacity>
          <TouchableOpacity 
             style={styles.quickActionButton}
             onPress={() => {
               const { navigate } = navigation;
               navigate('AssetsStack');
             }}
           >
            <Ionicons name="cube-outline" size={24} color="#00BCD4" />
            <Text style={styles.quickActionText}>Nhập hàng</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Mood Tracker */}
      <View style={styles.moodTrackerContainer}>
        <Text style={styles.moodQuestion}>Bạn cảm thấy hôm nay thế nào</Text>
        <View style={styles.moodOptions}>
          <TouchableOpacity style={styles.moodOption}>
            <Text style={styles.moodEmoji}>😡</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.moodOption}>
            <Text style={styles.moodEmoji}>😐</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.moodOption}>
            <Text style={styles.moodEmoji}>🙂</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.moodOption}>
            <Text style={styles.moodEmoji}>😊</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.moodOption}>
            <Text style={styles.moodEmoji}>😍</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Tasks */}
      <View style={styles.tasksContainer}>
        <View style={styles.tasksHeader}>
          <Text style={styles.tasksTitle}>Nhiệm vụ hôm nay</Text>
          <TouchableOpacity>
            <Text style={styles.addTaskText}>+ Thêm nhiệm vụ</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tasksList}>
          <View style={styles.taskItem}>
            <TouchableOpacity style={styles.taskCheckbox}>
              <Ionicons name="square-outline" size={20} color="#00BCD4" />
            </TouchableOpacity>
            <Text style={styles.taskText}>Kiểm kê kho cuối ngày</Text>
          </View>
          <View style={styles.taskItem}>
            <TouchableOpacity style={styles.taskCheckbox}>
              <Ionicons name="square-outline" size={20} color="#00BCD4" />
            </TouchableOpacity>
            <Text style={styles.taskText}>Bàn giao công việc cho ca sau</Text>
          </View>
          <View style={styles.taskItem}>
            <TouchableOpacity style={styles.taskCheckbox}>
              <Ionicons name="square-outline" size={20} color="#00BCD4" />
            </TouchableOpacity>
            <Text style={styles.taskText}>Ghi nhận KPI khách hàng phản hồi</Text>
          </View>
          <TouchableOpacity style={styles.viewMoreButton}>
            <Text style={styles.viewMoreText}>Xem thêm</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Statistics */}
      <View style={styles.statsContainer}>
        <Text style={styles.statsTitle}>Thống kê</Text>
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Ionicons name="calendar" size={24} color="#00BCD4" />
            <Text style={styles.statValue}>20</Text>
            <Text style={styles.statLabel}>Số ca đã làm</Text>
          </View>
          <View style={styles.statItem}>
            <Ionicons name="checkmark-circle" size={24} color="#4CAF50" />
            <Text style={styles.statValue}>20</Text>
            <Text style={styles.statLabel}>Công việc hoàn thành</Text>
          </View>
        </View>
        <View style={styles.accumulatedContainer}>
          <View style={styles.accumulatedHeader}>
            <Ionicons name="wallet-outline" size={24} color="#FFC107" />
            <Text style={styles.accumulatedValue}>2,760,000</Text>
          </View>
          <Text style={styles.accumulatedLabel}>Lượng tích lũy</Text>
          <TouchableOpacity style={styles.viewMoreLink}>
            <Text style={styles.viewMoreLinkText}>Xem tổng quan</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 16,
    backgroundColor: '#00BCD4',
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
  },
  greeting: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  roleContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 12,
    marginTop: 4,
  },
  role: {
    fontSize: 12,
    color: '#fff',
  },
  notificationButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shiftCard: {
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  shiftLabel: {
    fontSize: 14,
    color: '#666',
  },
  shiftTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  shiftTime: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  shiftStatusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
  },
  shiftStatus: {
    color: '#4CAF50',
    marginLeft: 4,
    fontWeight: '500',
    fontSize: 12,
  },
  shiftInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  shiftInfoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shiftInfoText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 8,
  },
  viewScheduleButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewScheduleText: {
    fontSize: 14,
    color: '#00BCD4',
    fontWeight: '500',
  },
  shiftActions: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 16,
  },
  endShiftButton: {
    backgroundColor: '#FF9800',
    borderRadius: 4,
    paddingVertical: 10,
    alignItems: 'center',
  },
  endShiftText: {
    color: '#fff',
    fontWeight: '500',
  },
  quickActionsContainer: {
    backgroundColor: '#fff',
    margin: 16,
    marginTop: 0,
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  quickActionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  quickActionButton: {
    alignItems: 'center',
    width: '30%',
  },
  quickActionText: {
    marginTop: 8,
    fontSize: 12,
    textAlign: 'center',
  },
  moodTrackerContainer: {
    backgroundColor: '#fff',
    margin: 16,
    marginTop: 0,
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  moodQuestion: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 16,
  },
  moodOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  moodOption: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  moodEmoji: {
    fontSize: 24,
  },
  tasksContainer: {
    backgroundColor: '#fff',
    margin: 16,
    marginTop: 0,
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  tasksHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  tasksTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  addTaskText: {
    color: '#00BCD4',
    fontWeight: '500',
  },
  tasksList: {},
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  taskCheckbox: {
    marginRight: 12,
  },
  taskText: {
    fontSize: 14,
  },
  viewMoreButton: {
    alignItems: 'center',
    paddingVertical: 12,
    marginTop: 8,
  },
  viewMoreText: {
    color: '#00BCD4',
    fontWeight: '500',
  },
  statsContainer: {
    backgroundColor: '#fff',
    margin: 16,
    marginTop: 0,
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 80,
  },
  statsTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 16,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  statItem: {
    alignItems: 'center',
    width: '48%',
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 8,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  accumulatedContainer: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  accumulatedHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  accumulatedValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  accumulatedLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  viewMoreLink: {
    marginTop: 8,
  },
  viewMoreLinkText: {
    color: '#00BCD4',
    fontWeight: '500',
  },
});

export default HomeScreen;
          <TouchableOpacity style={styles.quickActionButton}>
            <Ionicons name="stats-chart-outline" size={24} color="#00BCD4" />
            <Text style={styles.quickActionText}>KPI</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickActionButton}>
            <Ionicons name="calendar-outline" size={24} color="#00BCD4" />
            <Text style={styles.quickActionText}>Đặt lịch</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.quickActionsRow}>
          <TouchableOpacity style={styles.quickActionButton}>
            <Ionicons name="document-text-outline" size={24} color="#00BCD4" />
            <Text style={styles.quickActionText}>Báo cáo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickActionButton}>
            <Ionicons name="bulb-outline" size={24} color="#00BCD4" />
            <Text style={styles.quickActionText}>Trung tâm cải tiến</Text>
          </TouchableOpacity>
          <TouchableOpacity 
             style={styles.quickActionButton}
             onPress={() => {
               const { navigate } = navigation;
               navigate('AssetsStack');
             }}
           >
            <Ionicons name="cube-outline" size={24} color="#00BCD4" />
            <Text style={styles.quickActionText}>Nhập hàng</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Mood Tracker */}
      <View style={styles.moodTrackerContainer}>
        <Text style={styles.moodQuestion}>Bạn cảm thấy hôm nay thế nào</Text>
        <View style={styles.moodOptions}>
          <TouchableOpacity style={styles.moodOption}>
            <Text style={styles.moodEmoji}>😡</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.moodOption}>
            <Text style={styles.moodEmoji}>😐</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.moodOption}>
            <Text style={styles.moodEmoji}>🙂</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.moodOption}>
            <Text style={styles.moodEmoji}>😍</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Tasks */}
      <View style={styles.tasksContainer}>
        <View style={styles.tasksHeader}>
          <Text style={styles.tasksTitle}>Nhiệm vụ hôm nay</Text>
          <TouchableOpacity>
            <Ionicons name="add-circle-outline" size={24} color="#00BCD4" />
          </TouchableOpacity>
        </View>
        <View style={styles.tasksList}>
          <View style={styles.taskItem}>
            <TouchableOpacity style={styles.taskCheckbox}>
              <Ionicons name="square-outline" size={20} color="#00BCD4" />
            </TouchableOpacity>
            <Text style={styles.taskText}>Kiểm kê kho cuối ngày</Text>
          </View>
          <View style={styles.taskItem}>
            <TouchableOpacity style={styles.taskCheckbox}>
              <Ionicons name="square-outline" size={20} color="#00BCD4" />
            </TouchableOpacity>
            <Text style={styles.taskText}>Bàn giao công việc cho ca sau</Text>
          </View>
          <View style={styles.taskItem}>
            <TouchableOpacity style={styles.taskCheckbox}>
              <Ionicons name="square-outline" size={20} color="#00BCD4" />
            </TouchableOpacity>
            <Text style={styles.taskText}>Ghi nhận KPI khách hàng phản hồi</Text>
          </View>
        </View>
      </View>

      {/* Statistics */}
      <View style={styles.statsContainer}>
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Ionicons name="calendar" size={24} color="#00BCD4" />
            <Text style={styles.statValue}>20</Text>
            <Text style={styles.statLabel}>Số ca đã làm</Text>
          </View>
          <View style={styles.statItem}>
            <Ionicons name="checkmark-circle" size={24} color="#4CAF50" />
            <Text style={styles.statValue}>20</Text>
            <Text style={styles.statLabel}>Công việc hoàn thành</Text>
          </View>
        </View>
        <View style={styles.accumulatedContainer}>
          <View style={styles.accumulatedHeader}>
            <Ionicons name="wallet-outline" size={24} color="#FFC107" />
            <Text style={styles.accumulatedValue}>2,760,000</Text>
          </View>
          <Text style={styles.accumulatedLabel}>Lượng tích lũy</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 16,
    backgroundColor: '#00BCD4',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationButton: {
    marginRight: 12,
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  role: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 4,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shiftCard: {
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  shiftInfo: {
    marginBottom: 16,
  },
  shiftLabel: {
    fontSize: 14,
    color: '#666',
  },
  shiftTime: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  shiftStatusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shiftStatus: {
    color: '#4CAF50',
    marginLeft: 4,
    fontWeight: '500',
  },
  shiftActions: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 16,
  },
  endShiftButton: {
    backgroundColor: '#FF9800',
    borderRadius: 4,
    paddingVertical: 10,
    alignItems: 'center',
  },
  endShiftText: {
    color: '#fff',
    fontWeight: '500',
  },
  quickActionsContainer: {
    backgroundColor: '#fff',
    margin: 16,
    marginTop: 0,
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  quickActionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  quickActionButton: {
    alignItems: 'center',
    width: '30%',
  },
  quickActionText: {
    marginTop: 8,
    fontSize: 12,
    textAlign: 'center',
  },
  moodTrackerContainer: {
    backgroundColor: '#fff',
    margin: 16,
    marginTop: 0,
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  moodQuestion: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 16,
  },
  moodOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  moodOption: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  moodEmoji: {
    fontSize: 24,
  },
  tasksContainer: {
    backgroundColor: '#fff',
    margin: 16,
    marginTop: 0,
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  tasksHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  tasksTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  tasksList: {},
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  taskCheckbox: {
    marginRight: 12,
  },
  taskText: {
    fontSize: 14,
  },
  statsContainer: {
    backgroundColor: '#fff',
    margin: 16,
    marginTop: 0,
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 80,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  statItem: {
    alignItems: 'center',
    width: '48%',
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 8,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  accumulatedContainer: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  accumulatedHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  accumulatedValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  accumulatedLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
});

export default HomeScreen;