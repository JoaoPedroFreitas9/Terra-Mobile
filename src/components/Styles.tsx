// src/components/Styles.ts
import { StyleSheet } from "react-native";
import { colors } from "../components/Colors"; 

export default StyleSheet.create({
  text: {
    color: colors.textSecondary,
  },
  image: {
    flex: 0, 
    width: 350,
    height: 350,
    resizeMode: "cover",
    alignSelf: "center",
    borderRadius: 175,
    margin: 50,
    marginTop: 75, 
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.textPrimary,
    marginTop: 28,
    marginBottom: 12,
  },
  button: {
    flex: 2,
    position: "absolute",
    backgroundColor: colors.secondary,
    borderRadius: 50,
    paddingVertical: 8,
    width: "60%",
    alignSelf: "center",
    bottom: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
  back: {
    flex: 1.5,
    justifyContent: "flex-end",
    backgroundColor: colors.primary,
  },
  back2: {
    flex: 1.5,
    backgroundColor: colors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "10%",
  },
  textButton: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 16
  },
  Header: {
    marginTop: "5%",
  },
  message: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.textPrimary,
  },
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: "center",
  },
  textLogin: {
    color: colors.white,
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 100,
    paddingStart: "5%",
  },
  Header2: {
    marginTop: "14%",
    marginBottom: "8%",
    paddingStart: "5%",
    paddingEnd: "5%",
    marginHorizontal: 10,
    backgroundColor: colors.white,
    borderRadius: 25,
    flex: 1,
  },
  Header3: {
    backgroundColor: "white",
    paddingStart: "5%",
    paddingEnd: "5%",
    borderRadius: 25,
    marginHorizontal: 20,
    marginBottom: 0,
    marginTop: "12%"
  },
  email: {
    color: colors.textPrimary,
    fontSize: 20,
    marginTop: 28,
  },
  input: {
    color: colors.textPrimary,
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  registerText: {
    color: colors.textSecondary,
    paddingRight: 5
  },
  buttonLineRegister: {
    color: colors.blue, 
  },
  buttonLogin: {
    backgroundColor: colors.secondary,
    width: "100%",
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonRegister: {
    backgroundColor: colors.secondary,
    width: "60%",
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
  },
  lineRegister: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
  },
  footerRegister: {
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center"
  }
});
