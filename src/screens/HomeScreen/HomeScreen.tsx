import React, { useState } from 'react'
import { Text, View, StatusBar, FlatList } from 'react-native';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../theme/commons/constant';
import { TitleComponents } from '../../components/TitleComponents';
import { BodyComponents } from '../../components/BodyComponents';
import { CardProducts } from './components/CardProducts';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../../theme/appThemes';
import { ModalCar } from './components/ModalCar';

//Definir la interface para arreglo productos
export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  pathImage: string;
};
//definir interfaz para el arreglo de carProduct
export interface CardProduct {
  id: number;
  name: string;
  price: number;
  quantity:number;
  total: number;
}
export const HomeScreen = () => {

  //fefinir arreglo de productos
  const products: Product[] = [
    { id: 1, name: 'Funda de azucar', price: 3.30, stock: 5, pathImage: 'https://tienda.propieta.ec/wp-content/uploads/2021/03/azucar-blanca.jpg' },
    { id: 2, name: 'Funda de arroz', price: 1.20, stock: 7, pathImage: 'https://36580daefdd0e4c6740b-4fe617358557d0f7b1aac6516479e176.ssl.cf1.rackcdn.com/products/31117.41278.jpg' },
    { id: 3, name: 'Funda de papas', price: 2.00, stock: 10, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/69367_G.jpg' },
    { id: 4, name: 'Funda de fideos ', price: 1.00, stock: 9, pathImage: 'https://www.supermaxi.com/wp-content/uploads/2024/08/items2Figm2F1000x10002F7861042507505-1-2.jpg.webp' },
    { id: 5, name: 'Funda de sal', price: 0.80, stock: 8, pathImage: 'https://distribuidoracampos.com/wp-content/uploads/2023/01/CRIS-SAL-2KG-pvp-0.95.jpg' }
  ];
  //HOOK useState para manejar el estado del stock
  const [productState, setProductState] = useState<Product[]>(products);
  //hook useState para gestionar los productos del Carrito
  const [carProduct, setCarProduct] = useState<CardProduct[]>([]);

  //funcion para controlar el stock
  const handleChangeStock = (id: number, quantity: number): void => {
    const updateStock = productState.map(product => product.id === id
      ? {
        ...product,
        stock: product.stock - quantity
      }
      : product);
    //modificar el arreglo en el productState
    setProductState(updateStock);
    //llamar funcion para agregar al carrito
    addProductCar(id, quantity);
    /* console.log(carProduct) */
  }
  //FUNCION PARA IR AGREGANDO AL CARRITO
  const addProductCar = (id: number, quantity: number): void => {
    const product = productState.find(product => product.id === id);

    //si producto no existe
    if (!product)  //if sin llaves en typescript solo si es sin else
      return;
    //Crear producto para agregar al carrito
    const newProduct: CardProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity:quantity,
      total: product.price * quantity
    }
    //Agregar en el arreglo de carProducts
    setCarProduct([...carProduct, newProduct]);
  }
      //hook useState para gestionar la visibilidad del modal
      const [showModalCar, setshowModalCar] = useState<boolean>(false);

  return (
    <View>
    <View>
      <StatusBar backgroundColor={PRIMARY_COLOR} />
      <View style={styles.headerProducts}>
        <TitleComponents title='Productos' />
        <View style={{...styles.containerIcon,
          paddingHorizontal:30
        }}>
          <Text style={styles.textIconCar}>{carProduct.length}</Text>
          <Icon
            name='shopping-cart'
            size={28}
            color={SECONDARY_COLOR}
            onPress={()=>setshowModalCar(!showModalCar)}
          />
        </View>
      </View>
      <BodyComponents>
        <FlatList
          data={productState}
          renderItem={({ item }) => <CardProducts product={item} handleChangeStock={handleChangeStock} />}
          keyExtractor={item => item.id.toString()}
        />
      </BodyComponents>
    </View>
    <ModalCar 
    isVisible={showModalCar}
    cardProduct={carProduct} 
    setshowModalCar={()=>setshowModalCar(!showModalCar)
 
    }
    />
    </View>
  )
}
