import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.one}>
        <View style={{ width: "100%", height: "70%" }}>
          <View
            style={{
              width: "100%",
              height: "85%",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <View
              style={{
                width: "90%",
                height: "100%",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  width: "35%",
                  height: "90%",
                  marginTop: 27,
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("./src/img/book.png")}
                  style={{ width: 125, height: 170, marginTop: 15 }}
                ></Image>
              </View>
              <View
                style={{
                  width: "65%",
                  height: "90%",
                  marginTop: 27,
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: 25,
                    marginTop: 15,
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 13.5,
                      paddingLeft: 10,
                    }}
                  >
                    Nguyên hàm tích phân và ứng dụng
                  </Text>
                </View>
                <View
                  style={{
                    width: "100%",
                    height: 25,
                    marginTop: 7,
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 13.5,
                      paddingLeft: 10,
                    }}
                  >
                    Cung cấp bởi TIki Trading
                  </Text>
                </View>
                <View
                  style={{
                    width: "100%",
                    height: 30,
                    marginTop: 7,
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 18,
                      paddingLeft: 10,
                      color: "red",
                    }}
                  >
                    141.800 đ
                  </Text>
                </View>
                <View
                  style={{
                    width: "100%",
                    height: 25,
                    marginTop: 7,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      paddingLeft: 10,
                      textDecorationLine: "line-through",
                      color: "grey",
                      fontWeight: "bold",
                    }}
                  >
                    141.800 đ
                  </Text>
                </View>
                <View
                  style={{
                    width: "100%",
                    height: 25,
                    marginTop: 7,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      height: "100%",
                      width: "40%",
                    }}
                  >
                    <View
                      style={{
                        height: "100%",
                        width: "33.3%",
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: 7,
                      }}
                    >
                      <TouchableOpacity>
                        <Image
                          source={require("./src/img/btnminus.png")}
                          style={{ width: 22, height: 22 }}
                        ></Image>
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        height: "100%",
                        width: "33.3%",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                        1
                      </Text>
                    </View>
                    <View
                      style={{
                        height: "100%",
                        width: "33.3%",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <TouchableOpacity>
                        <Image
                          source={require("./src/img/btnadd.png")}
                          style={{ width: 22, height: 22 }}
                        ></Image>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <TouchableOpacity
                    style={{
                      width: "40%",
                      height: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "blue",
                        fontWeight: "bold",
                        fontSize: 15,
                      }}
                    >
                      Mua sau
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              height: "15%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                height: "100%",
                width: "90%",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  width: "45%",
                  height: "100%",
                  justifyContent: "center",
                  marginTop: -20,
                }}
              >
                <View>
                  <Text style={{ fontWeight: "bold", fontSize: 13 }}>
                    Bạn đã có mã giảm giá?
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={{
                  width: "50%",
                  height: "100%",
                  paddingLeft: 10,
                  justifyContent: "center",
                  marginTop: -20,
                }}
              >
                <Text
                  style={{ fontWeight: "700", fontSize: 15, color: "blue" }}
                >
                  Xem tại đây
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          style={{
            width: "100%",
            height: "30%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "90%",
              height: "100%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                width: "70%",
                height: 60,
                borderWidth: 1,
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  height: "100%",
                  width: "25%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{ width: 40, height: 23, backgroundColor: "#F2DD1B" }}
                ></View>
              </View>
              <View
                style={{
                  height: "100%",
                  width: "75%",
                  justifyContent: "center",
                  paddingLeft: 10,
                }}
              >
                <Text style={{ fontWeight: "700", fontSize: 20 }}>
                  Mã giảm giá
                </Text>
              </View>
            </TouchableOpacity>
            <View style={{ width: "5%", height: 50 }}></View>
            <TouchableOpacity
              style={{
                width: "25%",
                height: 60,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#0a5eb7",
              }}
            >
              <View style={{}}>
                <Text
                  style={{ fontWeight: "700", fontSize: 20, color: "white" }}
                >
                  Áp dụng
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.two}>
        <View
          style={{
            width: "100%",
            height: "66%",
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ height: "100%", width: "90%", flexDirection: "row" }}>
            <View
              style={{
                height: "100%",
                width: "70%",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontWeight: "700", fontSize: 13 }}>
                Bạn có phiếu quà tặng Tiki/Got it/Urbox?
              </Text>
            </View>
            <TouchableOpacity
              style={{
                height: "100%",
                width: "30%",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontWeight: "700", fontSize: 14, color: "blue" }}>
                Nhập tại đây?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.three}>
        <View
          style={{
            width: "90%",
            height: "90%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "700", fontSize: 22 }}>Tạm tính</Text>
          <Text style={{ fontWeight: "700", fontSize: 22, color: "red" }}>
            141.800 đ
          </Text>
        </View>
      </View>
      <View style={styles.four}></View>
      <View style={styles.five}>
        <View
          style={{
            width: "100%",
            height: "35%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "85%",
              height: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Text style={{ fontWeight: "700", fontSize: 22, color: "grey" }}>
              Thành tiền
            </Text>
            <Text style={{ fontWeight: "700", fontSize: 22, color: "red" }}>
              141.800 đ
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            height: "65%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: "85%",
              height: 60,
              backgroundColor: "#E53935",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 22 }}>
              TIẾN HÀNH ĐẶT HÀNG
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#c4c4c4",
    justifyContent: "center",
    alignItems: "center",
  },

  one: {
    width: "100%",
    height: "47%",
    backgroundColor: "white",
  },

  two: {
    width: "100%",
    height: "12%",
    justifyContent: "center",
    alignItems: "center",
  },

  three: {
    width: "100%",
    height: "9%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },

  four: {
    width: "100%",
    height: "13%",
  },

  five: {
    width: "100%",
    height: "19%",
    backgroundColor: "white",
  },
});
