import { View, Text } from "react-native";
import { AppButton } from "../components/ui/AppButton";
import { AppInput } from "../components/ui/AppInput";
import { useState } from "react";
import { useAuthStore } from "../store/authStore";
import { router } from "expo-router";

export default function Register() {
  const register = useAuthStore((s) => s.register);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: "700", color: "black" }}>Register</Text>

      <AppInput placeholder="Username" value={username} onChangeText={setUsername} />
      <AppInput placeholder="Email" value={email} onChangeText={setEmail} />
      <AppInput placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
      <AppInput placeholder="Confirm Password" secureTextEntry value={confirm} onChangeText={setConfirm} />

      <AppButton
        title="Register"
        onPress={async () => {
          await register(username, email, password, confirm);
          router.push("/verify?email=" + email);
        }}
      />
    </View>
  );
}
