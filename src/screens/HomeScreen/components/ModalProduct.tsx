import React, { useState } from 'react'
import { Image, Modal, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import { styles } from '../../../theme/appThemes'
import { Product } from '../HomeScreen'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR } from '../../../theme/commons/constant';
//definir interfaz para las propiedades del componente
interface Props {
    product: Product;
    isVisible: boolean;
    setShowModalProduct: () => void
    handleChangeStock:(id: number, quantity: number)=>void
}

export const ModalProduct = ({ product, isVisible, setShowModalProduct,handleChangeStock }: Props) => {
    const { id,name, pathImage, price, stock } = product;
    //hook useWindowDimension
    const { width } = useWindowDimensions();
    //hook useState para manejar la cantidad de productos
    const [quantity, setQuantity] = useState<number>(1);
    //funcion de cerrar el modal y setear la cantidad a 1
    const closeModal=()=>{
        setShowModalProduct();
        //modificar el valor del contador
        setQuantity(1);
    }
    //duncion para agregar al carrito
    const handleAddProduct=()=>{
        //llamar funcion para actualizar el stock
        handleChangeStock(id,quantity);
        //cerrar el modal
        closeModal();
    }
    return (
        <Modal
            visible={isVisible}
            animationType='fade'
            transparent={true}
        >
            <View style={styles.containerModal}>
                <View style={{
                    ...styles.modalProduct,
                    width: width * 0.80
                }} >
                    {/* //cabezera */}
                    <View style={styles.headerModal}>
                        <Text style={styles.titleHeaderModel}>{name}- ${price.toFixed(2)}</Text>
                        <View style={styles.containerIcon}>
                            <Icon
                                name='close'
                                size={25}
                                color={PRIMARY_COLOR}
                                onPress={closeModal}
                            />
                        </View>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={{
                            uri: pathImage
                        }}
                            style={styles.imageModal} />
                    </View>
                    {
                        (stock === 0)
                            ? <Text style={styles.textWarningStock}>Producto Agotado</Text>
                            :
                            <View>
                                <View style={styles.containerQuantity}>
                                    <TouchableOpacity style={styles.buttonQuantity}
                                        onPress={() => setQuantity(quantity - 1)}
                                        disabled={quantity === 1}
                                    >
                                        <Text style={styles.buttonQuantityText}>-1</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.textQuantity}>{quantity}</Text>
                                    <TouchableOpacity style={styles.buttonQuantity}
                                        onPress={() => setQuantity(quantity + 1)}
                                        disabled={quantity === stock}
                                    >
                                        <Text style={styles.buttonQuantityText}>+1</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={styles.textQuantity}>Total: $ {(price * quantity).toFixed(2)}</Text>
                                </View>
                                <View>
                                    <TouchableOpacity style={styles.buttonAddCar}
                                    onPress={handleAddProduct}
                                    >
                                        <Text style={styles.buttonAddCarText}>Agregar carrito</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                    }
                </View>
            </View>
        </Modal>

    )
}
