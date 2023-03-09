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
      <View style={styles.View_455_506}>
        <View style={styles.View_I455_506_2_708} />
        <View style={styles.View_I455_506_2_709}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/51c779fe-fbde-416d-b502-d4da68edc47b"
            }}
            style={styles.ImageBackground_I455_506_2_710}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/20c288d8-68fc-4da0-981a-586861f557f1"
            }}
            style={styles.ImageBackground_I455_506_2_711}
          />
          <View style={styles.View_I455_506_2_712}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b9941621-7286-46a2-bd0e-a453ba676526"
              }}
              style={styles.ImageBackground_I455_506_2_712_1_207}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f9d3b424-830d-4ce1-aa73-7b92e5c24c04"
              }}
              style={styles.ImageBackground_I455_506_2_712_1_212}
            />
            <View style={styles.View_I455_506_2_712_1_213} />
          </View>
        </View>
        <View style={styles.View_I455_506_2_713} />
        <View style={styles.View_I455_506_2_714}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f08857b0-63f9-4750-8423-88ae9cf7c60f"
            }}
            style={styles.ImageBackground_I455_506_2_714_1_260}
          />
        </View>
      </View>
      <View style={styles.View_452_88} />
      <View style={styles.View_452_89}>
        <Text style={styles.Text_452_89}>takoyaki’s</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ab7d4b84-4a59-480b-9ba1-07d268a7217e"
        }}
        style={styles.ImageBackground_452_90}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/be13dd79-a86d-40e2-ad44-9fbe3ca549f7"
        }}
        style={styles.ImageBackground_452_91}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5c08d9ad-3599-4272-b0fe-1c20863a2e66"
        }}
        style={styles.ImageBackground_452_92}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b9c62fd3-1153-436a-8b9f-c5009e2f2a6b"
        }}
        style={styles.ImageBackground_452_93}
      />
      <View style={styles.View_452_94} />
      <View style={styles.View_452_95}>
        <View style={styles.View_452_96} />
      </View>
      <View style={styles.View_452_97} />
      <View style={styles.View_452_98}>
        <Text style={styles.Text_452_98}>select sizes:</Text>
      </View>
      <View style={styles.View_452_99}>
        <Text style={styles.Text_452_99}>Takoyaki veggie</Text>
      </View>
      <View style={styles.View_452_100}>
        <Text style={styles.Text_452_100}>Regular (4pcs)</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b123f9ce-09e4-4578-a1ee-7b48db36842c"
        }}
        style={styles.ImageBackground_452_101}
      />
      <View style={styles.View_452_102}>
        <Text style={styles.Text_452_102}>Recipe:</Text>
      </View>
      <View style={styles.View_452_103} />
      <View style={styles.View_452_104}>
        <Text style={styles.Text_452_104}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit, quis platea
          praesent urna fermentum scelerisque torquent, class conubiaac pretium
          arcu convallis. Nascetur nisi ultricies musluctus quis lacus nec diam
          eu metus inceptos, malesuada conubia faucibus habitant curabitur justo
          scelerisque magnis quam sem magna egestas
        </Text>
      </View>
      <View style={styles.View_452_105} />
      <View style={styles.View_452_106}>
        <Text style={styles.Text_452_106}>add to cart</Text>
      </View>
      <View style={styles.View_452_107} />
      <View style={styles.View_452_108}>
        <Text style={styles.Text_452_108}>buy now</Text>
      </View>
      <View style={styles.View_452_109}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4a7bea42-a20b-4da4-bd89-eeeb07e4c1a6"
          }}
          style={styles.ImageBackground_452_110}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/18e632df-70a9-4742-b68a-54840876e6da"
          }}
          style={styles.ImageBackground_452_111}
        />
      </View>
      <View style={styles.View_452_112} />
      <View style={styles.View_452_113}>
        <Text style={styles.Text_452_113}>Lipton Iced Tea (250 ml)</Text>
      </View>
      <View style={styles.View_452_114}>
        <Text style={styles.Text_452_114}>Drinks:</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3c7c6a84-6bc2-4ad7-b2cf-b2c9f614c32c"
        }}
        style={styles.ImageBackground_452_115}
      />
      <View style={styles.View_452_122}>
        <View style={styles.View_452_117} />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8d9bbf6b-5801-48bf-b6b3-d47d668ffeef"
          }}
          style={styles.TouchableOpacity_452_120}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("444_39"))
          }
        />
        <TouchableOpacity
          style={styles.TouchableOpacity_452_118}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("455_194"))
          }
        >
          <Text style={styles.Text_452_118}>Regular (4pcs)</Text>
        </TouchableOpacity>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aacbac1a-0be8-4b30-94c2-d1e2cdc332d6"
          }}
          style={styles.ImageBackground_444_63}
        />
        <View style={styles.View_444_69}>
          <Text style={styles.Text_444_69}>Medium (8pcs)</Text>
        </View>
        <View style={styles.View_444_70}>
          <Text style={styles.Text_444_70}>Large (12pcs)</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7bcabaab-be3a-46b3-bdbc-0e4141fa6372"
          }}
          style={styles.ImageBackground_444_66}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e540b51b-99b7-441e-807c-d965d4db35a5"
          }}
          style={styles.ImageBackground_444_67}
        />
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 251, 251, 1)" },
  View_2: { height: hp("127%") },
  View_455_506: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(245, 245, 245, 1)",
    overflow: "hidden"
  },
  View_I455_506_2_708: {
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
  View_I455_506_2_709: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I455_506_2_710: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I455_506_2_711: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I455_506_2_712: {
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
  ImageBackground_I455_506_2_712_1_207: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  ImageBackground_I455_506_2_712_1_212: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I455_506_2_712_1_213: {
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
  View_I455_506_2_713: {
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
  View_I455_506_2_714: {
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
  ImageBackground_I455_506_2_714_1_260: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_452_88: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    backgroundColor: "rgba(133, 28, 28, 1)"
  },
  View_452_89: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_452_89: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_452_90: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%"),
    resizeMode: "cover"
  },
  ImageBackground_452_91: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("91%"),
    minHeight: hp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28%")
  },
  ImageBackground_452_92: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("9%")
  },
  ImageBackground_452_93: {
    width: wp("103%"),
    minWidth: wp("103%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2%"),
    top: hp("25%"),
    resizeMode: "cover"
  },
  View_452_94: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("60%"),
    backgroundColor: "rgba(253, 231, 203, 1)"
  },
  View_452_95: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("118%")
  },
  View_452_96: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_452_97: {
    width: wp("94%"),
    minWidth: wp("94%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("73%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_452_98: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("69%"),
    justifyContent: "flex-start"
  },
  Text_452_98: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_452_99: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("62%"),
    justifyContent: "flex-start"
  },
  Text_452_99: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_452_100: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("74%"),
    justifyContent: "flex-start"
  },
  Text_452_100: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_452_101: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("73%"),
    resizeMode: "cover"
  },
  View_452_102: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("90%"),
    justifyContent: "flex-start"
  },
  Text_452_102: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_452_103: {
    width: wp("94%"),
    minWidth: wp("94%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("95%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_452_104: {
    width: wp("90%"),
    minWidth: wp("90%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("95%"),
    justifyContent: "flex-start"
  },
  Text_452_104: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_452_105: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("120%"),
    backgroundColor: "rgba(133, 28, 28, 1)"
  },
  View_452_106: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("120%"),
    justifyContent: "flex-start"
  },
  Text_452_106: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_452_107: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("120%"),
    backgroundColor: "rgba(255, 145, 44, 1)"
  },
  View_452_108: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("120%"),
    justifyContent: "flex-start"
  },
  Text_452_108: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_452_109: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("120%")
  },
  ImageBackground_452_110: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_452_111: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    resizeMode: "cover"
  },
  View_452_112: {
    width: wp("94%"),
    minWidth: wp("94%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("83%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_452_113: {
    width: wp("54%"),
    minWidth: wp("54%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("84%"),
    justifyContent: "flex-start"
  },
  Text_452_113: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_452_114: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("79%"),
    justifyContent: "flex-start"
  },
  Text_452_114: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_452_115: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("82%"),
    resizeMode: "cover"
  },
  View_452_122: {
    width: wp("94%"),
    minWidth: wp("94%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("73%")
  },
  View_452_117: {
    width: wp("94%"),
    minWidth: wp("94%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 249, 249, 1)"
  },
  TouchableOpacity_452_120: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  TouchableOpacity_452_118: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_452_118: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_444_63: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%")
  },
  View_444_69: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_444_69: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_444_70: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_444_70: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_444_66: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("8%")
  },
  ImageBackground_444_67: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("12%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
