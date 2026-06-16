import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Synerglance</Text>
        <Text style={styles.subtitle}>Welcome back to the intelligent matching platform</Text>
        
        <TouchableOpacity 
          style={styles.button}
          onPress={() => router.replace('/(tabs)')}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.outlineButton}
          onPress={() => router.push('/(auth)/register')}
        >
          <Text style={styles.outlineButtonText}>Create an Account</Text>
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
  button: { backgroundColor: '#2563EB', padding: 16, borderRadius: 8, alignItems: 'center', marginBottom: 12 },
  buttonText: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 16 },
  outlineButton: { borderWidth: 1, borderColor: '#2563EB', padding: 16, borderRadius: 8, alignItems: 'center' },
  outlineButtonText: { color: '#2563EB', fontWeight: 'bold', fontSize: 16 }
});
