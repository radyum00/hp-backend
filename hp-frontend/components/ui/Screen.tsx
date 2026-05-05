import { View } from "react-native";
import { Colors } from "@/constants/theme";

export function Screen({ children }: any) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.dark.background,
        padding: 20,
      }}
    >
      {children}
    </View>
  );
}
