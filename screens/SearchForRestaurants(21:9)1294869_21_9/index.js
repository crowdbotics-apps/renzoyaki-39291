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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cbbcd648-f950-4fab-8366-5b83bb692f2e"
        }}
        style={styles.ImageBackground_21_34}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d4080788-cd26-40e1-b0ee-7619094f4079"
        }}
        style={styles.ImageBackground_21_33}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4fe94315-e54a-4458-9c5d-8cf635b266db"
        }}
        style={styles.ImageBackground_21_14}
      />
      <View style={styles.View_21_19} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/212603c1-3933-4689-a6fc-f0b039e52d68"
        }}
        style={styles.ImageBackground_21_21}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f2e9ba0f-07d9-4f37-83ca-2605cc3dc56e"
        }}
        style={styles.ImageBackground_21_24}
      />
      <View style={styles.View_21_25}>
        <Text style={styles.Text_21_25}>TAKAWYAKI</Text>
      </View>
      <View style={styles.View_21_27} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/31216834-6dfe-4dcf-a2fd-62ce27ed80f8"
        }}
        style={styles.ImageBackground_21_28}
      />
      <View style={styles.View_21_29} />
      <View style={styles.View_21_30}>
        <Text style={styles.Text_21_30}>Nearby</Text>
      </View>
      <View style={styles.View_21_31} />
      <View style={styles.View_21_32}>
        <Text style={styles.Text_21_32}>FREE Delivery!</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_72_289}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("6_58"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e05e89ad-d797-4f1c-a971-15231db9ac74"
          }}
          style={styles.ImageBackground_21_13}
        />
        <View style={styles.View_21_36}>
          <Text style={styles.Text_21_36}>FREE Delivery!</Text>
        </View>
        <View style={styles.View_21_37}>
          <Text style={styles.Text_21_37}>Japanese • Snacks • Quick Bites</Text>
        </View>
        <View style={styles.View_21_38}>
          <Text style={styles.Text_21_38}>35 mins • 1.5 km • 4.6</Text>
        </View>
        <View style={styles.View_21_35}>
          <Text style={styles.Text_21_35}>TAKAWYAKI - SM Novaliches</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_21_40}>
        <Text style={styles.Text_21_40}>FREE Delivery!</Text>
      </View>
      <View style={styles.View_21_41}>
        <Text style={styles.Text_21_41}>Japanese • Snacks • Quick Bites</Text>
      </View>
      <View style={styles.View_21_42}>
        <Text style={styles.Text_21_42}>59 mins • 1.5 km • 4.4</Text>
      </View>
      <View style={styles.View_21_43}>
        <Text style={styles.Text_21_43}>TAKAWYAKI - Sauyo</Text>
      </View>
      <View style={styles.View_21_45}>
        <Text style={styles.Text_21_45}>FREE Delivery!</Text>
      </View>
      <View style={styles.View_21_46}>
        <Text style={styles.Text_21_46}>Japanese • Snacks • Quick Bites</Text>
      </View>
      <View style={styles.View_21_47}>
        <Text style={styles.Text_21_47}>1hr 20 mins • 1.5 km • 4.5</Text>
      </View>
      <View style={styles.View_21_48}>
        <Text style={styles.Text_21_48}>TAKAWYAKI - Fairview</Text>
      </View>
      <View style={styles.View_21_50}>
        <Text style={styles.Text_21_50}>FREE Delivery!</Text>
      </View>
      <View style={styles.View_21_51}>
        <Text style={styles.Text_21_51}>Japanese • Snacks • Quick Bites</Text>
      </View>
      <View style={styles.View_21_52}>
        <Text style={styles.Text_21_52}>2 hrs • 1.5 km • 4.4</Text>
      </View>
      <View style={styles.View_21_53}>
        <Text style={styles.Text_21_53}>TAKAWYAKI - Bagumbong</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/722de1f4-7742-4fc7-853f-79f8b624083a"
        }}
        style={styles.ImageBackground_21_55}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/28d8f882-09d2-4e2d-80d8-844f6dfe1ae2"
        }}
        style={styles.ImageBackground_21_56}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0cc547a9-4068-41eb-9292-3350853498dc"
        }}
        style={styles.ImageBackground_21_57}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4a7a2764-51a8-4abb-9ede-eb5a1ccf81e9"
        }}
        style={styles.ImageBackground_21_58}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/288aba7c-7ef2-4395-82ae-7838d8e072c8"
        }}
        style={styles.ImageBackground_21_59}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/04a06003-f8b0-46e1-bb88-2f66f2c27064"
        }}
        style={styles.ImageBackground_21_60}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c68c3f88-a8eb-4082-abc7-0422c6d28322"
        }}
        style={styles.ImageBackground_21_61}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4df6b517-ea70-4e28-b8e9-9abdd1d74e46"
        }}
        style={styles.ImageBackground_21_63}
      />
      <View style={styles.View_455_846}>
        <View style={styles.View_I455_846_2_708} />
        <View style={styles.View_I455_846_2_709}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/89339774-0c33-4a17-820a-7fda55c5e2a7"
            }}
            style={styles.ImageBackground_I455_846_2_710}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/38079cb8-834d-493c-90aa-e26fb4cb0552"
            }}
            style={styles.ImageBackground_I455_846_2_711}
          />
          <View style={styles.View_I455_846_2_712}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cc371d4d-df86-41be-a1f0-1b9fcf6f112b"
              }}
              style={styles.ImageBackground_I455_846_2_712_1_207}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/24f2ec73-8850-480d-8113-71593f561689"
              }}
              style={styles.ImageBackground_I455_846_2_712_1_212}
            />
            <View style={styles.View_I455_846_2_712_1_213} />
          </View>
        </View>
        <View style={styles.View_I455_846_2_713} />
        <View style={styles.View_I455_846_2_714}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c30a3a95-fc8d-4439-9994-5bd151443e33"
            }}
            style={styles.ImageBackground_I455_846_2_714_1_260}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(245, 245, 245, 1)" },
  View_2: { height: hp("127%") },
  ImageBackground_21_34: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("96%"),
    resizeMode: "cover"
  },
  ImageBackground_21_33: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("69%"),
    resizeMode: "cover"
  },
  ImageBackground_21_14: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("42%"),
    resizeMode: "cover"
  },
  View_21_19: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("9%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  ImageBackground_21_21: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("11%")
  },
  ImageBackground_21_24: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("7%"),
    resizeMode: "cover"
  },
  View_21_25: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_21_25: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_27: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("15%"),
    backgroundColor: "rgba(45, 45, 45, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  ImageBackground_21_28: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("14%"),
    resizeMode: "cover"
  },
  View_21_29: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("15%"),
    backgroundColor: "rgba(45, 45, 45, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  View_21_30: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_21_30: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_31: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("15%"),
    backgroundColor: "rgba(45, 45, 45, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  View_21_32: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_21_32: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_72_289: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("15%")
  },
  ImageBackground_21_13: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_21_36: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_21_36: {
    color: "rgba(255, 145, 44, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_37: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_21_37: {
    color: "rgba(112, 110, 110, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_38: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_21_38: {
    color: "rgba(112, 110, 110, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_35: {
    width: wp("49%"),
    minWidth: wp("49%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_21_35: {
    color: "rgba(54, 54, 54, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_40: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("49%"),
    justifyContent: "flex-start"
  },
  Text_21_40: {
    color: "rgba(255, 145, 44, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_41: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("55%"),
    justifyContent: "flex-start"
  },
  Text_21_41: {
    color: "rgba(112, 110, 110, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_42: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("53%"),
    justifyContent: "flex-start"
  },
  Text_21_42: {
    color: "rgba(112, 110, 110, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_43: {
    width: wp("49%"),
    minWidth: wp("49%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("51%"),
    justifyContent: "flex-start"
  },
  Text_21_43: {
    color: "rgba(54, 54, 54, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_45: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("76%"),
    justifyContent: "flex-start"
  },
  Text_21_45: {
    color: "rgba(255, 145, 44, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_46: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("83%"),
    justifyContent: "flex-start"
  },
  Text_21_46: {
    color: "rgba(112, 110, 110, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_47: {
    width: wp("36%"),
    minWidth: wp("36%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("80%"),
    justifyContent: "flex-start"
  },
  Text_21_47: {
    color: "rgba(112, 110, 110, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_48: {
    width: wp("49%"),
    minWidth: wp("49%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("78%"),
    justifyContent: "flex-start"
  },
  Text_21_48: {
    color: "rgba(54, 54, 54, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_50: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("103%"),
    justifyContent: "flex-start"
  },
  Text_21_50: {
    color: "rgba(255, 145, 44, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_51: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("110%"),
    justifyContent: "flex-start"
  },
  Text_21_51: {
    color: "rgba(112, 110, 110, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_52: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("108%"),
    justifyContent: "flex-start"
  },
  Text_21_52: {
    color: "rgba(112, 110, 110, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_53: {
    width: wp("49%"),
    minWidth: wp("49%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("105%"),
    justifyContent: "flex-start"
  },
  Text_21_53: {
    color: "rgba(54, 54, 54, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_21_55: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("27%")
  },
  ImageBackground_21_56: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("53%")
  },
  ImageBackground_21_57: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("80%")
  },
  ImageBackground_21_58: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("107%")
  },
  ImageBackground_21_59: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("99%")
  },
  ImageBackground_21_60: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("72%")
  },
  ImageBackground_21_61: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("45%")
  },
  ImageBackground_21_63: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("7%"),
    resizeMode: "cover"
  },
  View_455_846: {
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
  View_I455_846_2_708: {
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
  View_I455_846_2_709: {
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
  ImageBackground_I455_846_2_710: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I455_846_2_711: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I455_846_2_712: {
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
  ImageBackground_I455_846_2_712_1_207: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  ImageBackground_I455_846_2_712_1_212: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I455_846_2_712_1_213: {
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
  View_I455_846_2_713: {
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
  View_I455_846_2_714: {
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
  ImageBackground_I455_846_2_714_1_260: {
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
