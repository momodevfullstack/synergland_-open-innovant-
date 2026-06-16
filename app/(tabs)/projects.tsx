import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function ProjectsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Projects</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.placeholder}>Your active projects will appear here.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  header: { padding: 16, backgroundColor: '#FFFFFF', borderBottomWidth: 1, borderColor: '#E2E8F0' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#0F172A' },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  placeholder: { color: '#64748B', fontSize: 16 }
});
