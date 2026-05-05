import { View, Text } from "react-native";
import { AppButton } from "../components/ui/AppButton";
import { useAuthStore } from "../store/authStore";

export default function Profile() {
  const { user, logout } = useAuthStore();

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: "700", color: "black" }}>Profile</Text>

      <Text>Email: {user?.email}</Text>

      <AppButton title="Logout" onPress={logout} />
    </View>
  );
}
