import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function RegisterScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Join Synerglance</Text>
        <Text style={styles.subtitle}>Create your profile to start matching</Text>
        
        <TouchableOpacity 
          style={styles.button}
          onPress={() => router.replace('/(tabs)')}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.outlineButton}
          onPress={() => router.back()}
        >
          <Text style={styles.outlineButtonText}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  content: { flex: 1, justifyContent: 'center', padding: 24 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#0F172A', marginBottom: 8, textAlign: 'center' },
  subtitle: { fontSize: 16, color: '#64748B', marginBottom: 48, textAlign: 'center' },
  button: { backgroundColor: '#10B981', padding: 16, borderRadius: 8, alignItems: 'center', marginBottom: 12 },
  buttonText: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 16 },
  outlineButton: { borderWidth: 1, borderColor: '#E2E8F0', padding: 16, borderRadius: 8, alignItems: 'center' },
  outlineButtonText: { color: '#64748B', fontWeight: 'bold', fontSize: 16 }
});
