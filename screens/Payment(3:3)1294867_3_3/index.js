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
      <View style={styles.View_3_8}>
        <Text style={styles.Text_3_8}>YOUR CART</Text>
      </View>
      <View style={styles.View_12_14} />
      <View style={styles.View_12_15}>
        <Text style={styles.Text_12_15}>Takoyaki Veggie (4pcs.) ₱ 65.00 ▒</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a603de24-01b6-4aa4-807a-761414625b16"
        }}
        style={styles.ImageBackground_12_16}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d7f89ad1-f27a-4be2-b627-0713c5cc6636"
        }}
        style={styles.ImageBackground_12_17}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bb8077a7-3415-4e06-8d86-bee0daab792f"
        }}
        style={styles.ImageBackground_12_18}
      />
      <View style={styles.View_12_19}>
        <Text style={styles.Text_12_19}>1</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f5a115e0-eeab-4537-88ad-0ce0e7ba3ab9"
        }}
        style={styles.ImageBackground_12_20}
      />
      <View style={styles.View_12_21}>
        <Text style={styles.Text_12_21}>-</Text>
      </View>
      <View style={styles.View_12_22}>
        <Text style={styles.Text_12_22}>+</Text>
      </View>
      <View style={styles.View_12_25} />
      <View style={styles.View_12_39} />
      <View style={styles.View_12_40}>
        <Text style={styles.Text_12_40}>+</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d971ba5b-9a92-4378-a167-56a4b23310f1"
        }}
        style={styles.ImageBackground_12_32}
      />
      <View style={styles.View_12_33}>
        <Text style={styles.Text_12_33}>Lipton Ice Tea ₱ 25.00</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fca64ad5-a8bb-4eaf-97fd-32103e53dc9f"
        }}
        style={styles.ImageBackground_12_26}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4959a38a-4093-4ac3-b42b-5fe9a8b54e92"
        }}
        style={styles.ImageBackground_12_27}
      />
      <View style={styles.View_12_28}>
        <Text style={styles.Text_12_28}>1</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5b586eac-1191-4281-b12a-94014af68b3f"
        }}
        style={styles.ImageBackground_12_29}
      />
      <View style={styles.View_12_30}>
        <Text style={styles.Text_12_30}>-</Text>
      </View>
      <View style={styles.View_12_31}>
        <Text style={styles.Text_12_31}>+</Text>
      </View>
      <View style={styles.View_12_12} />
      <View style={styles.View_12_36}>
        <Text style={styles.Text_12_36}>TOTAL ₱99.00</Text>
      </View>
      <View style={styles.View_12_35}>
        <Text style={styles.Text_12_35}>Tax ₱9.00</Text>
      </View>
      <View style={styles.View_12_34}>
        <Text style={styles.Text_12_34}>Subtotal ₱90.00</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_12_37}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("12_41"))
        }
      />
      <View style={styles.View_12_38}>
        <Text style={styles.Text_12_38}>NEXT</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b566234c-8251-477b-8ba0-d832815554eb"
        }}
        style={styles.ImageBackground_12_66}
      />
      <View style={styles.View_455_744}>
        <View style={styles.View_I455_744_2_708} />
        <View style={styles.View_I455_744_2_709}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b207c3e7-ebc1-4816-b79e-4d9d02fa7bce"
            }}
            style={styles.ImageBackground_I455_744_2_710}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/32a46d7d-ad39-4552-a809-c03d6c581cbc"
            }}
            style={styles.ImageBackground_I455_744_2_711}
          />
          <View style={styles.View_I455_744_2_712}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7482e154-a538-49d1-a01e-3029e3d80f46"
              }}
              style={styles.ImageBackground_I455_744_2_712_1_207}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/061c0f84-a44b-4ba0-963f-eb92bb7a3746"
              }}
              style={styles.ImageBackground_I455_744_2_712_1_212}
            />
            <View style={styles.View_I455_744_2_712_1_213} />
          </View>
        </View>
        <View style={styles.View_I455_744_2_713} />
        <View style={styles.View_I455_744_2_714}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3b4f4543-2650-432a-b868-316d0ead87f0"
            }}
            style={styles.ImageBackground_I455_744_2_714_1_260}
          />
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(242, 242, 242, 1)" },
  View_2: { height: hp("127%") },
  View_3_8: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_3_8: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 36,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_14: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("42%"),
    backgroundColor: "rgba(255, 249, 249, 1)"
  },
  View_12_15: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("43%"),
    justifyContent: "flex-start"
  },
  Text_12_15: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_12_16: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("44%"),
    resizeMode: "cover"
  },
  ImageBackground_12_17: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("46%")
  },
  ImageBackground_12_18: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("46%")
  },
  View_12_19: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("46%"),
    justifyContent: "flex-start"
  },
  Text_12_19: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_12_20: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("46%")
  },
  View_12_21: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("46%"),
    justifyContent: "flex-start"
  },
  Text_12_21: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_22: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("46%"),
    justifyContent: "flex-start"
  },
  Text_12_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_25: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("58%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_12_39: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("75%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_12_40: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("72%"),
    justifyContent: "flex-start"
  },
  Text_12_40: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 77,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_12_32: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("60%"),
    resizeMode: "cover"
  },
  View_12_33: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("62%"),
    justifyContent: "flex-start"
  },
  Text_12_33: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_12_26: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("64%")
  },
  ImageBackground_12_27: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("64%")
  },
  View_12_28: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("65%"),
    justifyContent: "flex-start"
  },
  Text_12_28: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_12_29: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("64%")
  },
  View_12_30: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("65%"),
    justifyContent: "flex-start"
  },
  Text_12_30: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_31: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("65%"),
    justifyContent: "flex-start"
  },
  Text_12_31: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_12: {
    width: wp("101%"),
    minWidth: wp("101%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("91%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_12_36: {
    width: wp("89%"),
    minWidth: wp("89%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("110%"),
    justifyContent: "flex-start"
  },
  Text_12_36: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_35: {
    width: wp("93%"),
    minWidth: wp("93%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("103%"),
    justifyContent: "flex-start"
  },
  Text_12_35: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_34: {
    width: wp("90%"),
    minWidth: wp("90%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("95%"),
    justifyContent: "flex-start"
  },
  Text_12_34: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_12_37: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("118%"),
    backgroundColor: "rgba(254, 197, 126, 1)",
    borderColor: "rgba(255, 255, 0, 1)",
    borderWidth: 1
  },
  View_12_38: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("118%"),
    justifyContent: "flex-start"
  },
  Text_12_38: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_12_66: {
    width: wp("56%"),
    minWidth: wp("56%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-8%"),
    top: hp("7%"),
    resizeMode: "cover"
  },
  View_455_744: {
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
  View_I455_744_2_708: {
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
  View_I455_744_2_709: {
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
  ImageBackground_I455_744_2_710: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I455_744_2_711: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I455_744_2_712: {
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
  ImageBackground_I455_744_2_712_1_207: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  ImageBackground_I455_744_2_712_1_212: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I455_744_2_712_1_213: {
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
  View_I455_744_2_713: {
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
  View_I455_744_2_714: {
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
  ImageBackground_I455_744_2_714_1_260: {
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
