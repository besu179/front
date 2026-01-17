import { useRouter } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useSession } from '../_ctx';

export default function LoginScreen() {
    const { signIn } = useSession();
    const router = useRouter();

    const handleLogin = () => {
        // 1. Update the global auth state
        signIn();

        // 2. The Root Layout (_layout.tsx) listens to the session change 
        // and will automatically redirect us to the Home screen.
        // We replace the route here just for immediate feedback, 
        // but the layout effect is the real "Guard".
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
