import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { ShieldCheck, Send, Lock } from 'lucide-react-native';

const MOCK_MESSAGES = [
  { id: '1', text: 'Hi! I saw your EcoTrack project. I have 2 years of React Native experience.', sender: 'me', time: '10:00 AM' },
  { id: '2', text: 'Hello! Thanks for reaching out. Yes, we are looking for someone to help with the UI components.', sender: 'them', time: '10:02 AM' },
];

export default function ChatRoomScreen() {
  const [message, setMessage] = useState('');
  const [loading] = useState(false);

  // Note: WebSocket connection will be initialized here using Socket.io-client
  // useEffect(() => { const socket = io('wss://api.synerglance.com'); ... })

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Alex (Product Designer)</Text>
        <View style={styles.e2eBadge}>
          <ShieldCheck size={14} color="#10B981" />
          <Text style={styles.e2eText}>E2E Encrypted</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.messageList}>
        <View style={styles.encryptionNotice}>
          <Lock size={16} color="#64748B" style={{ marginBottom: 4 }} />
          <Text style={styles.encryptionNoticeText}>
            Messages in this room are end-to-end encrypted using the Signal Protocol. 
            Nobody outside of this chat, not even Synerglance, can read them.
          </Text>
        </View>

        {MOCK_MESSAGES.map((msg) => (
          <View 
            key={msg.id} 
            style={[
              styles.messageBubble, 
              msg.sender === 'me' ? styles.messageMe : styles.messageThem
            ]}
          >
            <Text style={[styles.messageText, msg.sender === 'me' ? styles.messageTextMe : null]}>
              {msg.text}
            </Text>
            <Text style={styles.timeText}>{msg.time}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type an encrypted message..."
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={styles.sendButton} disabled={!message.trim()}>
          <Send size={20} color={message.trim() ? "#2563EB" : "#94A3B8"} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0F172A',
  },
  e2eBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 4,
    backgroundColor: '#D1FAE5',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  e2eText: {
    fontSize: 11,
    color: '#065F46',
    fontWeight: '600',
  },
  messageList: {
    padding: 16,
    flexGrow: 1,
  },
  encryptionNotice: {
    backgroundColor: '#F1F5F9',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 24,
  },
  encryptionNoticeText: {
    fontSize: 12,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 18,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 16,
    marginBottom: 12,
  },
  messageMe: {
    backgroundColor: '#2563EB',
    alignSelf: 'flex-end',
    borderBottomRightRadius: 4,
  },
  messageThem: {
    backgroundColor: '#E2E8F0',
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 4,
  },
  messageText: {
    fontSize: 15,
    color: '#0F172A',
    lineHeight: 20,
  },
  messageTextMe: {
    color: '#FFFFFF',
  },
  timeText: {
    fontSize: 10,
    color: '#CBD5E1',
    marginTop: 4,
    alignSelf: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#F1F5F9',
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 16,
    fontSize: 15,
    marginRight: 12,
  },
  sendButton: {
    padding: 8,
  }
});
