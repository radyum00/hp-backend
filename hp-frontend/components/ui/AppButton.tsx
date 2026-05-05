import { TouchableOpacity, Text } from "react-native";
import { Colors } from "@/constants/theme";

export function AppButton({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: Colors.dark.tint,
        paddingVertical: 14,
        borderRadius: 14,
        alignItems: "center",
        marginTop: 12,
      }}
    >
      <Text
        style={{
          color: "black",
          fontWeight: "600",
          fontSize: 15,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
