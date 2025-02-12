import React from 'react'
import { FlatList, Modal, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import { CardProduct } from '../HomeScreen'
import { styles } from '../../../theme/appThemes';
import { PRIMARY_COLOR } from '../../../theme/commons/constant';
import Icon from 'react-native-vector-icons/MaterialIcons';
interface Props {
    isVisible: boolean,
    cardProduct: CardProduct[];
    setshowModalCar: () => void;

}

export const ModalCar = ({ isVisible, cardProduct, setshowModalCar }: Props) => {
    const { width } = useWindowDimensions();
    //funcion para calcular el totoal de la compra
    const totalPay=():number=>{
        //acumulador
        let total:number=0;
        cardProduct.forEach(product=>{
            total+=product.total;
        })
        return total;
    }
    return (
        <Modal visible={isVisible} animationType='fade' transparent={true}>
            <View style={styles.containerModal}>
                <View style={{
                    ...styles.modalProduct,
                    width: width * 0.90
                }}>
                    {/* //cabezera */}
                    <View style={styles.headerModal}>
                        <Text style={styles.titleHeaderModel}>Mis Productos</Text>
                        <View style={styles.containerIcon}>
                            <Icon
                                name='close'
                                size={25}
                                color={PRIMARY_COLOR}
                                onPress={setshowModalCar}
                            />
                        </View>
                    </View>
                    <View style={styles.headerTableCart}>
                        <Text style={styles.textHeaderTable}>Producto</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{
                                ...styles.textHeaderTable,
                                marginHorizontal: 10
                            }}>Precio</Text>
                            <Text style={styles.textHeaderTable} >Cantidad</Text>
                            <Text style={{
                                ...styles.textHeaderTable,
                                marginHorizontal: 10
                            }}>Total</Text>
                        </View>
                    </View>
                    <FlatList
                        data={cardProduct}
                        renderItem={({ item }) =>
                            <View style={styles.headerTableCart}>
                                <Text>{item.name}</Text>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{marginHorizontal:10}}>${item.price.toFixed(2)}</Text>
                                    <Text style={{paddingHorizontal:25}}>{item.quantity}</Text>
                                    <Text style={{marginHorizontal:10}}>${item.total.toFixed(2)}</Text>
                                </View>
                            </View>
                            }
                        keyExtractor={item => item.id.toString()}/>
                        <View style={styles.conatinerTotal}>
                            <Text style={styles.textTotal}>Total a Pagar: ${totalPay().toFixed(2)}</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.buttonAddCar}>
                                <Text style={styles.buttonAddCarText}>Comprar</Text>
                            </TouchableOpacity>
                        </View>
                </View>
            </View>
        </Modal>
    )
}
