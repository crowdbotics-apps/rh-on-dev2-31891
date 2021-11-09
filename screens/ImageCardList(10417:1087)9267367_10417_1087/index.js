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
      <View style={styles.View_10417_1088}>
        <View style={styles.View_10417_1089}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b68/71be/ff21c8ae5b38e910f4361adb7814bf20"
            }}
            style={styles.ImageBackground_10417_1090}
          />
          <View style={styles.View_10417_1091} />
          <View style={styles.View_10417_1092}>
            <Text style={styles.Text_10417_1092}>
              Euro 2020 qualification latest: Italy clinch their spot last
              minute
            </Text>
          </View>
          <View style={styles.View_10417_1093}>
            <Text style={styles.Text_10417_1093}>39m • Alden Johngon</Text>
          </View>
        </View>
        <View style={styles.View_10417_1094}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5181/47bb/28c42f60ac8dd71b1de267f90de57170"
            }}
            style={styles.ImageBackground_10417_1095}
          />
          <View style={styles.View_10417_1096}>
            <Text style={styles.Text_10417_1096}>
              Euro 2020 qualification latest: Italy clinch their spot last
              minute
            </Text>
          </View>
          <View style={styles.View_10417_1097}>
            <Text style={styles.Text_10417_1097}>39m • Alden Johngon</Text>
          </View>
        </View>
        <View style={styles.View_10417_1098}>
          <View style={styles.View_10417_1099} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df85/64d4/12a0e3015789dae66bb2ea42a55bde65"
            }}
            style={styles.ImageBackground_10417_1100}
          />
          <View style={styles.View_10417_1101}>
            <Text style={styles.Text_10417_1101}>
              England’s faith in protocol was rewarded, now UEFA gets tough
            </Text>
          </View>
          <View style={styles.View_10417_1102}>
            <Text style={styles.Text_10417_1102}>2h • Alden Johngon</Text>
          </View>
          <View style={styles.View_10417_1103}>
            <Text style={styles.Text_10417_1103}>
              The football team have the change to make it seven wins on the
              spin this...
            </Text>
          </View>
        </View>
        <View style={styles.View_10417_1104}>
          <View style={styles.View_10417_1105} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b3a/b8ad/446cfa75c49a1172bb18b1e56aa878f1"
            }}
            style={styles.ImageBackground_10417_1106}
          />
          <View style={styles.View_10417_1107}>
            <Text style={styles.Text_10417_1107}>
              Why Gladonia won’t go unbeaten in the Premier League
            </Text>
          </View>
          <View style={styles.View_10417_1108}>
            <Text style={styles.Text_10417_1108}>2h • Alden Johngon</Text>
          </View>
          <View style={styles.View_10417_1109}>
            <Text style={styles.Text_10417_1109}>
              The football team have the change to make it seven wins on the
              spin this...
            </Text>
          </View>
        </View>
        <View style={styles.View_10417_1110}>
          <View style={styles.View_10417_1111} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88c7/cc70/9a3bdaca2cc05133d6f37d9dc7db9bf9"
            }}
            style={styles.ImageBackground_10417_1112}
          />
          <View style={styles.View_10417_1113}>
            <Text style={styles.Text_10417_1113}>
              Smith goal gives Atletico 1-0 win over Manchester
            </Text>
          </View>
          <View style={styles.View_10417_1114}>
            <Text style={styles.Text_10417_1114}>2h • Alden Johngon</Text>
          </View>
          <View style={styles.View_10417_1115}>
            <Text style={styles.Text_10417_1115}>
              The football team have the change to make it seven wins on the
              spin this...
            </Text>
          </View>
        </View>
        <View style={styles.View_10417_1116}>
          <View style={styles.View_10417_1117} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98fe/416b/50ad7a54e800623cad09b4f38960610e"
            }}
            style={styles.ImageBackground_10417_1118}
          />
          <View style={styles.View_10417_1119}>
            <Text style={styles.Text_10417_1119}>2h • Alden Johngon</Text>
          </View>
          <View style={styles.View_10417_1120}>
            <Text style={styles.Text_10417_1120}>
              The football team have the change to make it seven wins on the
              spin this...
            </Text>
          </View>
          <View style={styles.View_10417_1121}>
            <Text style={styles.Text_10417_1121}>
              England’s faith in protocol was rewarded, now UEFA gets tough
            </Text>
          </View>
        </View>
        <View style={styles.View_10417_1122}>
          <View style={styles.View_10417_1123} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b3a/b8ad/446cfa75c49a1172bb18b1e56aa878f1"
            }}
            style={styles.ImageBackground_10417_1124}
          />
          <View style={styles.View_10417_1125}>
            <Text style={styles.Text_10417_1125}>
              Why Gladonia won’t go unbeaten in the Premier League
            </Text>
          </View>
          <View style={styles.View_10417_1126}>
            <Text style={styles.Text_10417_1126}>2h • Alden Johngon</Text>
          </View>
          <View style={styles.View_10417_1127}>
            <Text style={styles.Text_10417_1127}>
              The football team have the change to make it seven wins on the
              spin this...
            </Text>
          </View>
        </View>
        <View style={styles.View_10417_1128}>
          <View style={styles.View_10417_1129} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88c7/cc70/9a3bdaca2cc05133d6f37d9dc7db9bf9"
            }}
            style={styles.ImageBackground_10417_1130}
          />
          <View style={styles.View_10417_1131}>
            <Text style={styles.Text_10417_1131}>
              Smith goal gives Atletico 1-0 win over Manchester
            </Text>
          </View>
          <View style={styles.View_10417_1132}>
            <Text style={styles.Text_10417_1132}>2h • Alden Johngon</Text>
          </View>
          <View style={styles.View_10417_1133}>
            <Text style={styles.Text_10417_1133}>
              The football team have the change to make it seven wins on the
              spin this...
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_10417_1134}>
        <View style={styles.View_10417_1135}>
          <Text style={styles.Text_10417_1135}>Feed</Text>
        </View>
        <View style={styles.View_10417_1136}>
          <View style={styles.View_10417_1137} />
          <View style={styles.View_10417_1138}>
            <Text style={styles.Text_10417_1138}>News</Text>
          </View>
        </View>
        <View style={styles.View_10417_1139}>
          <View style={styles.View_10417_1140} />
          <View style={styles.View_10417_1141}>
            <Text style={styles.Text_10417_1141}>Scores</Text>
          </View>
        </View>
        <View style={styles.View_10417_1142}>
          <View style={styles.View_10417_1143} />
          <View style={styles.View_10417_1144}>
            <Text style={styles.Text_10417_1144}>Transfers</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(249, 251, 255, 1)" },
  View_2: { height: hp("202%") },
  View_10417_1088: {
    width: wp("100%"),
    height: hp("202%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10417_1089: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("21%")
  },
  ImageBackground_10417_1090: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_10417_1091: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_10417_1092: {
    width: wp("83%"),
    minWidth: wp("83%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("15%"),
    justifyContent: "flex-end"
  },
  Text_10417_1092: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1093: {
    width: wp("49%"),
    minWidth: wp("49%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("23%"),
    justifyContent: "flex-end"
  },
  Text_10417_1093: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1094: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("111%")
  },
  ImageBackground_10417_1095: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_10417_1096: {
    width: wp("83%"),
    minWidth: wp("83%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("15%"),
    justifyContent: "flex-end"
  },
  Text_10417_1096: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1097: {
    width: wp("49%"),
    minWidth: wp("49%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("23%"),
    justifyContent: "flex-end"
  },
  Text_10417_1097: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1098: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("50%")
  },
  View_10417_1099: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_10417_1100: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_10417_1101: {
    width: wp("56%"),
    minWidth: wp("56%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_10417_1101: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1102: {
    width: wp("52%"),
    minWidth: wp("52%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("12%"),
    justifyContent: "flex-end"
  },
  Text_10417_1102: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1103: {
    width: wp("53%"),
    minWidth: wp("53%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_10417_1103: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1104: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("70%")
  },
  View_10417_1105: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_10417_1106: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_10417_1107: {
    width: wp("56%"),
    minWidth: wp("56%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_10417_1107: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1108: {
    width: wp("52%"),
    minWidth: wp("52%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("12%"),
    justifyContent: "flex-end"
  },
  Text_10417_1108: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1109: {
    width: wp("53%"),
    minWidth: wp("53%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_10417_1109: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1110: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("90%")
  },
  View_10417_1111: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_10417_1112: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_10417_1113: {
    width: wp("56%"),
    minWidth: wp("56%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_10417_1113: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1114: {
    width: wp("52%"),
    minWidth: wp("52%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("12%"),
    justifyContent: "flex-end"
  },
  Text_10417_1114: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1115: {
    width: wp("53%"),
    minWidth: wp("53%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_10417_1115: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1116: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("140%")
  },
  View_10417_1117: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_10417_1118: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_10417_1119: {
    width: wp("52%"),
    minWidth: wp("52%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("12%"),
    justifyContent: "flex-end"
  },
  Text_10417_1119: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1120: {
    width: wp("53%"),
    minWidth: wp("53%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_10417_1120: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1121: {
    width: wp("56%"),
    minWidth: wp("56%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_10417_1121: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1122: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("160%")
  },
  View_10417_1123: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_10417_1124: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_10417_1125: {
    width: wp("56%"),
    minWidth: wp("56%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_10417_1125: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1126: {
    width: wp("52%"),
    minWidth: wp("52%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("12%"),
    justifyContent: "flex-end"
  },
  Text_10417_1126: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1127: {
    width: wp("53%"),
    minWidth: wp("53%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_10417_1127: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1128: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("180%")
  },
  View_10417_1129: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_10417_1130: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_10417_1131: {
    width: wp("56%"),
    minWidth: wp("56%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_10417_1131: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1132: {
    width: wp("52%"),
    minWidth: wp("52%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("12%"),
    justifyContent: "flex-end"
  },
  Text_10417_1132: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1133: {
    width: wp("53%"),
    minWidth: wp("53%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_10417_1133: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1134: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(243, 245, 249, 1)",
    overflow: "hidden"
  },
  View_10417_1135: {
    width: wp("80%"),
    minWidth: wp("80%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("6%"),
    justifyContent: "flex-end"
  },
  Text_10417_1135: {
    color: "rgba(0, 24, 72, 1)",
    fontSize: 26,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1136: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("14%")
  },
  View_10417_1137: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(206, 17, 39, 1)",
    opacity: 0.4000000059604645
  },
  View_10417_1138: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_10417_1138: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1139: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("14%")
  },
  View_10417_1140: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(206, 17, 39, 1)",
    opacity: 0.4000000059604645
  },
  View_10417_1141: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_10417_1141: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1142: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("14%")
  },
  View_10417_1143: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(206, 17, 39, 1)"
  },
  View_10417_1144: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_10417_1144: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
