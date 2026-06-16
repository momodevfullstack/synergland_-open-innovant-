import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { User, Briefcase, Star, ChevronRight, Bookmark } from 'lucide-react-native';

const MOCK_MATCHES = [
  {
    id: '1',
    title: 'Synerglance Core Dev',
    role: 'Full-Stack Developer (React Native / NestJS)',
    score: 95,
    type: 'Project',
    skills: ['React Native', 'TypeScript', 'Node.js'],
    engagement: 'Alternate / Stage',
    description: 'Looking for a contributor to help build the MVP of our intelligent matching platform.'
  },
  {
    id: '2',
    title: 'EcoTrack App',
    role: 'Mobile UX/UI Designer',
    score: 82,
    type: 'Project',
    skills: ['Figma', 'UI/UX', 'Prototyping'],
    engagement: 'Bénévolat',
    description: 'Design the interface for our new carbon footprint tracking application.'
  }
];

export default function MatchingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Top Synergies</Text>
          <Text style={styles.subtitle}>AI-Powered Recommendations</Text>
        </View>

        {MOCK_MATCHES.map((match) => (
          <View key={match.id} style={styles.card}>
            <View style={styles.cardHeader}>
              <View>
                <Text style={styles.cardTitle}>{match.title}</Text>
                <Text style={styles.cardRole}>{match.role}</Text>
              </View>
              <View style={styles.scoreBadge}>
                <Text style={styles.scoreText}>{match.score}%</Text>
                <Text style={styles.scoreLabel}>Synergy</Text>
              </View>
            </View>

            <Text style={styles.description} numberOfLines={2}>
              {match.description}
            </Text>

            <View style={styles.tagsContainer}>
              {match.skills.map((skill, idx) => (
                <View key={idx} style={styles.tag}>
                  <Text style={styles.tagText}>{skill}</Text>
                </View>
              ))}
            </View>

            <View style={styles.cardFooter}>
              <View style={styles.engagementRow}>
                <Briefcase size={16} color="#64748B" />
                <Text style={styles.engagementText}>{match.engagement}</Text>
              </View>
              
              <View style={styles.actions}>
                <TouchableOpacity style={styles.iconButton}>
                  <Bookmark size={20} color="#64748B" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.primaryButton}>
                  <Text style={styles.primaryButtonText}>Connect</Text>
                </TouchableOpacity>
              </View>
            </View>
            
            {/* Progress bar visual indicator for score */}
            <View style={styles.progressContainer}>
               <View style={[styles.progressBar, { width: `${match.score}%`, backgroundColor: match.score > 90 ? '#10B981' : '#3B82F6'}]} />
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollContent: {
    padding: 16,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0F172A',
  },
  subtitle: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 4,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    overflow: 'hidden',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 4,
  },
  cardRole: {
    fontSize: 14,
    color: '#3B82F6',
    fontWeight: '500',
  },
  scoreBadge: {
    alignItems: 'center',
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
  },
  scoreText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2563EB',
  },
  scoreLabel: {
    fontSize: 10,
    color: '#1D4ED8',
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  description: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 20,
    marginBottom: 16,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
  tag: {
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  tagText: {
    fontSize: 12,
    color: '#475569',
    fontWeight: '500',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  engagementRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  engagementText: {
    fontSize: 13,
    color: '#64748B',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconButton: {
    padding: 8,
  },
  primaryButton: {
    backgroundColor: '#0F172A',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
  progressContainer: {
    height: 4,
    backgroundColor: '#F1F5F9',
    borderRadius: 2,
    marginTop: 16,
    marginHorizontal: -16,
    marginBottom: -16,
  },
  progressBar: {
    height: '100%',
    borderRadius: 2,
  }
});
