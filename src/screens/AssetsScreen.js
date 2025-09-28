import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, Image, Modal, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { PieChart } from 'react-native-chart-kit';

const AssetsScreen = ({ route }) => {
  const [activeTab, setActiveTab] = useState('import');
  const [selectedMonth, setSelectedMonth] = useState('Tháng 04/2025');
  const [showAddMenu, setShowAddMenu] = useState(false);
  
  // Xử lý tham số từ navigation
  useEffect(() => {
    if (route.params?.activeTab) {
      setActiveTab(route.params.activeTab);
    }
  }, [route.params]);

  const assetStatusData = [
    { name: 'Bình thường', count: 19, color: '#00BCD4' },
    { name: 'Bảo trì', count: 3, color: '#FF9800' },
    { name: 'Hư hỏng', count: 2, color: '#9C27B0' },
    { name: 'Thất lạc', count: 1, color: '#F44336' },
  ];

  const chartData = assetStatusData.map(item => ({
    name: item.name,
    count: item.count,
    color: item.color,
    legendFontColor: '#7F7F7F',
    legendFontSize: 12,
  }));

  const assetsList = [
    {
      id: 'A001',
      name: 'Máy POS',
      serial: 'SN-POS-2024-001',
      value: 3000000,
      status: 'Bảo trì',
      allocation: '2/3',
    },
    {
      id: 'A002',
      name: 'Máy POS',
      serial: 'SN-POS-2024-001',
      value: 3000000,
      status: 'Bình thường',
      allocation: '2/3',
    },
    {
      id: 'A007',
      name: 'Máy quét mã vạch',
      serial: 'SN-SC-2024-045',
      value: 800000,
      status: 'Bình thường',
      allocation: '2/3',
    },
  ];

  const getStatusColors = (status) => {
    switch(status) {
      case 'Bình thường':
        return { bg: '#E0F7FA', text: '#00BCD4' };
      case 'Bảo trì':
        return { bg: '#FFF3E0', text: '#FF9800' };
      default:
        return { bg: '#E0F7FA', text: '#00BCD4' };
    }
  };

  const renderAssetItem = ({ item }) => {
    const statusColors = getStatusColors(item.status);
    return (
      <View style={styles.assetItem}>
        <View style={styles.assetIconContainer}>
          <Ionicons name="cube" size={32} color="#666" />
        </View>
        <View style={styles.assetInfo}>
          <Text style={styles.assetName}>{item.name}</Text>
          <Text style={styles.assetId}>ID: {item.id} • SN: {item.serial}</Text>
          <Text style={styles.assetValue}>{item.value.toLocaleString()} đ</Text>
          <View style={styles.assetFooter}>
            <View style={[
              styles.statusBadge, 
              { backgroundColor: statusColors.bg }
            ]}>
              <Text style={[
                styles.statusText, 
                { color: statusColors.text }
              ]}>
                {item.status}
              </Text>
            </View>
            <Text style={styles.allocationText}>Đã cấp phát: {item.allocation}</Text>
          </View>
        </View>
      </View>
    );
  };

  const AddMenu = () => (
    <Modal
      transparent={true}
      visible={showAddMenu}
      animationType="fade"
      onRequestClose={() => setShowAddMenu(false)}
    >
      <TouchableOpacity 
        style={styles.modalOverlay} 
        activeOpacity={1} 
        onPress={() => setShowAddMenu(false)}
      >
        <View style={styles.addMenuContainer}>
          <TouchableOpacity style={styles.menuItem}>
            <MaterialIcons name="assignment" size={20} color="#666" />
            <Text style={styles.menuItemText}>Tạo cấp phát</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => {
              setActiveTab('import');
              setShowAddMenu(false);
            }}
          >
            <MaterialIcons name="input" size={20} color="#666" />
            <Text style={styles.menuItemText}>Nhập hàng hóa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <MaterialIcons name="add-box" size={20} color="#666" />
            <Text style={styles.menuItemText}>Thêm tài sản cố định</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <MaterialIcons name="exit-to-app" size={20} color="#666" />
            <Text style={styles.menuItemText}>Xuất hàng</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );

  return (
    <View style={styles.container}>
      {/* Add Menu Modal */}
      <AddMenu />
      
      <FlatList
        data={assetsList}
        renderItem={renderAssetItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.contentContainer}
        ListHeaderComponent={
          <>
            {/* Search Bar */}
            <View style={styles.searchContainer}>
              <View style={styles.searchBar}>
                <Ionicons name="search" size={20} color="#999" />
                <TextInput
                  style={styles.searchInput}
                  placeholder="Tìm kiếm"
                  placeholderTextColor="#999"
                />
              </View>
              <View style={styles.filterButtons}>
                <TouchableOpacity style={styles.filterButton}>
                  <Ionicons name="options-outline" size={20} color="#666" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterButton}>
                  <Ionicons name="filter" size={20} color="#666" />
                </TouchableOpacity>
              </View>
            </View>

            {/* Statistics */}
            <View style={styles.statsContainer}>
              <View style={styles.statsHeader}>
                <Text style={styles.statsTitle}>Thống kê tài sản</Text>
                <TouchableOpacity style={styles.monthSelector}>
                  <Text style={styles.monthText}>Tháng 04/2023</Text>
                  <Ionicons name="chevron-down" size={16} color="#333" />
                </TouchableOpacity>
              </View>

              <View style={styles.statsCards}>
                <View style={[styles.statsCard, styles.totalAssetsCard]}>
                  <View style={styles.statsCardContent}>
                    <Text style={styles.statsCardTitle}>Tổng số tài sản</Text>
                    <Text style={styles.statsCardValue}>25</Text>
                  </View>
                </View>
                <View style={[styles.statsCard, styles.totalValueCard]}>
                  <View style={styles.statsCardContent}>
                    <Text style={styles.statsCardTitle}>Tổng giá trị</Text>
                    <Text style={styles.statsCardValue}>22.540.000 đ</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Asset Import/Export Info */}
            <TouchableOpacity style={styles.importExportContainer}>
              <View style={styles.importExportContent}>
                <View style={styles.importExportIcon}>
                  <Ionicons name="information-circle-outline" size={24} color="#00BCD4" />
                </View>
                <Text style={styles.importExportText}>Xem thông kê nhập xuất hàng</Text>
              </View>
            </TouchableOpacity>
            
            {/* Asset Status Chart */}
            <View style={styles.chartContainer}>
              <View style={styles.chartContent}>
                <View style={styles.chartWrapper}>
                  <PieChart
                    data={chartData}
                    width={150}
                    height={150}
                    chartConfig={{
                      backgroundColor: '#ffffff',
                      backgroundGradientFrom: '#ffffff',
                      backgroundGradientTo: '#ffffff',
                      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    }}
                    accessor="count"
                    backgroundColor="transparent"
                    paddingLeft="0"
                    absolute
                    hasLegend={false}
                  />
                </View>
                <View style={styles.legendContainer}>
                  {assetStatusData.map((item, index) => (
                    <View key={index} style={styles.legendItem}>
                      <View style={[styles.legendColor, { backgroundColor: item.color }]} />
                      <Text style={styles.legendText}>
                        <Text style={styles.legendName}>{item.name}</Text> {item.count}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>

            {/* Tabs */}
            <View style={styles.tabsContainer}>
              <TouchableOpacity
                style={[styles.tab, activeTab === 'import' && styles.activeTab]}
                onPress={() => setActiveTab('import')}
              >
                <Text style={[styles.tabText, activeTab === 'import' && styles.activeTabText]}>
                  Hàng mới nhập
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.tab, activeTab === 'export' && styles.activeTab]}
                onPress={() => setActiveTab('export')}
              >
                <Text style={[styles.tabText, activeTab === 'export' && styles.activeTabText]}>
                  Hàng mới xuất
                </Text>
              </TouchableOpacity>
            </View>

            {/* Assets List Title */}
            <View style={styles.listContainer}>
              <Text style={styles.listTitle}>Danh sách tài sản</Text>
            </View>
          </>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  contentContainer: {
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 16,
    backgroundColor: '#fff',
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerRightButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scanButton: {
    padding: 4,
    marginRight: 8,
  },
  addButton: {
    padding: 4,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  addMenuContainer: {
    position: 'absolute',
    top: 90,
    right: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 200,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuItemText: {
    marginLeft: 12,
    fontSize: 14,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#333',
  },
  filterButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterButton: {
    padding: 8,
    marginLeft: 4,
  },
  statsContainer: {
    backgroundColor: '#fff',
    marginTop: 12,
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  statsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  statsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  monthSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 16,
  },
  monthText: {
    fontSize: 14,
    color: '#333',
    marginRight: 4,
  },
  statsCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statsCard: {
    width: '48%',
    borderRadius: 12,
    overflow: 'hidden',
  },
  statsCardContent: {
    padding: 16,
    alignItems: 'center',
  },
  totalAssetsCard: {
    backgroundColor: '#003366',
  },
  totalValueCard: {
    backgroundColor: '#00BCD4',
  },
  statsCardTitle: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 8,
    textAlign: 'center',
  },
  statsCardValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  importExportContainer: {
    backgroundColor: '#fff',
    marginTop: 12,
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  importExportContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  importExportIcon: {
    marginRight: 12,
  },
  importExportText: {
    fontSize: 15,
    color: '#00BCD4',
    fontWeight: '500',
  },
  chartContainer: {
    backgroundColor: '#fff',
    marginTop: 12,
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  chartContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  chartWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  legendContainer: {
    flex: 1,
    paddingLeft: 16,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  legendColor: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  legendText: {
    fontSize: 12,
    color: '#666',
  },
  legendName: {
    fontWeight: 'bold',
  },
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginTop: 8,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#00BCD4',
  },
  tabText: {
    color: '#666',
  },
  activeTabText: {
    color: '#00BCD4',
    fontWeight: '500',
  },
  listContainer: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 8,
    padding: 16,
  },
  listTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 16,
  },
  listContent: {
    paddingBottom: 16,
  },
  assetItem: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  assetIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  assetInfo: {
    flex: 1,
  },
  assetName: {
    fontSize: 16,
    fontWeight: '500',
  },
  assetId: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  assetValue: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 4,
  },
  assetFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
  },
  allocationText: {
    fontSize: 12,
    color: '#666',
  },
});

export default AssetsScreen;