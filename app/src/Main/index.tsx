import { Menu } from '../components/Menu';
import { Header } from '../components/Header';
import { Categories } from '../components/Categories';
import {
  Container,
  CategoriesContainer,
  MenuContainer,
  Footer,
  FooterContent,
  CenteredContainer,
} from './styles';
import { Button } from '../components/Button';
import { TableModal } from '../components/TableModal';
import { useEffect, useState } from 'react';
import { Cart } from '../components/Cart';
import { CartItem } from '../@types/CartItem';
import { Product } from '../@types/Product';
import { Loading } from '../components/Loading';

import { Empty } from '../components/Icons/Empty';
import { Text } from '../components/Text';
import { Category } from '../@types/Category';
import { api } from '../utils/api';

export function Main() {
  const [selectedTable, setSelectedTable] = useState('');
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  function handleSaveTable(table: string) {
    setSelectedTable(table);
  }

  function handleResetOrder() {
    setSelectedTable('');
    setCartItems([]);
  }

  function handleAddToCart(product: Product) {
    if (!selectedTable) {
      setIsTableModalVisible(true);
    }

    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        (cartItem) => cartItem.product._id === product._id
      );

      if (itemIndex < 0) {
        return prevState.concat({ quantity: 1, product });
      }

      const newCartItems = [...prevState];
      const item = newCartItems[itemIndex];

      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity + 1,
      };

      return newCartItems;
    });
  }

  function handleDecrementCartItem(product: Product) {
    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        (cartItem) => cartItem.product._id === product._id
      );

      const newCartItems = [...prevState];
      const item = prevState[itemIndex];

      if (item.quantity === 1) {
        newCartItems.splice(itemIndex, 1);

        return newCartItems;
      }

      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity - 1,
      };

      return newCartItems;
    });
  }

  async function handleSelectCategory(categoryId: string) {
    const route = !categoryId
      ? '/products'
      : `/categories/${categoryId}/products`;
    setIsLoadingProducts(true);
    const { data } = await api.get(route);
    setProducts(data);
    setIsLoadingProducts(false);
  }

  useEffect(() => {
    Promise.all([api.get('/categories'), api.get('/products')])
      .then(([categoriesResponse, productsResponse]) => {
        console.log(JSON.stringify(productsResponse.data, null, 2));
        setCategories(categoriesResponse.data);
        setProducts(productsResponse.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Container>
        <Header
          selectedTable={selectedTable}
          onCancelOrder={handleResetOrder}
        />

        {!isLoading ? (
          <>
            <CategoriesContainer>
              <Categories
                onSelectCategory={(categoryId) =>
                  handleSelectCategory(categoryId)
                }
                categories={categories}
              />
            </CategoriesContainer>

            {!isLoadingProducts ? (
              <>
                {products.length > 0 ? (
                  <MenuContainer>
                    <Menu onAddToCart={handleAddToCart} products={products} />
                  </MenuContainer>
                ) : (
                  <CenteredContainer>
                    <Empty />
                    <Text color='#666' style={{ marginTop: 24 }}>
                      Nenhum produto foi encontrado!
                    </Text>
                  </CenteredContainer>
                )}
              </>
            ) : (
              <Loading />
            )}
          </>
        ) : (
          <Loading />
        )}
      </Container>

      <Footer>
        <FooterContent>
          {!selectedTable ? (
            <Button
              onPress={() => setIsTableModalVisible(true)}
              disabled={isLoading}
            >
              Novo Pedido
            </Button>
          ) : (
            <Cart
              cartItems={cartItems}
              selectedTable={selectedTable}
              onAdd={handleAddToCart}
              onDecrement={handleDecrementCartItem}
              onConfirmOrder={handleResetOrder}
            />
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
