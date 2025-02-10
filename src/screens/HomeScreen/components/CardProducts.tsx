import React from 'react'
import { Image, Text, View } from 'react-native'
import { Product } from '../HomeScreen'
import { styles } from '../../../theme/appThemes'
interface Props {
    product: Product
}
export const CardProducts = ({ product }: Props) => {
    const { id, name, price, stock, pathImage } = product;
    return (
        <View style={styles.containerCard}>
            <Text >ID: {id}</Text>
            <Text  style={styles.titleCard}>Product Name:<Text>{name}</Text></Text>
            <Text>Price: {price}</Text>
            <Text>Stock: {stock}</Text>
            <Image
            style={styles.imageCard}
            source={
                {
                    uri:pathImage
                }} />

        </View>
    )
}
