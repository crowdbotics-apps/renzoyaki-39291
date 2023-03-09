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
      <View style={styles.View_455_574}>
        <View style={styles.View_I455_574_2_708} />
        <View style={styles.View_I455_574_2_709}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4e470ce6-0818-46cf-bea0-ab0877bfcd83"
            }}
            style={styles.ImageBackground_I455_574_2_710}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/43ca3ad7-ac97-4005-b95e-5a2f41d2f190"
            }}
            style={styles.ImageBackground_I455_574_2_711}
          />
          <View style={styles.View_I455_574_2_712}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/053dc99c-e10b-4d3c-993d-b1d8420af475"
              }}
              style={styles.ImageBackground_I455_574_2_712_1_207}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e77b481c-5d4d-4c42-9aee-188fdfde25e8"
              }}
              style={styles.ImageBackground_I455_574_2_712_1_212}
            />
            <View style={styles.View_I455_574_2_712_1_213} />
          </View>
        </View>
        <View style={styles.View_I455_574_2_713} />
        <View style={styles.View_I455_574_2_714}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/27625676-3d9e-42ee-89b2-94bfe12865cb"
            }}
            style={styles.ImageBackground_I455_574_2_714_1_260}
          />
        </View>
      </View>
      <View style={styles.View_452_124} />
      <View style={styles.View_452_125}>
        <Text style={styles.Text_452_125}>takoyaki’s</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e83096f9-5d65-43ec-838b-8f3569ee048a"
        }}
        style={styles.ImageBackground_452_126}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e5d0fd2d-e01a-46d2-a5e5-26f1129b3d1a"
        }}
        style={styles.ImageBackground_452_127}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6da61a6c-4796-4d4d-b56f-db0ad73edebc"
        }}
        style={styles.ImageBackground_452_128}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/91c87552-4e8c-4401-9d4b-addf2ceb0b29"
        }}
        style={styles.ImageBackground_452_129}
      />
      <View style={styles.View_452_130} />
      <View style={styles.View_452_131}>
        <View style={styles.View_452_132} />
      </View>
      <View style={styles.View_452_133} />
      <View style={styles.View_452_134}>
        <Text style={styles.Text_452_134}>select sizes:</Text>
      </View>
      <View style={styles.View_452_135}>
        <Text style={styles.Text_452_135}>Takoyaki veggie</Text>
      </View>
      <View style={styles.View_452_136}>
        <Text style={styles.Text_452_136}>Regular (4pcs)</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a66d9086-94a9-414c-a147-cb67e6581255"
        }}
        style={styles.ImageBackground_452_137}
      />
      <View style={styles.View_452_138}>
        <Text style={styles.Text_452_138}>Recipe:</Text>
      </View>
      <View style={styles.View_452_139} />
      <View style={styles.View_452_140}>
        <Text style={styles.Text_452_140}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit, quis platea
          praesent urna fermentum scelerisque torquent, class conubiaac pretium
          arcu convallis. Nascetur nisi ultricies musluctus quis lacus nec diam
          eu metus inceptos, malesuada conubia faucibus habitant curabitur justo
          scelerisque magnis quam sem magna egestas
        </Text>
      </View>
      <View style={styles.View_452_141} />
      <View style={styles.View_452_142}>
        <Text style={styles.Text_452_142}>add to cart</Text>
      </View>
      <View style={styles.View_452_143} />
      <View style={styles.View_452_144}>
        <Text style={styles.Text_452_144}>buy now</Text>
      </View>
      <View style={styles.View_452_145}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/45f18325-ba4c-4439-a2b3-b88d0066b899"
          }}
          style={styles.ImageBackground_452_146}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1d80df6b-04d0-4cfb-9a49-22f30aeb5026"
          }}
          style={styles.ImageBackground_452_147}
        />
      </View>
      <View style={styles.View_452_148} />
      <View style={styles.View_452_149}>
        <Text style={styles.Text_452_149}>Lipton Iced Tea (250 ml)</Text>
      </View>
      <View style={styles.View_452_150}>
        <Text style={styles.Text_452_150}>Drinks:</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f472dd69-7412-424a-bb1f-19a0dd983c64"
        }}
        style={styles.ImageBackground_452_151}
      />
      <View style={styles.View_452_152}>
        <View style={styles.View_452_153} />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8a214f57-cb9f-4ac1-8114-49e7336bce40"
          }}
          style={styles.TouchableOpacity_452_154}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("455_194"))
          }
        />
        <View style={styles.View_452_155}>
          <Text style={styles.Text_452_155}>
            Regular Coke (250 ml) ------------ ₱15.00
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2c7aed14-f2e7-458d-9471-176dabc4ce2c"
          }}
          style={styles.ImageBackground_452_156}
        />
        <View style={styles.View_452_157}>
          <Text style={styles.Text_452_157}>
            Lemonade (260ml) ----------------- ₱18.00
          </Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_452_158}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("455_161"))
          }
        >
          <Text style={styles.Text_452_158}>
            Lipton Iced Tea (250ml) ----------- ₱25.00
          </Text>
        </TouchableOpacity>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0b831749-d461-4924-8c3f-2eb88b35df07"
          }}
          style={styles.ImageBackground_452_159}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/32d297cf-f76d-402e-b8d9-8e1a8ee3db52"
          }}
          style={styles.ImageBackground_452_160}
        />
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 251, 251, 1)" },
  View_2: { height: hp("127%") },
  View_455_574: {
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
  View_I455_574_2_708: {
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
  View_I455_574_2_709: {
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
  ImageBackground_I455_574_2_710: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I455_574_2_711: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I455_574_2_712: {
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
  ImageBackground_I455_574_2_712_1_207: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  ImageBackground_I455_574_2_712_1_212: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I455_574_2_712_1_213: {
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
  View_I455_574_2_713: {
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
  View_I455_574_2_714: {
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
  ImageBackground_I455_574_2_714_1_260: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_452_124: {
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
  View_452_125: {
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
  Text_452_125: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_452_126: {
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
  ImageBackground_452_127: {
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
  ImageBackground_452_128: {
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
  ImageBackground_452_129: {
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
  View_452_130: {
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
  View_452_131: {
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
  View_452_132: {
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
  View_452_133: {
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
  View_452_134: {
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
  Text_452_134: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_452_135: {
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
  Text_452_135: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_452_136: {
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
  Text_452_136: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_452_137: {
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
  View_452_138: {
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
  Text_452_138: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_452_139: {
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
  View_452_140: {
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
  Text_452_140: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_452_141: {
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
  View_452_142: {
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
  Text_452_142: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_452_143: {
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
  View_452_144: {
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
  Text_452_144: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_452_145: {
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
  ImageBackground_452_146: {
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
  ImageBackground_452_147: {
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
  View_452_148: {
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
  View_452_149: {
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
  Text_452_149: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_452_150: {
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
  Text_452_150: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_452_151: {
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
  View_452_152: {
    width: wp("94%"),
    minWidth: wp("94%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("82%")
  },
  View_452_153: {
    width: wp("94%"),
    minWidth: wp("94%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(255, 249, 249, 1)"
  },
  TouchableOpacity_452_154: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_452_155: {
    width: wp("74%"),
    minWidth: wp("74%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_452_155: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_452_156: {
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
  View_452_157: {
    width: wp("73%"),
    minWidth: wp("73%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_452_157: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_452_158: {
    width: wp("75%"),
    minWidth: wp("75%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_452_158: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_452_159: {
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
  ImageBackground_452_160: {
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
