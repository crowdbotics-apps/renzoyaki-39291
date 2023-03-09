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
      <View style={styles.View_455_608}>
        <View style={styles.View_I455_608_2_708} />
        <View style={styles.View_I455_608_2_709}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/236d7b31-655e-4d7f-8fb1-97207bca0c37"
            }}
            style={styles.ImageBackground_I455_608_2_710}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3d810c47-4794-49f3-aead-a5f5da0492e8"
            }}
            style={styles.ImageBackground_I455_608_2_711}
          />
          <View style={styles.View_I455_608_2_712}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f5acff4f-21d5-43c0-b7ac-5bc3d9214253"
              }}
              style={styles.ImageBackground_I455_608_2_712_1_207}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d58000be-db15-43f4-8408-881ff98328bb"
              }}
              style={styles.ImageBackground_I455_608_2_712_1_212}
            />
            <View style={styles.View_I455_608_2_712_1_213} />
          </View>
        </View>
        <View style={styles.View_I455_608_2_713} />
        <View style={styles.View_I455_608_2_714}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c2d98412-7ef7-4e35-a84a-47888db263ab"
            }}
            style={styles.ImageBackground_I455_608_2_714_1_260}
          />
        </View>
      </View>
      <View style={styles.View_455_162} />
      <View style={styles.View_455_163}>
        <Text style={styles.Text_455_163}>takoyaki’s</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/98252e02-5320-4e33-9c89-20510a62d628"
        }}
        style={styles.ImageBackground_455_164}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7513b24a-4b6b-4465-9b85-39d0b83dfafc"
        }}
        style={styles.ImageBackground_455_165}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d9b291c5-2846-46b5-a901-da4cf678e56e"
        }}
        style={styles.ImageBackground_455_166}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/012794cf-2072-4ef4-a320-4fe37c75bc8e"
        }}
        style={styles.ImageBackground_455_167}
      />
      <View style={styles.View_455_168} />
      <View style={styles.View_455_169}>
        <View style={styles.View_455_170} />
      </View>
      <View style={styles.View_455_171} />
      <View style={styles.View_455_172}>
        <Text style={styles.Text_455_172}>select sizes:</Text>
      </View>
      <View style={styles.View_455_173}>
        <Text style={styles.Text_455_173}>Takoyaki veggie</Text>
      </View>
      <View style={styles.View_455_174}>
        <Text style={styles.Text_455_174}>Regular (4pcs)</Text>
      </View>
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/75e39d63-45fb-4122-96e3-7e2f321854ac"
        }}
        style={styles.TouchableOpacity_455_175}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("455_194"))
        }
      />
      <View style={styles.View_455_176}>
        <Text style={styles.Text_455_176}>Recipe:</Text>
      </View>
      <View style={styles.View_455_177} />
      <View style={styles.View_455_178}>
        <Text style={styles.Text_455_178}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit, quis platea
          praesent urna fermentum scelerisque torquent, class conubiaac pretium
          arcu convallis. Nascetur nisi ultricies musluctus quis lacus nec diam
          eu metus inceptos, malesuada conubia faucibus habitant curabitur justo
          scelerisque magnis quam sem magna egestas
        </Text>
      </View>
      <View style={styles.View_455_232}>
        <View style={styles.View_455_179} />
        <TouchableOpacity
          style={styles.TouchableOpacity_455_180}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("3_3"))
          }
        >
          <Text style={styles.Text_455_180}>add to cart</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_455_231}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("12_41"))
        }
      >
        <View style={styles.View_455_181} />
        <View style={styles.View_455_182}>
          <Text style={styles.Text_455_182}>buy now</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_455_183}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/49060b0f-bb65-447b-87a7-2f79596be161"
          }}
          style={styles.ImageBackground_455_184}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/681584ae-b58b-4e17-a569-31bf37f11741"
          }}
          style={styles.ImageBackground_455_185}
        />
      </View>
      <View style={styles.View_455_186} />
      <View style={styles.View_455_187}>
        <Text style={styles.Text_455_187}>Lipton Iced Tea (250 ml)</Text>
      </View>
      <View style={styles.View_455_188}>
        <Text style={styles.Text_455_188}>Drinks:</Text>
      </View>
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/da8d0b60-6a20-4cfb-bb3e-574f800b2e8b"
        }}
        style={styles.TouchableOpacity_455_189}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("452_123"))
        }
      />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 251, 251, 1)" },
  View_2: { height: hp("127%") },
  View_455_608: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(245, 245, 245, 1)",
    overflow: "hidden"
  },
  View_I455_608_2_708: {
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
  View_I455_608_2_709: {
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
  ImageBackground_I455_608_2_710: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I455_608_2_711: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I455_608_2_712: {
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
  ImageBackground_I455_608_2_712_1_207: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  ImageBackground_I455_608_2_712_1_212: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I455_608_2_712_1_213: {
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
  View_I455_608_2_713: {
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
  View_I455_608_2_714: {
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
  ImageBackground_I455_608_2_714_1_260: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_455_162: {
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
  View_455_163: {
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
  Text_455_163: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_455_164: {
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
  ImageBackground_455_165: {
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
  ImageBackground_455_166: {
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
  ImageBackground_455_167: {
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
  View_455_168: {
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
  View_455_169: {
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
  View_455_170: {
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
  View_455_171: {
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
  View_455_172: {
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
  Text_455_172: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_455_173: {
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
  Text_455_173: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_455_174: {
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
  Text_455_174: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_455_175: {
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
  View_455_176: {
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
  Text_455_176: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_455_177: {
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
  View_455_178: {
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
  Text_455_178: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_455_232: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("120%")
  },
  View_455_179: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(133, 28, 28, 1)"
  },
  TouchableOpacity_455_180: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_455_180: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_455_231: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("120%")
  },
  View_455_181: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 145, 44, 1)"
  },
  View_455_182: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_455_182: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_455_183: {
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
  ImageBackground_455_184: {
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
  ImageBackground_455_185: {
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
  View_455_186: {
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
  View_455_187: {
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
  Text_455_187: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_455_188: {
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
  Text_455_188: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_455_189: {
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
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
