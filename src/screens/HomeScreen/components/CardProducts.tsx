import React, { useState } from 'react'
import { Image, Text, View } from 'react-native'
import { Product } from '../HomeScreen'
import { styles } from '../../../theme/appThemes'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR } from '../../../theme/commons/constant';
import { ModalProduct } from './ModalProduct';
interface Props {
    product: Product
    handleChangeStock:(id: number, quantity: number)=>void
}
export const CardProducts = ({ product,handleChangeStock }: Props) => {
    const { id, name, price, stock, pathImage } = product;
    //hook state para manejar la visibilidad del modal
    const [showModalProduct, setShowModalProduct] = useState<boolean>(false);
    return (
        <View>
            <View style={styles.containerCard}>

                <Image
                    style={styles.imageCard}
                    source={
                        {
                            uri: pathImage
                        }} />
                <View>
                    <Text style={styles.titleCard}>{name}</Text>
                    <Text>Price: ${price.toFixed(2)}</Text>

                </View>
                <View style={styles.containerIcon}>
                    <Icon name='add-shopping-cart' size={30} color={PRIMARY_COLOR}
                    onPress={()=>setShowModalProduct(!showModalProduct)}
                    />
                </View>
            </View>
            <ModalProduct product={product} 
            handleChangeStock={handleChangeStock}
            isVisible={showModalProduct}
            setShowModalProduct={()=>setShowModalProduct(!setShowModalProduct)}
            />
        </View>
    )
}
