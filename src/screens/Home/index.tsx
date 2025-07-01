import { Text, View } from "react-native";
import styles from "./style";
import { BatLogo } from "../../components/batlogo/batlogo";
export default function Home() {
  return(
    <View style={styles.container}>
      <View>
        <BatLogo />
      </View>
    </View>
  )
}