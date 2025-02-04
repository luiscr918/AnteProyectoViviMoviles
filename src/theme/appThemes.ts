import React from 'react'
import { StyleSheet } from 'react-native'
import { INPUT_COLOR, SECONDARY_COLOR, TERTARY_COLOR } from './commons/constant'

export const styles = StyleSheet.create({
    body:{
        backgroundColor:SECONDARY_COLOR,
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
    titleDescription:{
        fontSize:15
    },
    inputText:{
        backgroundColor:INPUT_COLOR,
        width:'95%',
        borderRadius:10,
        margin:10
    }
})
