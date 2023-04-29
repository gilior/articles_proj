export type Category = {
  id: number;
  name: String
}

export type Article = {
  id: number;

  title: string;

  description: string;

  image: string;

  categoryId: number
  isFavorite: boolean;
  category: Category
}
