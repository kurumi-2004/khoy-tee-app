import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { View, TouchableOpacity, Text, Modal } from 'react-native';

// Screens
import HomeScreen from '../screens/HomeScreen';
import AssetsScreen from '../screens/AssetsScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stacks for each tab
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const ScheduleStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ScheduleScreen" component={ScheduleScreen} />
    </Stack.Navigator>
  );
};

const AssetsStack = ({ navigation }) => {
  const [showAddMenu, setShowAddMenu] = useState(false);
  
  const AddMenu = () => (
    <Modal
      transparent={true}
      visible={showAddMenu}
      animationType="fade"
      onRequestClose={() => setShowAddMenu(false)}
    >
      <TouchableOpacity 
        style={{ 
          flex: 1, 
          backgroundColor: 'rgba(0,0,0,0.5)', 
          justifyContent: 'flex-start', 
          alignItems: 'flex-end',
          paddingTop: 50,
          paddingRight: 20
        }} 
        activeOpacity={1} 
        onPress={() => setShowAddMenu(false)}
      >
        <View style={{ 
          backgroundColor: 'white', 
          borderRadius: 8, 
          width: 200,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5
        }}>
          <TouchableOpacity style={{ 
            flexDirection: 'row', 
            alignItems: 'center', 
            padding: 12,
            borderBottomWidth: 1,
            borderBottomColor: '#f0f0f0'
          }}>
            <MaterialIcons name="assignment" size={20} color="#666" />
            <Text style={{ marginLeft: 10, fontSize: 14, color: '#333' }}>Tạo cấp phát</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={{ 
              flexDirection: 'row', 
              alignItems: 'center', 
              padding: 12,
              borderBottomWidth: 1,
              borderBottomColor: '#f0f0f0'
            }}
            onPress={() => {
              // Chuyển đến tab nhập hàng
              navigation.navigate('AssetsList', { activeTab: 'import' });
              setShowAddMenu(false);
            }}
          >
            <MaterialIcons name="input" size={20} color="#666" />
            <Text style={{ marginLeft: 10, fontSize: 14, color: '#333' }}>Nhập hàng hóa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ 
            flexDirection: 'row', 
            alignItems: 'center', 
            padding: 12,
            borderBottomWidth: 1,
            borderBottomColor: '#f0f0f0'
          }}>
            <MaterialIcons name="add-box" size={20} color="#666" />
            <Text style={{ marginLeft: 10, fontSize: 14, color: '#333' }}>Thêm tài sản cố định</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ 
            flexDirection: 'row', 
            alignItems: 'center', 
            padding: 12
          }}>
            <MaterialIcons name="exit-to-app" size={20} color="#666" />
            <Text style={{ marginLeft: 10, fontSize: 14, color: '#333' }}>Xuất hàng</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
  
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen 
          name="AssetsList" 
          component={AssetsScreen} 
          options={({ navigation }) => ({ 
            headerShown: true,
            headerTitle: "Tài sản",
            headerTitleAlign: "center",
            headerLeft: () => (
              <Ionicons 
                name="arrow-back" 
                size={24} 
                color="#333" 
                style={{ marginLeft: 10 }}
                onPress={() => navigation.goBack()}
              />
            ),
            headerRight: () => (
              <View style={{ flexDirection: 'row', marginRight: 10 }}>
                <Ionicons name="search-outline" size={24} color="#333" style={{ marginRight: 15 }} />
                <TouchableOpacity onPress={() => setShowAddMenu(!showAddMenu)}>
                  <Ionicons name="add-circle" size={24} color="#00BCD4" />
                </TouchableOpacity>
              </View>
            )
          })} 
        />
      </Stack.Navigator>
      <AddMenu />
    </>
  );
};

const ChatStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'HomeStack') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'ScheduleStack') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'ChatStack') {
            iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
          } else if (route.name === 'ProfileStack') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#00BCD4',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="HomeStack" component={HomeStack} options={{ title: 'Trang chủ' }} />
      <Tab.Screen name="ScheduleStack" component={ScheduleStack} options={{ title: 'lịch ca' }} />
      <Tab.Screen name="ChatStack" component={ChatStack} options={{ title: 'Chat connect' }} />
      <Tab.Screen name="ProfileStack" component={ProfileStack} options={{ title: 'Tài khoản' }} />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen name="AssetsStack" component={AssetsStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;