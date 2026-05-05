import { TextInput } from "react-native";
import { Colors } from "@/constants/theme";

export function AppInput(props: any) {
  return (
    <TextInput
      placeholderTextColor={Colors.dark.icon}
      style={{
        backgroundColor: "#f6f9ff",
        padding: 14,
        borderRadius: 14,
        color: "black",
        marginTop: 10,
      }}
      {...props}
    />
  );
}
