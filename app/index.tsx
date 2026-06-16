import { Redirect } from 'expo-router';

export default function Index() {
  // Rediriger vers l'écran de connexion par défaut
  return <Redirect href="/(auth)/login" />;
}
