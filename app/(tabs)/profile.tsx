import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Plus, X, Award, Briefcase, Calendar } from 'lucide-react-native';

export default function ProfileBuilderScreen() {
  const [skills, setSkills] = useState(['React Native', 'TypeScript', 'Node.js', 'FastAPI']);
  const [newSkill, setNewSkill] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('Mid');
  const [availability, setAvailability] = useState('Alternance');

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(s => s !== skillToRemove));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Award size={20} color="#0F172A" />
            <Text style={styles.sectionTitle}>Skills & Competencies</Text>
          </View>
          <Text style={styles.sectionSubtitle}>Add tags to improve your Synerglance matching score.</Text>
          
          <View style={styles.skillsContainer}>
            {skills.map((skill) => (
              <View key={skill} style={styles.skillChip}>
                <Text style={styles.skillText}>{skill}</Text>
                <TouchableOpacity onPress={() => removeSkill(skill)} style={styles.skillRemove}>
                  <X size={14} color="#64748B" />
                </TouchableOpacity>
              </View>
            ))}
          </View>

          <View style={styles.addSkillRow}>
            <TextInput
              style={styles.input}
              placeholder="E.g. Python, Figma, Marketing"
              value={newSkill}
              onChangeText={setNewSkill}
              onSubmitEditing={addSkill}
            />
            <TouchableOpacity style={styles.addButton} onPress={addSkill}>
              <Plus size={20} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Briefcase size={20} color="#0F172A" />
            <Text style={styles.sectionTitle}>Experience Level</Text>
          </View>
          
          <View style={styles.optionsRow}>
            {['Junior', 'Mid', 'Senior'].map((level) => (
              <TouchableOpacity
                key={level}
                style={[
                  styles.optionButton,
                  experienceLevel === level && styles.optionButtonActive
                ]}
                onPress={() => setExperienceLevel(level)}
              >
                <Text style={[
                  styles.optionText,
                  experienceLevel === level && styles.optionTextActive
                ]}>{level}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Calendar size={20} color="#0F172A" />
            <Text style={styles.sectionTitle}>Availability & Engagement</Text>
          </View>
          
          <View style={styles.optionsGrid}>
            {['Stage', 'Alternance', 'Bénévolat', 'Rémunéré'].map((avail) => (
              <TouchableOpacity
                key={avail}
                style={[
                  styles.optionButton,
                  styles.gridOption,
                  availability === avail && styles.optionButtonActive
                ]}
                onPress={() => setAvailability(avail)}
              >
                <Text style={[
                  styles.optionText,
                  availability === avail && styles.optionTextActive
                ]}>{avail}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save Profile & Update Vector</Text>
        </TouchableOpacity>
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
  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0F172A',
  },
  sectionSubtitle: {
    fontSize: 13,
    color: '#64748B',
    marginBottom: 16,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
  skillChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F5F9',
    paddingVertical: 6,
    paddingLeft: 12,
    paddingRight: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  skillText: {
    fontSize: 14,
    color: '#334155',
    marginRight: 6,
    fontWeight: '500',
  },
  skillRemove: {
    padding: 2,
    backgroundColor: '#E2E8F0',
    borderRadius: 10,
  },
  addSkillRow: {
    flexDirection: 'row',
    gap: 8,
  },
  input: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 8,
    paddingHorizontal: 16,
    height: 44,
    fontSize: 14,
    color: '#0F172A',
  },
  addButton: {
    backgroundColor: '#3B82F6',
    width: 44,
    height: 44,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionsRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 8,
  },
  optionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 8,
  },
  gridOption: {
    width: '48%',
  },
  optionButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 8,
    backgroundColor: '#F8FAFC',
  },
  optionButtonActive: {
    backgroundColor: '#EFF6FF',
    borderColor: '#3B82F6',
  },
  optionText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#64748B',
  },
  optionTextActive: {
    color: '#2563EB',
    fontWeight: '600',
  },
  saveButton: {
    backgroundColor: '#0F172A',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 32,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  }
});
