import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function UserRow({ user, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={styles.card}>
        <Text style={styles.name}>{user.fullName}</Text>
        <Text style={styles.meta}>{user.email}</Text>
        <Text style={styles.meta}>{user.phoneNumber}</Text>
        <Text style={styles.meta}>{user.city}, {user.country} — {user.street}</Text>
        <Text style={styles.meta}>{user.jobTitle} @ {user.jobCompany}</Text>
        </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    card: { backgroundColor: 'white', borderRadius: 12, padding: 12, marginHorizontal: 12, marginVertical: 6, borderWidth: 1, borderColor: '#eee' },
    name: { fontSize: 16, fontWeight: '700' },
    meta: { color: '#444', marginTop: 2 },
});