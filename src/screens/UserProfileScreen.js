import { StyleSheet, Text, View } from 'react-native';


export default function UserProfileScreen({ route }) {
    const { user } = route.params;
    return (
        <View style={styles.wrap}>
        <Text style={styles.name}>{user.fullName}</Text>
        <Text style={styles.kv}>Email: <Text style={styles.v}>{user.email}</Text></Text>
        <Text style={styles.kv}>Phone: <Text style={styles.v}>{user.phoneNumber}</Text></Text>
        <Text style={styles.kv}>Address: <Text style={styles.v}>{user.street}, {user.city}, {user.country}</Text></Text>
        <Text style={styles.kv}>Job: <Text style={styles.v}>{user.jobTitle} @ {user.jobCompany}</Text></Text>

        </View>
    );
}

const styles = StyleSheet.create({
    wrap: { flex: 1, padding: 16, gap: 8 },
    name: { fontSize: 22, fontWeight: '800', marginBottom: 6 },
    kv: { fontSize: 16 },
    v: { fontWeight: '600' },
});