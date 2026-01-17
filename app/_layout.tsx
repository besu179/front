import { Slot, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { SessionProvider, useSession } from "./_ctx";

function RootLayoutNav() {
  const { session, isLoading } = useSession();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;

    // segments[0] is the first part of the route processing.
    // e.g., if we are at '/(auth)/login', segments[0] is '(auth)'
    const inAuthGroup = segments[0] === "(auth)";

    if (!session && !inAuthGroup) {
      // If user is NOT logged in and trying to access a protected route (not in auth group),
      // redirect them to the login page.
      router.replace("/login");
    } else if (session && inAuthGroup) {
      // If user IS logged in and trying to access the login page,
      // redirect them to the home page (protected area).
      router.replace("/");
    }
  }, [session, segments, isLoading]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // <Slot /> renders the current route.
  // We wrap it in the SessionProvider to make auth state available centrally.
  return <Slot />;
}

export default function RootLayout() {
  return (
    <SessionProvider>
      <RootLayoutNav />
    </SessionProvider>
  );
}
