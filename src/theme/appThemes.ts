import React from 'react'
import { StyleSheet } from 'react-native'
import { BUTTON_PRIMARY_COLOR, FONDO_COLOR, INPUT_COLOR, PRIMARY_COLOR, SECONDARY_COLOR, TERTARY_COLOR } from './commons/constant'

export const styles = StyleSheet.create({
    body:{
        backgroundColor:FONDO_COLOR,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:35,
        paddingTop:40


    },
    title:{
        color:SECONDARY_COLOR,
        fontSize:27,
        paddingHorizontal:30,
        paddingVertical:30,
        fontWeight:'bold'
        
    },
    titlePrincipal:{
        fontSize:17,
        fontWeight:'bold',
        color:TERTARY_COLOR
    },
    textDescription:{
        fontSize:15,
        color:TERTARY_COLOR,
        marginTop:7
    },
    inputText:{
        backgroundColor:INPUT_COLOR,
        borderRadius:10,
        marginVertical:7
    },
    containerForm:{
        marginVertical:20
    },
    buttonForm:{
        backgroundColor:BUTTON_PRIMARY_COLOR,
        paddingVertical:15,
        borderRadius:15
    },
    buttonFormText:{
        color:SECONDARY_COLOR,
        textAlign:'center',
        fontSize:14,
        fontWeight:'bold'
    },
    iconPassword:{
        position:'absolute',
        right:10,
        bottom:15
    },
    textRedirect:{
        color:'#2F4AF7',
        marginTop:20,
        fontSize:15,
        fontWeight:'bold',
        textAlign:'center'
    },
    containerCard:{
        padding:15,
        shadowColor:'#000',
        shadowOpacity:0.25,
        shadowRadius:2.65,
        borderWidth:1,
        borderColor:SECONDARY_COLOR,
        borderStyle:'solid',
        margin:5,
        elevation:2,
        alignItems:'center'
    },
    titleCard:{
        fontSize:15,
        fontWeight:'bold',
        color:TERTARY_COLOR
    },
    imageCard:{
        height:200,
        width:200
    }

})
