import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_455_977} />
      <View style={styles.View_455_978}>
        <Text style={styles.Text_455_978}>₱129.00</Text>
      </View>
      <View style={styles.View_455_979}>
        <Text style={styles.Text_455_979}>TOTAL: </Text>
      </View>
      <View style={styles.View_455_980}>
        <Text style={styles.Text_455_980}>₱30.00</Text>
      </View>
      <View style={styles.View_455_981}>
        <Text style={styles.Text_455_981}>SUB-TOTAL</Text>
      </View>
      <View style={styles.View_455_982}>
        <Text style={styles.Text_455_982}>DELIVERY FEE</Text>
      </View>
      <View style={styles.View_455_983}>
        <Text style={styles.Text_455_983}>CONTACT NO.: 09858879181</Text>
      </View>
      <View style={styles.View_455_984}>
        <Text style={styles.Text_455_984}>
          ADDRESS : SAN ANTONIO STREET BAGONG DAAN, LIWAWAW NAVOTAS CITY
        </Text>
      </View>
      <View style={styles.View_455_985}>
        <Text style={styles.Text_455_985}>NAME : John Renzo D. T-Rex</Text>
      </View>
      <View style={styles.View_455_986}>
        <Text style={styles.Text_455_986}>Payment Methods</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_455_987}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("471_813"))
        }
      >
        <View style={styles.View_455_988} />
        <View style={styles.View_455_989}>
          <Text style={styles.Text_455_989}>**** *** **81</Text>
        </View>
        <View style={styles.View_455_990}>
          <Text style={styles.Text_455_990}>G-CASH</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/811f5286-4b8c-4e85-a2f2-54acde146bf7"
          }}
          style={styles.ImageBackground_455_991}
        />
        <View style={styles.View_455_992}>
          <Text style={styles.Text_455_992}>&gt;</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_455_993}>
        <View style={styles.View_455_994} />
        <View style={styles.View_455_995}>
          <Text style={styles.Text_455_995}>&gt;</Text>
        </View>
        <View style={styles.View_455_996}>
          <Text style={styles.Text_455_996}>**** *** **81</Text>
        </View>
        <View style={styles.View_455_997}>
          <Text style={styles.Text_455_997}>PayMaya</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/17db07aa-87b1-4d08-9044-a18d664b6137"
          }}
          style={styles.ImageBackground_455_998}
        />
      </View>
      <View style={styles.View_455_999}>
        <View style={styles.View_455_1000} />
        <View style={styles.View_455_1001}>
          <Text style={styles.Text_455_1001}>&gt;</Text>
        </View>
        <View style={styles.View_455_1002}>
          <Text style={styles.Text_455_1002}>Cash on Delivery</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/80ed81e1-999a-4977-b8d0-125d76b893cd"
          }}
          style={styles.ImageBackground_455_1003}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bfb9c517-ee53-4027-a287-a49b49647dee"
        }}
        style={styles.ImageBackground_455_1004}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9080a0a5-6623-4551-9216-006464b9760c"
        }}
        style={styles.ImageBackground_455_1005}
      />
      <View style={styles.View_455_1006}>
        <Text style={styles.Text_455_1006}>₱99.00</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_455_1046}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("4_3"))
        }
      >
        <View style={styles.View_455_1007} />
        <View style={styles.View_455_1008}>
          <Text style={styles.Text_455_1008}>PLACE ORDER</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_455_1009}>
        <View style={styles.View_I455_1009_2_708} />
        <View style={styles.View_I455_1009_2_709}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1b8160de-4fec-4ffc-9eb2-26ba756cba9b"
            }}
            style={styles.ImageBackground_I455_1009_2_710}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6ea1f536-c4c9-400c-831f-b0c09eecec8a"
            }}
            style={styles.ImageBackground_I455_1009_2_711}
          />
          <View style={styles.View_I455_1009_2_712}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6f6252e8-bb51-4ba9-b986-8cb9d813adcd"
              }}
              style={styles.ImageBackground_I455_1009_2_712_1_207}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7347b16d-48e2-4490-9958-4bfb0c700fc4"
              }}
              style={styles.ImageBackground_I455_1009_2_712_1_212}
            />
            <View style={styles.View_I455_1009_2_712_1_213} />
          </View>
        </View>
        <View style={styles.View_I455_1009_2_713} />
        <View style={styles.View_I455_1009_2_714}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/df2a3630-1f21-46e4-8217-721b0d2478d9"
            }}
            style={styles.ImageBackground_I455_1009_2_714_1_260}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(242, 242, 242, 1)" },
  View_2: { height: hp("127%") },
  View_455_977: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("92%"),
    minHeight: hp("92%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("36%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_455_978: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("118%"),
    justifyContent: "flex-start"
  },
  Text_455_978: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_455_979: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("119%"),
    justifyContent: "flex-start"
  },
  Text_455_979: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_455_980: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("109%"),
    justifyContent: "flex-start"
  },
  Text_455_980: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_455_981: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("104%"),
    justifyContent: "flex-start"
  },
  Text_455_981: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_455_982: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("110%"),
    justifyContent: "flex-start"
  },
  Text_455_982: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_455_983: {
    width: wp("49%"),
    minWidth: wp("49%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("95%"),
    justifyContent: "flex-start"
  },
  Text_455_983: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_455_984: {
    width: wp("96%"),
    minWidth: wp("96%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("88%"),
    justifyContent: "flex-start"
  },
  Text_455_984: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_455_985: {
    width: wp("48%"),
    minWidth: wp("48%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("85%"),
    justifyContent: "flex-start"
  },
  Text_455_985: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_455_986: {
    width: wp("60%"),
    minWidth: wp("60%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_455_986: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_455_987: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("39%")
  },
  View_455_988: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(242, 242, 242, 1)"
  },
  View_455_989: {
    width: wp("50%"),
    minWidth: wp("50%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_455_989: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_455_990: {
    width: wp("50%"),
    minWidth: wp("50%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_455_990: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_455_991: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    resizeMode: "cover"
  },
  View_455_992: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_455_992: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_455_993: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("52%")
  },
  View_455_994: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(242, 242, 242, 1)"
  },
  View_455_995: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_455_995: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_455_996: {
    width: wp("50%"),
    minWidth: wp("50%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_455_996: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_455_997: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_455_997: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_455_998: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    resizeMode: "cover"
  },
  View_455_999: {
    width: wp("98%"),
    minWidth: wp("98%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("63%")
  },
  View_455_1000: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    backgroundColor: "rgba(254, 197, 126, 1)"
  },
  View_455_1001: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_455_1001: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_455_1002: {
    width: wp("48%"),
    minWidth: wp("48%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_455_1002: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_455_1003: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_455_1004: {
    width: wp("99%"),
    minWidth: wp("99%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("81%")
  },
  ImageBackground_455_1005: {
    width: wp("56%"),
    minWidth: wp("56%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-9%"),
    top: hp("7%"),
    resizeMode: "cover"
  },
  View_455_1006: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("104%"),
    justifyContent: "flex-start"
  },
  Text_455_1006: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_455_1046: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("117%")
  },
  View_455_1007: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 197, 126, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_455_1008: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_455_1008: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_455_1009: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 245, 1)",
    overflow: "hidden"
  },
  View_I455_1009_2_708: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I455_1009_2_709: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I455_1009_2_710: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I455_1009_2_711: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I455_1009_2_712: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I455_1009_2_712_1_207: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  ImageBackground_I455_1009_2_712_1_212: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I455_1009_2_712_1_213: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I455_1009_2_713: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I455_1009_2_714: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I455_1009_2_714_1_260: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
