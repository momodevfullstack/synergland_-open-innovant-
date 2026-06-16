import { Tabs } from 'expo-router';
import { Home, FolderKanban, MessageCircle, User } from 'lucide-react-native';

export default function TabsLayout() {
  return (
    <Tabs 
      screenOptions={{ 
        tabBarActiveTintColor: '#2563EB', 
        tabBarInactiveTintColor: '#64748B',
        headerShown: true,
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#E2E8F0',
          paddingBottom: 8,
          paddingTop: 8,
          height: 60,
        },
        headerStyle: {
          backgroundColor: '#FFFFFF',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          color: '#0F172A'
        }
      }}
    >
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: 'Matching',
          tabBarIcon: ({ color }) => <Home color={color} size={24} />
        }} 
      />
      <Tabs.Screen 
        name="projects" 
        options={{ 
          title: 'Projects',
          tabBarIcon: ({ color }) => <FolderKanban color={color} size={24} />
        }} 
      />
      <Tabs.Screen 
        name="chat" 
        options={{ 
          title: 'Chats',
          headerShown: false,
          tabBarIcon: ({ color }) => <MessageCircle color={color} size={24} />
        }} 
      />
      <Tabs.Screen 
        name="profile" 
        options={{ 
          title: 'Profile',
          tabBarIcon: ({ color }) => <User color={color} size={24} />
        }} 
      />
    </Tabs>
  );
}
