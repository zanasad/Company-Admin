import { useState } from 'react';
import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useAuth } from '../context/AuthContext';
import { useUsers } from '../hooks/useUsers';

export default function LoginScreen({ navigation }) {
  const { allUsers, isLoading } = useUsers();
  const { login } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function showError(msg) {
    setError(msg);
    if (Platform.OS !== 'web') {
      Alert.alert('Invalid credentials', msg);
    }
  }

  function handleLogin() {
    const u = (username || '').trim().toLowerCase();
    const p = (password || '').trim();

    if (!u || !p) {
      showError('Shkruaj username dhe password.');
      return;
    }

    const match = allUsers.find(
      (x) =>
        (x?.raw?.username || '').trim().toLowerCase() === u &&
        (x?.raw?.password || '') === p
    );

    if (match) {
      setError('');
      login({ username: match.raw.username, name: match.fullName });
      navigation.replace('Dashboard');
    } else {
      showError('Username ose fjalëkalimi nuk përputhen. Ju lutem provoni përsëri.');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Company Admin</Text>

      <TextInput
        placeholder="Username"
        style={styles.input}
        autoCapitalize="none"
        value={username}
        onChangeText={(t) => {
          setUsername(t);
          if (error) setError('');
        }}
        returnKeyType="next"
        onSubmitEditing={() => passwordRef?.focus?.()}
      />

      <TextInput
        ref={(r) => (passwordRef = r)}
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={(t) => {
          setPassword(t);
          if (error) setError('');
        }}
        returnKeyType="go"
        onSubmitEditing={handleLogin}
      />

      <TouchableOpacity
        style={[styles.button, isLoading && { opacity: 0.6 }]}
        onPress={handleLogin}
        disabled={isLoading}
      >
        <Text style={styles.buttonText}>{isLoading ? 'Loading…' : 'Login'}</Text>
      </TouchableOpacity>

      {!!error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}


let passwordRef = null;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24, gap: 12 },
  title: { fontSize: 26, fontWeight: '700', marginBottom: 12 },
  input: { width: '100%', borderWidth: 1, borderColor: '#ccc', borderRadius: 10, padding: 12 },
  button: { marginTop: 8, backgroundColor: '#111', paddingVertical: 12, paddingHorizontal: 20, borderRadius: 10 },
  buttonText: { color: 'white', fontWeight: '600' },
  error: { color: 'red', marginTop: 10, textAlign: 'center' },
});
