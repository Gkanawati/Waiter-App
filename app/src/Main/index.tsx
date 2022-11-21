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

export function Main() {
  const [selectedTable, setSelectedTable] = useState('');
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);

  function handleSaveTable(table: string) {
    setSelectedTable(table);
    alert(`Main: ${table}`);
  }

  return (
    <>
      <Container>
        <Header />

        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>

        <MenuContainer>
          <Menu />
        </MenuContainer>
      </Container>

      <Footer>
        <FooterContent>
          {!selectedTable && (
            <Button onPress={() => setIsTableModalVisible(true)}>
              Novo Pedido
            </Button>
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
