
import { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView, Platform, ScrollView,
  StyleSheet,
  Text, TextInput, TouchableOpacity,
  View
} from 'react-native';
import { addLocalUser } from '../storage/localUsers';

export default function AddUserScreen({ navigation, route }) {
  const [state, setState] = useState({
    nameFirst: '', nameMiddle: '', nameLast: '',
    email: '', country: '', city: '', street: '', phoneNumber: '',
    jobTitle: '', jobCompany: '',
    username: '', password: '',
  });

  const onChange = (k, v) => setState((s) => ({ ...s, [k]: v }));

  async function onSave() {
    if (!state.username || !state.password || !state.nameFirst || !state.email) {
      Alert.alert('Missing fields', 'Username, Password, First name dhe Email janë të detyrueshme.');
      return;
    }

    const newUserRaw = {
      name: { first: state.nameFirst, middle: state.nameMiddle, last: state.nameLast },
      emails: [state.email],
      location: { country: state.country, city: state.city, street: state.street },
      phoneNumber: state.phoneNumber,
      job: { title: state.jobTitle, company: state.jobCompany },
      username: state.username,
      password: state.password,
    };

    await addLocalUser(newUserRaw);
    Alert.alert('Saved', 'User added locally.');
    route?.params?.onDone && route.params.onDone();
    navigation.goBack();
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>Add User</Text>

        <Text style={styles.section}>Credentials</Text>
        <TextInput placeholder="Username" style={styles.input} autoCapitalize="none"
          value={state.username} onChangeText={(t)=>onChange('username', t)} />
        <TextInput placeholder="Password" style={styles.input} secureTextEntry
          value={state.password} onChangeText={(t)=>onChange('password', t)} />

        <Text style={styles.section}>Identity</Text>
        <TextInput placeholder="First name" style={styles.input}
          value={state.nameFirst} onChangeText={(t)=>onChange('nameFirst', t)} />
        <TextInput placeholder="Middle name" style={styles.input}
          value={state.nameMiddle} onChangeText={(t)=>onChange('nameMiddle', t)} />
        <TextInput placeholder="Last name" style={styles.input}
          value={state.nameLast} onChangeText={(t)=>onChange('nameLast', t)} />

        <Text style={styles.section}>Contact</Text>
        <TextInput placeholder="Email" style={styles.input} autoCapitalize="none" keyboardType="email-address"
          value={state.email} onChangeText={(t)=>onChange('email', t)} />
        <TextInput placeholder="Phone number" style={styles.input} keyboardType="phone-pad"
          value={state.phoneNumber} onChangeText={(t)=>onChange('phoneNumber', t)} />

        <Text style={styles.section}>Address</Text>
        <TextInput placeholder="Country" style={styles.input}
          value={state.country} onChangeText={(t)=>onChange('country', t)} />
        <TextInput placeholder="City" style={styles.input}
          value={state.city} onChangeText={(t)=>onChange('city', t)} />
        <TextInput placeholder="Street" style={styles.input}
          value={state.street} onChangeText={(t)=>onChange('street', t)} />

        <Text style={styles.section}>Job</Text>
        <TextInput placeholder="Job title" style={styles.input}
          value={state.jobTitle} onChangeText={(t)=>onChange('jobTitle', t)} />
        <TextInput placeholder="Company" style={styles.input}
          value={state.jobCompany} onChangeText={(t)=>onChange('jobCompany', t)} />
      </ScrollView>

  
      <View style={styles.footer}>
        <TouchableOpacity style={styles.saveBtn} onPress={onSave}>
          <Text style={styles.saveTxt}>Save</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  content: { padding: 16, paddingBottom: 24 },
  title: { fontSize: 22, fontWeight: '800', marginBottom: 8 },
  section: { marginTop: 10, marginBottom: 4, fontWeight: '700' },
  input: {
    borderWidth: 1, borderColor: '#ddd', borderRadius: 10,
    padding: 10, marginBottom: 8
  },
  footer: {
    borderTopWidth: 1, borderTopColor: '#eee',
    padding: 12, backgroundColor: 'white'
  },
  saveBtn: {
    backgroundColor: '#111', paddingVertical: 12,
    borderRadius: 10, alignItems: 'center'
  },
  saveTxt: { color: 'white', fontWeight: '700' },
});
