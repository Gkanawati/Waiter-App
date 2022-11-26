import { useState } from 'react';
import { FlatList } from 'react-native';
import { Category } from '../../@types/Category';
import { Text } from '../Text';
import { CategoryContainer, Icon } from './styles';

interface CategoriesProps {
  categories: Category[];
  onSelectCategory: (categoryId: string) => Promise<void>;
}

export function Categories({ categories, onSelectCategory }: CategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState('');

  function handleSelectCategory(categoryId: string) {
    const category = selectedCategory === categoryId ? '' : categoryId;
    onSelectCategory(category);
    setSelectedCategory(category);
  }

  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => {
        const isSelected = selectedCategory === item._id;
        return (
          <CategoryContainer onPress={() => handleSelectCategory(item._id)}>
            <Icon>
              <Text opacity={isSelected ? 1 : 0.5}>{item.icon}</Text>
            </Icon>

            <Text size={14} weight='600' opacity={isSelected ? 1 : 0.5}>
              {item.name}
            </Text>
          </CategoryContainer>
        );
      }}
      contentContainerStyle={{ paddingRight: 24 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
}
