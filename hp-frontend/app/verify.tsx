import { View, Text } from "react-native";
import { AppButton } from "../components/ui/AppButton";
import { AppInput } from "../components/ui/AppInput";
import { Colors } from "../constants/theme";
import { useState } from "react";
import { useAuthStore } from "../store/authStore";
import { useLocalSearchParams, router } from "expo-router";

export default function Verify() {
  const { email } = useLocalSearchParams();
  const verify = useAuthStore((s) => s.verify);

  const [code, setCode] = useState("");

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 26, fontWeight: "700", color: "black" }}>Verify Email</Text>

      <Text style={{ color: Colors.dark.icon, marginTop: 6 }}>{email}</Text>

      <AppInput placeholder="Code" value={code} onChangeText={setCode} />

      <AppButton
        title="Verify"
        onPress={async () => {
          await verify(String(email), code);
          router.replace("/login");
        }}
      />
    </View>
  );
}
