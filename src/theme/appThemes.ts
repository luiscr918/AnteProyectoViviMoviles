import React from "react";
import { StyleSheet } from "react-native";
import {
  BUTTON_PRIMARY_COLOR,
  FONDO_COLOR,
  INPUT_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  TERTARY_COLOR,
} from "./commons/constant";

export const styles = StyleSheet.create({
  body: {
    backgroundColor: FONDO_COLOR,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 35,
    paddingTop: 40,
  },
  title: {
    color: SECONDARY_COLOR,
    fontSize: 27,
    paddingHorizontal: 30,
    paddingVertical: 30,
    fontWeight: "bold",
  },
  titlePrincipal: {
    fontSize: 17,
    fontWeight: "bold",
    color: TERTARY_COLOR,
  },
  textDescription: {
    fontSize: 15,
    color: TERTARY_COLOR,
    marginTop: 7,
  },
  inputText: {
    backgroundColor: INPUT_COLOR,
    borderRadius: 10,
    marginVertical: 7,
  },
  containerForm: {
    marginVertical: 20,
  },
  buttonForm: {
    backgroundColor: BUTTON_PRIMARY_COLOR,
    paddingVertical: 15,
    borderRadius: 15,
  },
  buttonFormText: {
    color: SECONDARY_COLOR,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
  },
  iconPassword: {
    position: "absolute",
    right: 10,
    bottom: 15,
  },
  textRedirect: {
    color: "#2F4AF7",
    marginTop: 20,
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  containerCard: {
    padding: 15,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 2.65,
    borderWidth: 1,
    borderColor: SECONDARY_COLOR,
    borderStyle: "solid",
    margin: 5,
    elevation: 2,
    alignItems: "center",
    flexDirection: "row",
  },
  titleCard: {
    fontSize: 15,
    fontWeight: "bold",
    color: TERTARY_COLOR,
  },
  imageCard: {
    height: 100,
    width: 100,
  },
  containerIcon: {
    flex: 1,
    alignItems: "flex-end",
  },
  containerModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalProduct: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: '"#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  headerModal: {
    flexDirection: "row",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    borderStyle: "solid",
    padding: 10,
  },
  titleHeaderModel: {
    fontSize: 18,
    fontWeight: "bold",
    color: TERTARY_COLOR,
  },
  imageModal: {
    width: 150,
    height: 150,
  },
  containerQuantity: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonQuantity: {
    backgroundColor: PRIMARY_COLOR,
    height: 60,
    width: 60,
    borderRadius: 100,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonQuantityText: {
    color: SECONDARY_COLOR,
    fontSize: 20,
    fontWeight: "bold",
  },
  textQuantity: {
    fontSize: 15,
    color: TERTARY_COLOR,
    fontWeight: "bold",
    margin: 10,
  },
  buttonAddCar: {
    backgroundColor: PRIMARY_COLOR,
    marginTop: 15,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonAddCarText: {
    color: SECONDARY_COLOR,
    fontWeight: "bold",
  },
  textWarningStock:{
    color:'red',
    fontSize:15,
    fontWeight:'bold',
    textAlign:'center',
    margin:10
  },
  headerProducts:{
    flexDirection:'row',
    alignItems:'center'
  },
  textIconCar:{
    backgroundColor:SECONDARY_COLOR,
    paddingHorizontal:5,
    borderRadius:10,
    fontSize:13,
    fontWeight:'bold'
  },
  headerTableCart:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  textHeaderTable:{
    fontWeight:'bold',
    color:TERTARY_COLOR
  },
  conatinerTotal:{
    alignItems:'flex-end',
    marginVertical:15,
  },
  textTotal:{
    fontWeight:'bold',
    paddingHorizontal:10,
    fontSize:18
  }
});
