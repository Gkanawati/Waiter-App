import { Menu } from '../components/Menu';
import { Header } from '../components/Header';
import { Categories } from '../components/Categories';
import {
  Container,
  CategoriesContainer,
  MenuContainer,
  Footer,
  FooterContent,
} from './styles';
import { Button } from '../components/Button';
import { TableModal } from '../components/TableModal';
import { useState } from 'react';
import { Cart } from '../components/Cart';
import { CartItem } from '../@types/CartItem';
import { products } from '../mocks/products';

export function Main() {
  const [selectedTable, setSelectedTable] = useState('');
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    // {
    //   quantity: 1,
    //   product: products[0],
    // },
    // {
    //   quantity: 2,
    //   product: products[1],
    // },
  ]);

  function handleSaveTable(table: string) {
    setSelectedTable(table);
    alert(`Main: ${table}`);
  }

  function handleCancelOrder() {
    setSelectedTable('');
  }

  return (
    <>
      <Container>
        <Header
          selectedTable={selectedTable}
          onCancelOrder={handleCancelOrder}
        />

        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>

        <MenuContainer>
          <Menu />
        </MenuContainer>
      </Container>

      <Footer>
        <FooterContent>
          {!selectedTable ? (
            <Button onPress={() => setIsTableModalVisible(true)}>
              Novo Pedido
            </Button>
          ) : (
            <Cart cartItems={cartItems} />
          )}
        </FooterContent>
      </Footer>

      <TableModal
        visible={isTableModalVisible}
        onSave={handleSaveTable}
        onClose={() => setIsTableModalVisible(false)}
      />
    </>
  );
}
