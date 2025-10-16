import AsyncStorage from '@react-native-async-storage/async-storage';


const STORAGE_KEY = 'local_users_v1';


    export async function getLocalUsers() {
        try {
            const raw = await AsyncStorage.getItem(STORAGE_KEY);
            return raw ? JSON.parse(raw) : [];
        } catch (e) {
            console.warn('Failed reading local users', e);
            return [];
        }
    }


export async function addLocalUser(user) {
    const list = await getLocalUsers();
    const withId = { ...user, uuid: String(Date.now()) };
    const updated = [withId, ...list];
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return withId;
}