import { StyleSheet, TouchableOpacity } from "react-native";
import { IconSendActive, IconSendDisable } from "../assets/icons";
import { colors } from "../utils/colors";

export default function ButtonSend({ disabled }) {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.container(disabled)}>
      {disabled && <IconSendDisable />}
      {!disabled && <IconSendActive />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: (disabled) => ({
    width: 55,
    height: 55,
    paddingTop: 7,
    paddingRight: 7,
    paddingLeft: 13,
    paddingBottom: 13,
    borderRadius: 10,
    backgroundColor: disabled ? colors.Background.gray : colors.Background.blue,
  }),
});
