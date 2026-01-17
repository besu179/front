import { useRouter } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useSession } from '../_ctx';

export default function LoginScreen() {
    const { signIn } = useSession();
    const router = useRouter();

    const handleLogin = () => {
        signIn();
        // Router replacement is handled by _layout, but we will leave this in for immediate feedback if needed,
        // though the layout effect will trigger the redirect.
        router.replace('/');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <Button title="Login (Simulate)" onPress={handleLogin} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 24, marginBottom: 20 },
});
