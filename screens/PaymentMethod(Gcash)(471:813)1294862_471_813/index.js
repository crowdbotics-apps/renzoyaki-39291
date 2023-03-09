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
      <View style={styles.View_471_814} />
      <View style={styles.View_471_815}>
        <Text style={styles.Text_471_815}>₱129.00</Text>
      </View>
      <View style={styles.View_471_816}>
        <Text style={styles.Text_471_816}>TOTAL: </Text>
      </View>
      <View style={styles.View_471_817}>
        <Text style={styles.Text_471_817}>₱30.00</Text>
      </View>
      <View style={styles.View_471_818}>
        <Text style={styles.Text_471_818}>SUB-TOTAL</Text>
      </View>
      <View style={styles.View_471_819}>
        <Text style={styles.Text_471_819}>DELIVERY FEE</Text>
      </View>
      <View style={styles.View_471_820}>
        <Text style={styles.Text_471_820}>CONTACT NO.: 09858879181</Text>
      </View>
      <View style={styles.View_471_821}>
        <Text style={styles.Text_471_821}>
          ADDRESS : SAN ANTONIO STREET BAGONG DAAN, LIWAWAW NAVOTAS CITY
        </Text>
      </View>
      <View style={styles.View_471_822}>
        <Text style={styles.Text_471_822}>NAME : John Renzo D. T-Rex</Text>
      </View>
      <View style={styles.View_471_823}>
        <Text style={styles.Text_471_823}>Payment Methods</Text>
      </View>
      <View style={styles.View_471_824}>
        <View style={styles.View_471_825} />
        <View style={styles.View_471_826}>
          <Text style={styles.Text_471_826}>**** *** **81</Text>
        </View>
        <View style={styles.View_471_827}>
          <Text style={styles.Text_471_827}>G-CASH</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3051afad-7afd-4cae-ad15-926274a2c5a0"
          }}
          style={styles.ImageBackground_471_828}
        />
        <View style={styles.View_471_829}>
          <Text style={styles.Text_471_829}>&gt;</Text>
        </View>
      </View>
      <View style={styles.View_471_830}>
        <View style={styles.View_471_831} />
        <View style={styles.View_471_832}>
          <Text style={styles.Text_471_832}>&gt;</Text>
        </View>
        <View style={styles.View_471_833}>
          <Text style={styles.Text_471_833}>**** *** **81</Text>
        </View>
        <View style={styles.View_471_834}>
          <Text style={styles.Text_471_834}>PayMaya</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/700aab01-bb02-437f-a188-cfba6e3b89e0"
          }}
          style={styles.ImageBackground_471_835}
        />
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_471_836}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("455_976"))
        }
      >
        <View style={styles.View_471_837} />
        <View style={styles.View_471_838}>
          <Text style={styles.Text_471_838}>&gt;</Text>
        </View>
        <View style={styles.View_471_839}>
          <Text style={styles.Text_471_839}>Cash on Delivery</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cc3b988a-a00b-41d0-b027-ee84fa38b7ab"
          }}
          style={styles.ImageBackground_471_840}
        />
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1b2f8556-2614-44a9-97c3-6f31f3a496c3"
        }}
        style={styles.ImageBackground_471_841}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/445e146e-77f5-4734-b614-8619cd10310a"
        }}
        style={styles.ImageBackground_471_842}
      />
      <View style={styles.View_471_843}>
        <Text style={styles.Text_471_843}>₱99.00</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_471_844}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("471_880"))
        }
      />
      <View style={styles.View_471_845}>
        <Text style={styles.Text_471_845}>PLACE ORDER</Text>
      </View>
      <View style={styles.View_471_846}>
        <View style={styles.View_I471_846_2_708} />
        <View style={styles.View_I471_846_2_709}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/36801a0f-c99a-4dd6-a867-bc69c1ca27a6"
            }}
            style={styles.ImageBackground_I471_846_2_710}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0854ef19-882a-4647-95e7-f08f98972994"
            }}
            style={styles.ImageBackground_I471_846_2_711}
          />
          <View style={styles.View_I471_846_2_712}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e9286938-e154-4c18-aa26-048c486d9e03"
              }}
              style={styles.ImageBackground_I471_846_2_712_1_207}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/58430365-172e-41e1-a09f-09a19731fd1b"
              }}
              style={styles.ImageBackground_I471_846_2_712_1_212}
            />
            <View style={styles.View_I471_846_2_712_1_213} />
          </View>
        </View>
        <View style={styles.View_I471_846_2_713} />
        <View style={styles.View_I471_846_2_714}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d9aa8a9e-9860-4bd2-80f6-b4ac8ecf6633"
            }}
            style={styles.ImageBackground_I471_846_2_714_1_260}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(242, 242, 242, 1)" },
  View_2: { height: hp("127%") },
  View_471_814: {
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
  View_471_815: {
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
  Text_471_815: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_816: {
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
  Text_471_816: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_817: {
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
  Text_471_817: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_818: {
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
  Text_471_818: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_819: {
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
  Text_471_819: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_820: {
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
  Text_471_820: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_821: {
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
  Text_471_821: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_822: {
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
  Text_471_822: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_823: {
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
  Text_471_823: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_824: {
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
  View_471_825: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 197, 126, 1)"
  },
  View_471_826: {
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
  Text_471_826: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_827: {
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
  Text_471_827: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_471_828: {
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
  View_471_829: {
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
  Text_471_829: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_830: {
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
  View_471_831: {
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
  View_471_832: {
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
  Text_471_832: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_833: {
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
  Text_471_833: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_834: {
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
  Text_471_834: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_471_835: {
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
  TouchableOpacity_471_836: {
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
  View_471_837: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    backgroundColor: "rgba(242, 242, 242, 1)"
  },
  View_471_838: {
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
  Text_471_838: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_839: {
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
  Text_471_839: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_471_840: {
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
  ImageBackground_471_841: {
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
  ImageBackground_471_842: {
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
  View_471_843: {
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
  Text_471_843: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_471_844: {
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
  View_471_845: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("119%"),
    justifyContent: "flex-start"
  },
  Text_471_845: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_846: {
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
  View_I471_846_2_708: {
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
  View_I471_846_2_709: {
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
  ImageBackground_I471_846_2_710: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I471_846_2_711: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I471_846_2_712: {
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
  ImageBackground_I471_846_2_712_1_207: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  ImageBackground_I471_846_2_712_1_212: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I471_846_2_712_1_213: {
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
  View_I471_846_2_713: {
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
  View_I471_846_2_714: {
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
  ImageBackground_I471_846_2_714_1_260: {
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
