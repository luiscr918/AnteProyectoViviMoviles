import React from 'react'
import { Text, View, StatusBar, FlatList } from 'react-native';
import { PRIMARY_COLOR } from '../../theme/commons/constant';
import { TitleComponents } from '../../components/TitleComponents';
import { BodyComponents } from '../../components/BodyComponents';
import { CardProducts } from './components/CardProducts';

//Definir la interface para arreglo productos
export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  pathImage: string;
}
export const HomeScreen = () => {
  //fefinir arreglo de productos
  const products: Product[] = [
    { id: 1, name: 'Funda de azucar', price: 3.30, stock: 0, pathImage: 'https://tienda.propieta.ec/wp-content/uploads/2021/03/azucar-blanca.jpg' },
    { id: 2, name: 'Funda de arroz', price: 1.20, stock: 7, pathImage: 'https://36580daefdd0e4c6740b-4fe617358557d0f7b1aac6516479e176.ssl.cf1.rackcdn.com/products/31117.41278.jpg' },
    { id: 3, name: 'Funda de papas', price: 2.00, stock: 10, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/69367_G.jpg' },
    { id: 4, name: 'Funda de fideos ', price: 1.00, stock: 9, pathImage: 'https://www.supermaxi.com/wp-content/uploads/2024/08/items2Figm2F1000x10002F7861042507505-1-2.jpg.webp' },
    { id: 5, name: 'Funda de sal', price: 0.80, stock: 8, pathImage: 'https://distribuidoracampos.com/wp-content/uploads/2023/01/CRIS-SAL-2KG-pvp-0.95.jpg' }
  ]
  return (
    <View>
      <StatusBar backgroundColor={PRIMARY_COLOR} />
      <TitleComponents title='Productos' />
      <BodyComponents>
        <FlatList
          data={products}
          renderItem={({ item }) => <CardProducts product={item} />}
          keyExtractor={item => item.id.toString()}
        />
      </BodyComponents>
    </View>
  )
}
