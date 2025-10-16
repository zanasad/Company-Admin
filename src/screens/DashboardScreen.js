import { useMemo, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import UserRow from '../components/UserRow';
import { useUsers } from '../hooks/useUsers';

const PAGE_SIZE = 10; // Bonus pagination


    function normalize(s) {
    return (s ?? '').toString().toLowerCase();
    }

    export default function DashboardScreen({ navigation }) {
        const { allUsers, isLoading, error, refreshLocal } = useUsers();
        const [q, setQ] = useState('');
        const [page, setPage] = useState(1);


        const filtered = useMemo(() => {
        const query = normalize(q);
        const list = allUsers.filter((u) => {
        const haystack = [
        u.fullName,
        u.email,
        u.country,
        u.city,
        u.street,
        u.phoneNumber,
        u.jobTitle,
        u.jobCompany,
        ].map(normalize).join(' ');
        return haystack.includes(query);
    });
    return list;
    }, [allUsers, q]);

const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
const pageData = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);


function openProfile(item) {
    navigation.navigate('UserProfile', { user: item });
}

if (isLoading) return <View style={styles.center}><ActivityIndicator /></View>;
if (error) return <View style={styles.center}><Text>Failed loading users.</Text></View>;


return (
    <View style={{ flex: 1 }}>
    <SearchBar value={q} onChange={(t)=>{ setQ(t); setPage(1); }} />


    <View style={styles.actions}>
    <TouchableOpacity style={styles.addBtn} onPress={() => navigation.navigate('AddUser', { onDone: refreshLocal })}>
    <Text style={styles.addTxt}>+ Create new user</Text>
    </TouchableOpacity>
    <Text style={styles.countTxt}>Total: {filtered.length}</Text>
    </View>


    <FlatList
    data={pageData}
    keyExtractor={(item) => item.uuid}
    renderItem={({ item }) => (
    <UserRow user={item} onPress={() => openProfile(item)} />
)}
        contentContainerStyle={{ paddingBottom: 24 }}
        />

            <View style={styles.pagination}>
            <TouchableOpacity style={styles.pgBtn} onPress={() => setPage((p)=> Math.max(1, p-1))} disabled={page === 1}>
            <Text>Prev</Text>
            </TouchableOpacity>
            <Text style={{ fontWeight: '600' }}>{page} / {pageCount}</Text>
            <TouchableOpacity style={styles.pgBtn} onPress={() => setPage((p)=> Math.min(pageCount, p+1))} disabled={page === pageCount}>
            <Text>Next</Text>
            </TouchableOpacity>
            </View>
            </View>
        );
    }

const styles = StyleSheet.create({
    center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    actions: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 12, paddingBottom: 8 },
    addBtn: { borderWidth: 1, borderColor: '#222', paddingVertical: 8, paddingHorizontal: 12, borderRadius: 10 },
    addTxt: { fontWeight: '700' },
    countTxt: { color: '#333' },
    pagination: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 16, paddingVertical: 8 },
    pgBtn: { borderWidth: 1, borderColor: '#ccc', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 10 },
});