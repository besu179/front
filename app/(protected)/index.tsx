import { Button, StyleSheet, Text, View } from 'react-native';
import { useSession } from '../_ctx';

export default function HomeScreen() {
    const { signOut } = useSession();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome Home!</Text>
            <Text>This is a protected route.</Text>
            <Button title="Logout" onPress={() => signOut()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 24, marginBottom: 20 },
});
