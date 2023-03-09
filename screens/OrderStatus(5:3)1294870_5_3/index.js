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
      <View style={styles.View_5_125} />
      <View style={styles.View_5_26} />
      <View style={styles.View_5_28} />
      <View style={styles.View_5_59} />
      <View style={styles.View_5_58} />
      <View style={styles.View_5_45}>
        <Text style={styles.Text_5_45}>
          The order ready time is an estimation. When it’s ready, please collect
          within an hour.
        </Text>
      </View>
      <View style={styles.View_5_31}>
        <Text style={styles.Text_5_31}>G</Text>
      </View>
      <View style={styles.View_5_30}>
        <Text style={styles.Text_5_30}>Your order’s on the way.</Text>
      </View>
      <View style={styles.View_5_29}>
        <Text style={styles.Text_5_29}>Ready around 5:32 PM</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ad102fb9-f815-4451-9ad3-43ddd1bebd2f"
        }}
        style={styles.ImageBackground_5_36}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cfb564e0-b6b4-4e29-9c83-0e9624c3d2bb"
        }}
        style={styles.ImageBackground_5_41}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5e471569-536b-46ae-a706-f2ee5cd63bd3"
        }}
        style={styles.ImageBackground_5_37}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4cdd8742-5d38-44f2-b94d-3457d29e24a3"
        }}
        style={styles.ImageBackground_5_35}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5f8359a1-d43d-49fb-a720-44fbed672efd"
        }}
        style={styles.ImageBackground_5_43}
      />
      <View style={styles.View_5_44} />
      <View style={styles.View_5_46}>
        <Text style={styles.Text_5_46}>ORDER PLACED</Text>
      </View>
      <View style={styles.View_5_47}>
        <Text style={styles.Text_5_47}>TOTAL</Text>
      </View>
      <View style={styles.View_5_48}>
        <Text style={styles.Text_5_48}>SHIP TO</Text>
      </View>
      <View style={styles.View_5_49}>
        <Text style={styles.Text_5_49}>ORDER</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a506751d-ddd1-40f0-b3c4-63a0725dfc38"
        }}
        style={styles.ImageBackground_5_39}
      />
      <View style={styles.View_5_53}>
        <Text style={styles.Text_5_53}>Oct 1</Text>
      </View>
      <View style={styles.View_5_56}>
        <Text style={styles.Text_5_56}>Oswald</Text>
      </View>
      <View style={styles.View_5_57}>
        <Text style={styles.Text_5_57}>a1234</Text>
      </View>
      <View style={styles.View_5_54}>
        <Text style={styles.Text_5_54}>₱69.00</Text>
      </View>
      <View style={styles.View_5_84} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8a638117-1a9f-4082-bda3-6f360fa3de89"
        }}
        style={styles.ImageBackground_5_85}
      />
      <View style={styles.View_5_124}>
        <Text style={styles.Text_5_124}>ORDER COLLECTED</Text>
      </View>
      <View style={styles.View_5_86}>
        <Text style={styles.Text_5_86}>&gt;&gt;</Text>
      </View>
      <View style={styles.View_5_88}>
        <Text style={styles.Text_5_88}>Takawyaki - San Bartolome</Text>
      </View>
      <View style={styles.View_5_89}>
        <Text style={styles.Text_5_89}>
          Lot 9 Katipunan Avenue, Bayan Village, Barangay San Bartolome,
          Novaliches, Quezon City...
        </Text>
      </View>
      <View style={styles.View_5_90} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7360c70e-c474-46ef-aa4e-ec4fed4aa726"
        }}
        style={styles.ImageBackground_5_94}
      />
      <View style={styles.View_5_95}>
        <Text style={styles.Text_5_95}>
          REMINDER: Remember to always double check your order to ensure that
          all items are correct. Please enjoy!
        </Text>
      </View>
      <View style={styles.View_5_96} />
      <View style={styles.View_5_97}>
        <Text style={styles.Text_5_97}>#a1234</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/43fd9c8d-a2d8-4fbe-ad16-6b20a402b6e8"
        }}
        style={styles.ImageBackground_5_107}
      />
      <View style={styles.View_72_69} />
      <View style={styles.View_72_70} />
      <View style={styles.View_72_71} />
      <View style={styles.View_72_72}>
        <Text style={styles.Text_72_72}>
          The order ready time is an estimation. When it’s ready, please collect
          within an hour.
        </Text>
      </View>
      <View style={styles.View_72_73}>
        <Text style={styles.Text_72_73}>G</Text>
      </View>
      <View style={styles.View_72_74}>
        <Text style={styles.Text_72_74}>Your order’s on the way.</Text>
      </View>
      <View style={styles.View_72_75}>
        <Text style={styles.Text_72_75}>Ready around 5:32 PM</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1768b202-d565-47fc-bfd2-778a9afb816d"
        }}
        style={styles.ImageBackground_72_76}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8a6640d1-d2ae-4982-8207-b092fe65c0ce"
        }}
        style={styles.ImageBackground_72_77}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/961d69cc-92f3-46fc-a121-5a17d6228fc5"
        }}
        style={styles.ImageBackground_72_78}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f2f149a4-74cf-4471-aa96-c2e456336001"
        }}
        style={styles.ImageBackground_72_79}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/791de0f5-5915-4894-850f-f357fba3b7c7"
        }}
        style={styles.ImageBackground_72_80}
      />
      <View style={styles.View_72_81} />
      <View style={styles.View_72_82}>
        <Text style={styles.Text_72_82}>ORDER PLACED</Text>
      </View>
      <View style={styles.View_72_83}>
        <Text style={styles.Text_72_83}>TOTAL</Text>
      </View>
      <View style={styles.View_72_84}>
        <Text style={styles.Text_72_84}>SHIP TO</Text>
      </View>
      <View style={styles.View_72_85}>
        <Text style={styles.Text_72_85}>ORDER</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c64f14ee-7671-4c3f-89d9-661878a59a35"
        }}
        style={styles.ImageBackground_72_86}
      />
      <View style={styles.View_72_87}>
        <Text style={styles.Text_72_87}>Oct 1</Text>
      </View>
      <View style={styles.View_72_88}>
        <Text style={styles.Text_72_88}>Oswald</Text>
      </View>
      <View style={styles.View_72_89}>
        <Text style={styles.Text_72_89}>a1234</Text>
      </View>
      <View style={styles.View_72_90}>
        <Text style={styles.Text_72_90}>₱69.00</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/16b2936f-5876-479e-ae14-3eee7dd460de"
        }}
        style={styles.ImageBackground_72_91}
      />
      <View style={styles.View_72_92} />
      <View style={styles.View_72_93} />
      <View style={styles.View_72_94} />
      <View style={styles.View_72_95}>
        <Text style={styles.Text_72_95}>
          The order ready time is an estimation. When it’s ready, please collect
          within an hour.
        </Text>
      </View>
      <View style={styles.View_72_96}>
        <Text style={styles.Text_72_96}>G</Text>
      </View>
      <View style={styles.View_72_97}>
        <Text style={styles.Text_72_97}>Your order’s on the way.</Text>
      </View>
      <View style={styles.View_72_98}>
        <Text style={styles.Text_72_98}>Ready around 5:32 PM</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fd6a1ff9-3d68-4264-8b02-cb46fb703ea0"
        }}
        style={styles.ImageBackground_72_99}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/527e1ea1-d690-4659-b634-c172c382723a"
        }}
        style={styles.ImageBackground_72_100}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f2db7d6f-766e-4f25-91f2-a1a64c4b19fe"
        }}
        style={styles.ImageBackground_72_101}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d774ad29-cec9-43fc-b421-0a000fc80486"
        }}
        style={styles.ImageBackground_72_102}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0a5a6d98-6bc1-4d0f-905b-6599ac689d10"
        }}
        style={styles.ImageBackground_72_103}
      />
      <View style={styles.View_72_104} />
      <View style={styles.View_72_105}>
        <Text style={styles.Text_72_105}>ORDER PLACED</Text>
      </View>
      <View style={styles.View_72_106}>
        <Text style={styles.Text_72_106}>TOTAL</Text>
      </View>
      <View style={styles.View_72_107}>
        <Text style={styles.Text_72_107}>SHIP TO</Text>
      </View>
      <View style={styles.View_72_108}>
        <Text style={styles.Text_72_108}>ORDER</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d07ae174-fac2-4b12-94e0-50cfac3f1234"
        }}
        style={styles.ImageBackground_72_109}
      />
      <View style={styles.View_72_110}>
        <Text style={styles.Text_72_110}>Oct 1</Text>
      </View>
      <View style={styles.View_72_111}>
        <Text style={styles.Text_72_111}>John Renzo</Text>
      </View>
      <View style={styles.View_72_112}>
        <Text style={styles.Text_72_112}>a1234</Text>
      </View>
      <View style={styles.View_72_113}>
        <Text style={styles.Text_72_113}>₱129.00</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/34680a94-4873-4388-9d26-09a064d2351b"
        }}
        style={styles.ImageBackground_72_114}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b8cd0a24-308f-4b71-a6c8-2afc355a9785"
        }}
        style={styles.ImageBackground_5_108}
      />
      <View style={styles.View_5_110}>
        <Text style={styles.Text_5_110}>Takawyaki - SM Novaliches</Text>
      </View>
      <View style={styles.View_5_112}>
        <Text style={styles.Text_5_112}>Total</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/80e958ad-33a5-4b20-9bd9-c1ed26ba3a9c"
        }}
        style={styles.ImageBackground_5_115}
      />
      <View style={styles.View_5_116}>
        <Text style={styles.Text_5_116}>₱129.00</Text>
      </View>
      <View style={styles.View_5_117}>
        <Text style={styles.Text_5_117}>₱109.00</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/09d86194-df4a-4913-a5b2-1b48b30d7ad2"
        }}
        style={styles.ImageBackground_5_118}
      />
      <View style={styles.View_5_119} />
      <View style={styles.View_5_120}>
        <Text style={styles.Text_5_120}>Merchant has not started a chat</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3b1fb50d-b3aa-48e3-bb79-97e1dc67ed3e"
        }}
        style={styles.ImageBackground_5_122}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b3fb7d51-b78a-4c7b-91bf-19f3f91128d7"
        }}
        style={styles.ImageBackground_5_123}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/532209f2-b1ce-4c88-b9b4-5fdfef61e0da"
        }}
        style={styles.ImageBackground_5_106}
      />
      <View source={{ uri: "null" }} style={styles.View_5_51} />
      <View style={styles.View_455_778}>
        <View style={styles.View_I455_778_2_708} />
        <View style={styles.View_I455_778_2_709}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ed909fba-e073-4275-8f66-0a1746d5a9b8"
            }}
            style={styles.ImageBackground_I455_778_2_710}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cc78e488-8f17-48ea-85c1-f82e455dc2a1"
            }}
            style={styles.ImageBackground_I455_778_2_711}
          />
          <View style={styles.View_I455_778_2_712}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/909c004b-c730-4ea5-aa99-0a6a5833ff69"
              }}
              style={styles.ImageBackground_I455_778_2_712_1_207}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7b99dc98-6bf2-47cb-a1d6-7562285463bb"
              }}
              style={styles.ImageBackground_I455_778_2_712_1_212}
            />
            <View style={styles.View_I455_778_2_712_1_213} />
          </View>
        </View>
        <View style={styles.View_I455_778_2_713} />
        <View style={styles.View_I455_778_2_714}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/47963987-22d6-40aa-a127-3ec93254abc3"
            }}
            style={styles.ImageBackground_I455_778_2_714_1_260}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 1)" },
  View_2: { height: hp("127%") },
  View_5_125: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("127%"),
    minHeight: hp("127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(242, 242, 242, 1)"
  },
  View_5_26: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("127%"),
    minHeight: hp("127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 245, 1)"
  },
  View_5_28: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("10%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_5_59: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("77%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_5_58: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("42%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_5_45: {
    width: wp("86%"),
    minWidth: wp("86%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("33%"),
    justifyContent: "flex-start"
  },
  Text_5_45: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_31: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_5_31: {
    color: "rgba(16, 200, 23, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_30: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("25%"),
    justifyContent: "flex-start"
  },
  Text_5_30: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_29: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("21%"),
    justifyContent: "flex-start"
  },
  Text_5_29: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_36: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("30%")
  },
  ImageBackground_5_41: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("30%")
  },
  ImageBackground_5_37: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("30%")
  },
  ImageBackground_5_35: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("29%"),
    resizeMode: "cover",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_5_43: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("28%"),
    resizeMode: "cover"
  },
  View_5_44: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("12%"),
    backgroundColor: "rgba(232, 230, 230, 1)"
  },
  View_5_46: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_5_46: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_47: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_5_47: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_48: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_5_48: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_49: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_5_49: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_39: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("28%"),
    resizeMode: "cover"
  },
  View_5_53: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_5_53: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_56: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_5_56: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_57: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_5_57: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_54: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_5_54: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_84: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("112%"),
    backgroundColor: "rgba(16, 200, 23, 1)"
  },
  ImageBackground_5_85: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("112%")
  },
  View_5_124: {
    width: wp("46%"),
    minWidth: wp("46%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("115%"),
    justifyContent: "flex-start"
  },
  Text_5_124: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_86: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("114%"),
    justifyContent: "flex-start"
  },
  Text_5_86: {
    color: "rgba(16, 200, 23, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -10,
    textTransform: "none"
  },
  View_5_88: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("45%"),
    justifyContent: "flex-start"
  },
  Text_5_88: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_89: {
    width: wp("57%"),
    minWidth: wp("57%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_5_89: {
    color: "rgba(154, 122, 122, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_90: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("61%"),
    backgroundColor: "rgba(253, 231, 203, 1)"
  },
  ImageBackground_5_94: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("62%"),
    resizeMode: "cover"
  },
  View_5_95: {
    width: wp("73%"),
    minWidth: wp("73%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("64%"),
    justifyContent: "flex-start"
  },
  Text_5_95: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_96: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("43%"),
    backgroundColor: "rgba(33, 139, 199, 1)"
  },
  View_5_97: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("44%"),
    justifyContent: "flex-start"
  },
  Text_5_97: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_107: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("17%"),
    resizeMode: "cover"
  },
  View_72_69: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("127%"),
    minHeight: hp("127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(242, 242, 242, 1)"
  },
  View_72_70: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("127%"),
    minHeight: hp("127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 245, 1)"
  },
  View_72_71: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("10%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_72_72: {
    width: wp("86%"),
    minWidth: wp("86%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("33%"),
    justifyContent: "flex-start"
  },
  Text_72_72: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_73: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_72_73: {
    color: "rgba(16, 200, 23, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_74: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("25%"),
    justifyContent: "flex-start"
  },
  Text_72_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_75: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("21%"),
    justifyContent: "flex-start"
  },
  Text_72_75: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_72_76: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("30%")
  },
  ImageBackground_72_77: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("30%")
  },
  ImageBackground_72_78: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("30%")
  },
  ImageBackground_72_79: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("29%"),
    resizeMode: "cover",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_72_80: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("28%"),
    resizeMode: "cover"
  },
  View_72_81: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("12%"),
    backgroundColor: "rgba(232, 230, 230, 1)"
  },
  View_72_82: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_72_82: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_83: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_72_83: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_84: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_72_84: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_85: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_72_85: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_72_86: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("28%"),
    resizeMode: "cover"
  },
  View_72_87: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_72_87: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_88: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_72_88: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_89: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_72_89: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_90: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_72_90: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_72_91: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("17%"),
    resizeMode: "cover"
  },
  View_72_92: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("127%"),
    minHeight: hp("127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(242, 242, 242, 1)"
  },
  View_72_93: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("127%"),
    minHeight: hp("127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 245, 1)"
  },
  View_72_94: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("10%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_72_95: {
    width: wp("86%"),
    minWidth: wp("86%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("33%"),
    justifyContent: "flex-start"
  },
  Text_72_95: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_96: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_72_96: {
    color: "rgba(16, 200, 23, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_97: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("25%"),
    justifyContent: "flex-start"
  },
  Text_72_97: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_98: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("21%"),
    justifyContent: "flex-start"
  },
  Text_72_98: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_72_99: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("30%")
  },
  ImageBackground_72_100: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("30%")
  },
  ImageBackground_72_101: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("30%")
  },
  ImageBackground_72_102: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("29%"),
    resizeMode: "cover",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_72_103: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("28%"),
    resizeMode: "cover"
  },
  View_72_104: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("12%"),
    backgroundColor: "rgba(232, 230, 230, 1)"
  },
  View_72_105: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_72_105: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_106: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_72_106: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_107: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_72_107: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_108: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_72_108: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_72_109: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("28%"),
    resizeMode: "cover"
  },
  View_72_110: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_72_110: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_111: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_72_111: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_112: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_72_112: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_113: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_72_113: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_72_114: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("17%"),
    resizeMode: "cover"
  },
  ImageBackground_5_108: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3%"),
    top: hp("73%"),
    resizeMode: "cover"
  },
  View_5_110: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("80%"),
    justifyContent: "flex-start"
  },
  Text_5_110: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_112: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("84%"),
    justifyContent: "flex-start"
  },
  Text_5_112: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_115: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("89%"),
    resizeMode: "cover"
  },
  View_5_116: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("89%"),
    justifyContent: "flex-start"
  },
  Text_5_116: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_117: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("92%"),
    justifyContent: "flex-start"
  },
  Text_5_117: {
    color: "rgba(211, 206, 206, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_118: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("93%")
  },
  View_5_119: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("96%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_5_120: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("99%"),
    justifyContent: "flex-start"
  },
  Text_5_120: {
    color: "rgba(119, 109, 109, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_122: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("98%"),
    resizeMode: "cover"
  },
  ImageBackground_5_123: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("98%")
  },
  ImageBackground_5_106: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("53%"),
    resizeMode: "cover"
  },
  View_5_51: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("86%")
  },
  View_455_778: {
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
  View_I455_778_2_708: {
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
  View_I455_778_2_709: {
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
  ImageBackground_I455_778_2_710: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I455_778_2_711: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I455_778_2_712: {
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
  ImageBackground_I455_778_2_712_1_207: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  ImageBackground_I455_778_2_712_1_212: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I455_778_2_712_1_213: {
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
  View_I455_778_2_713: {
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
  View_I455_778_2_714: {
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
  ImageBackground_I455_778_2_714_1_260: {
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
