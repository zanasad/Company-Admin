import { StyleSheet, TextInput, View } from 'react-native';


export default function SearchBar({ value, onChange }) {
    return (
        <View style={styles.wrapper}>
        <TextInput
            value={value}
            onChangeText={onChange}
            placeholder="Search name, email, country, city, street, phone, job title, company"
            style={styles.input}
            autoCapitalize="none"
         />
         </View>
    );
}


    const styles = StyleSheet.create({
    wrapper: { paddingHorizontal: 12, paddingBottom: 8 },
    input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 10, padding: 10 },
    });