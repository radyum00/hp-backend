import { View, Text } from "react-native";
import { AppButton } from "../components/ui/AppButton";
import { AppInput } from "../components/ui/AppInput";
import { useState } from "react";
import { useAuthStore } from "../store/authStore";
import { router } from "expo-router";

export default function Login() {
  const login = useAuthStore((s) => s.login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: "700", color: "black" }}>
      	Login
      </Text>

      <AppInput placeholder="Email" value={email} onChangeText={setEmail} />
      <AppInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <AppButton
        title="Login"
        onPress={async () => {
          await login(email, password);
          router.replace("/profile");
        }}
      />

      <AppButton title="Go to Register" onPress={() => router.push("/register")} />
    </View>
  );
}
