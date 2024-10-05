import { SafeAreaView, StatusBar, View } from "react-native";
import { Home } from "./src/screens/Home";


export default function App() {
  return (
    <>
      <StatusBar />
      <View style={{flex: 1, backgroundColor: '#0D0D0D'}}>
        <SafeAreaView  style={{flex: 1}}>
          <Home />
        </SafeAreaView>
      </View>
    </>
  );
}
