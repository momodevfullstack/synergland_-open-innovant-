import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function ChatListScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Conversations</Text>
      </View>
      <TouchableOpacity 
        style={styles.chatCard}
        onPress={() => router.push('/(tabs)/chat/1')}
      >
        <View style={styles.avatar} />
        <View style={styles.chatInfo}>
          <Text style={styles.chatName}>Alex (Product Designer)</Text>
          <Text style={styles.chatSnippet} numberOfLines={1}>Hello! Thanks for reaching out. Yes, we are...</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  header: { padding: 16, backgroundColor: '#FFFFFF', borderBottomWidth: 1, borderColor: '#E2E8F0' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#0F172A' },
  chatCard: { flexDirection: 'row', padding: 16, borderBottomWidth: 1, borderColor: '#E2E8F0', alignItems: 'center' },
  avatar: { width: 48, height: 48, borderRadius: 24, backgroundColor: '#CBD5E1', marginRight: 12 },
  chatInfo: { flex: 1 },
  chatName: { fontSize: 16, fontWeight: '600', color: '#0F172A', marginBottom: 4 },
  chatSnippet: { fontSize: 14, color: '#64748B' }
});
