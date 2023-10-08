import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  Button,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.one}>
        <View
          style={{
            height: "100%",
            width: "25%",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 15,
          }}
        >
          <Image source={require("./src/img/usb.png")}></Image>
        </View>
        <View
          style={{
            height: "100%",
            width: "65%",
          }}
        >
          <View
            style={{
              height: "90%",
              width: "90%",
              paddingTop: 10,
              marginLeft: -20,
              marginTop: 20,
            }}
          >
            <Text style={styles.textOne}>USB Bluetooth Music Receiver</Text>
            <Text style={styles.textOne}>
              HJX-001- Biến loa thường thành loa Bluetooth
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.two}>
        <View
          style={{
            height: "30%",
            width: "80%",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Text style={{ fontWeight: "700", fontSize: 18 }}>
            Cực kì hài lòng
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            height: "40%",
            width: "80%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View>
            <Image source={require("./src/img/star.png")}></Image>
          </View>
          <View style={{ marginLeft: 10 }}>
            <Image source={require("./src/img/star.png")}></Image>
          </View>
          <View style={{ marginLeft: 10 }}>
            <Image source={require("./src/img/star.png")}></Image>
          </View>
          <View style={{ marginLeft: 10 }}>
            <Image source={require("./src/img/star.png")}></Image>
          </View>
          <View style={{ marginLeft: 10 }}>
            <Image source={require("./src/img/star.png")}></Image>
          </View>
        </View>
      </View>
      <View style={styles.three}>
        <TouchableOpacity onPress={() => Alert.alert('Submit successful')}>
          <View
            style={{
              width: "85%",
              height: "90%",
              borderWidth: 1.5,
              borderRadius: 15,
              borderColor: "#1511EB",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width: "30%",
                height: "100%",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <Image
                source={require("./src/img/camera.png")}
                style={{ width: 50, height: 40 }}
              ></Image>
            </View>
            <View
              style={{
                width: "70%",
                height: "100%",
                justifyContent: "center",
                paddingLeft: 15,
              }}
            >
              <Text style={{ fontWeight: "700", fontSize: 20 }}>
                Thêm hình ảnh
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.four}>
        <Button title="Submit" onPress={() => Alert.alert('submit successful')} />
      </View>
      <View style={styles.five}>
        <TouchableOpacity
          style={{
            width: "85%",
            height: "85%",
            backgroundColor: "#0d5db6",
            borderRadius: 15,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontWeight: "700", fontSize: 22 }}>
            Gửi
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  one: {
    width: "100%",
    height: "13%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  textOne: {
    fontWeight: "700",
    fontSize: 16,
  },

  two: {
    width: "100%",
    height: "17%",
    alignItems: "center",
    justifyContent: "center",
  },

  three: {
    width: "100%",
    height: "12%",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
  },

  four: {
    width: "100%",
    height: "43%",
    borderBottomWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  five: {
    width: "100%",
    height: "8%",
    alignItems: "center",
    justifyContent: "center",
  },
});
