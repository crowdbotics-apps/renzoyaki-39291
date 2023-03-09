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
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d941c9b8-577a-4ea7-abea-04a197ad9189"
        }}
        style={styles.ImageBackground_12_42}
      />
      <View style={styles.View_12_81}>
        <Text style={styles.Text_12_81}>₱129.00</Text>
      </View>
      <View style={styles.View_12_80}>
        <Text style={styles.Text_12_80}>TOTAL: </Text>
      </View>
      <View style={styles.View_12_79}>
        <Text style={styles.Text_12_79}>₱30.00</Text>
      </View>
      <View style={styles.View_12_78}>
        <Text style={styles.Text_12_78}>SUB-TOTAL</Text>
      </View>
      <View style={styles.View_12_74}>
        <Text style={styles.Text_12_74}>DELIVERY FEE</Text>
      </View>
      <View style={styles.View_12_73}>
        <Text style={styles.Text_12_73}>CONTACT NO.: 09858879181</Text>
      </View>
      <View style={styles.View_12_72}>
        <Text style={styles.Text_12_72}>
          ADDRESS : SAN ANTONIO STREET BAGONG DAAN, LIWAWAW NAVOTAS CITY
        </Text>
      </View>
      <View style={styles.View_12_71}>
        <Text style={styles.Text_12_71}>NAME : John Renzo D. T-Rex</Text>
      </View>
      <View style={styles.View_12_45}>
        <Text style={styles.Text_12_45}>Shipping Info</Text>
      </View>
      <View style={styles.View_54_2}>
        <View style={styles.View_12_47} />
        <View style={styles.View_12_48}>
          <Text style={styles.Text_12_48}>
            Estimate delivery time(5 - 10 mins)
          </Text>
        </View>
        <View style={styles.View_12_49}>
          <Text style={styles.Text_12_49}>GRAB</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/21cb83b1-b618-47a2-92d3-35f0ab4951e4"
          }}
          style={styles.ImageBackground_12_53}
        />
        <View style={styles.View_12_54}>
          <Text style={styles.Text_12_54}>&gt;</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_54_3}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("455_914"))
        }
      >
        <View style={styles.View_12_55} />
        <View style={styles.View_12_62}>
          <Text style={styles.Text_12_62}>&gt;</Text>
        </View>
        <View style={styles.View_12_61}>
          <Text style={styles.Text_12_61}>
            Estimate delivery time (5 - 15 mins)
          </Text>
        </View>
        <View style={styles.View_12_60}>
          <Text style={styles.Text_12_60}>FOOD PANDA</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d0e7ddc4-bce4-4725-83af-f6ddc00f21fc"
          }}
          style={styles.ImageBackground_12_64}
        />
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a55576bf-4233-420f-bfc5-bad209c07b4b"
        }}
        style={styles.ImageBackground_12_65}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0314e98e-a875-4c05-8e2d-f53cc6a0bee0"
        }}
        style={styles.ImageBackground_12_67}
      />
      <View style={styles.View_12_77}>
        <Text style={styles.Text_12_77}>₱99.00</Text>
      </View>
      <View style={styles.View_12_82} />
      <View style={styles.View_12_83}>
        <Text style={styles.Text_12_83}>NEXT</Text>
      </View>
      <View style={styles.View_455_710}>
        <View style={styles.View_I455_710_2_708} />
        <View style={styles.View_I455_710_2_709}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4f3935c4-2751-4a20-8187-a122dbff601b"
            }}
            style={styles.ImageBackground_I455_710_2_710}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/61ec67b5-515e-41d4-a2c8-c05b72c8cd25"
            }}
            style={styles.ImageBackground_I455_710_2_711}
          />
          <View style={styles.View_I455_710_2_712}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/07f477f7-8ae4-4e89-b3a1-f6534e232796"
              }}
              style={styles.ImageBackground_I455_710_2_712_1_207}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bb486ac9-992f-4ee2-9851-04d495849750"
              }}
              style={styles.ImageBackground_I455_710_2_712_1_212}
            />
            <View style={styles.View_I455_710_2_712_1_213} />
          </View>
        </View>
        <View style={styles.View_I455_710_2_713} />
        <View style={styles.View_I455_710_2_714}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f96e0d93-26c4-4fbf-8585-1fecd8892e5d"
            }}
            style={styles.ImageBackground_I455_710_2_714_1_260}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(242, 242, 242, 1)" },
  View_2: { height: hp("127%") },
  ImageBackground_12_42: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("92%"),
    minHeight: hp("92%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36%")
  },
  View_12_81: {
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
  Text_12_81: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_80: {
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
  Text_12_80: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_79: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("108%"),
    justifyContent: "flex-start"
  },
  Text_12_79: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_78: {
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
  Text_12_78: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_74: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("109%"),
    justifyContent: "flex-start"
  },
  Text_12_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_73: {
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
  Text_12_73: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_72: {
    width: wp("96%"),
    minWidth: wp("96%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("89%"),
    justifyContent: "flex-start"
  },
  Text_12_72: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_71: {
    width: wp("48%"),
    minWidth: wp("48%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("86%"),
    justifyContent: "flex-start"
  },
  Text_12_71: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_45: {
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
  Text_12_45: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 37,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_54_2: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("44%")
  },
  View_12_47: {
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
  View_12_48: {
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
  Text_12_48: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_49: {
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
  Text_12_49: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_12_53: {
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
  View_12_54: {
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
  Text_12_54: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_54_3: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("62%")
  },
  View_12_55: {
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
  View_12_62: {
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
  Text_12_62: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_61: {
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
  Text_12_61: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_60: {
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
  Text_12_60: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_12_64: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  ImageBackground_12_65: {
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
  ImageBackground_12_67: {
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
  View_12_77: {
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
  Text_12_77: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_82: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("117%"),
    backgroundColor: "rgba(254, 197, 126, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_12_83: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("118%"),
    justifyContent: "flex-start"
  },
  Text_12_83: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_455_710: {
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
  View_I455_710_2_708: {
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
  View_I455_710_2_709: {
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
  ImageBackground_I455_710_2_710: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I455_710_2_711: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I455_710_2_712: {
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
  ImageBackground_I455_710_2_712_1_207: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  ImageBackground_I455_710_2_712_1_212: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I455_710_2_712_1_213: {
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
  View_I455_710_2_713: {
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
  View_I455_710_2_714: {
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
  ImageBackground_I455_710_2_714_1_260: {
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
