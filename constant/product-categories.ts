export type ProductCategory = {
  value: string;
  label: string;
  subcategories?: ProductSubcategory[];
};

export type ProductSubcategory = {
  value: string;
  label: string;
};

export const productCategories: ProductCategory[] = [
  {
    value: 'clothing',
    label: 'Clothing',
    subcategories: [
      { value: 't-shirt', label: 'T-Shirt' },
      { value: 'jeans', label: 'Jeans' },
      { value: 'sunglass', label: 'Sunglass' },
      { value: 'dress', label: 'Dress' },
      { value: 'shoes', label: 'Shoes' },
      { value: 'hat', label: 'Hat' },
      { value: 'jacket', label: 'Jacket' },
      { value: 'sweater', label: 'Sweater' },
      { value: 'swimsuit', label: 'Swimsuit' },
      { value: 'underwear', label: 'Underwear' },
      { value: 'socks', label: 'Socks' },
      { value: 'watch', label: 'Watch' },
    ],
  },
  {
    value: 'electronics',
    label: 'Electronics',
    subcategories: [
      { value: 'smartphones', label: 'Smartphones' },
      { value: 'laptops', label: 'Laptops' },
      { value: 'tablets', label: 'Tablets' },
      { value: 'headphones', label: 'Headphones' },
      { value: 'cameras', label: 'Cameras' },
      { value: 'smartwatches', label: 'Smartwatches' },
      { value: 'televisions', label: 'Televisions' },
      { value: 'printers', label: 'Printers' },
      { value: 'gaming-consoles', label: 'Gaming Consoles' },
    ],
  },
  {
    value: 'food',
    label: 'Food',
    subcategories: [
      { value: 'fruit', label: 'Fruit' },
      { value: 'vegetable', label: 'Vegetable' },
      { value: 'meat', label: 'Meat' },
      { value: 'seafood', label: 'Seafood' },
      { value: 'dairy', label: 'Dairy Products' },
      { value: 'bread', label: 'Bread & Bakery' },
      { value: 'beverage', label: 'Beverages' },
      { value: 'snack', label: 'Snacks' },
      { value: 'cereal', label: 'Cereals & Breakfast Foods' },
      { value: 'canned-food', label: 'Canned Foods' },
      { value: 'condiment', label: 'Condiments & Sauces' },
      { value: 'dessert', label: 'Desserts & Sweets' },
      { value: 'prepared-food', label: 'Prepared Foods' },
      { value: 'organic-food', label: 'Organic Foods' },
      { value: 'gluten-free', label: 'Gluten-Free Products' },
      { value: 'specialty-food', label: 'Specialty Foods' },
      { value: 'baby-food', label: 'Baby Food' },
      { value: 'pet-food', label: 'Pet Food' },
    ],
  },
  {
    value: 'home-and-furniture',
    label: 'Home And Furniture',
    subcategories: [
      { value: 'furniture', label: 'Furniture' },
      { value: 'home-decor', label: 'Home Decor' },
      { value: 'bedding', label: 'Bedding & Linens' },
      { value: 'kitchenware', label: 'Kitchenware' },
      { value: 'lighting', label: 'Lighting' },
      { value: 'storage', label: 'Storage & Organization' },
      { value: 'bathroom', label: 'Bathroom Accessories' },
      { value: 'garden', label: 'Garden & Outdoor' },
      { value: 'rugs', label: 'Rugs & Carpets' },
    ],
  },
  {
    value: 'beauty-and-personal-care',
    label: 'Beauty & Personal Care',
    subcategories: [
      { value: 'skincare', label: 'Skincare' },
      { value: 'makeup', label: 'Makeup' },
      { value: 'haircare', label: 'Haircare' },
      { value: 'fragrance', label: 'Fragrance' },
      { value: 'personal-hygiene', label: 'Personal Hygiene' },
      { value: 'oral-care', label: 'Oral Care' },
      { value: 'shaving', label: 'Shaving & Grooming' },
      { value: 'bath-body', label: 'Bath & Body' },
    ],
  },
  {
    value: 'sports-and-outdoors',
    label: 'Sports & Outdoors',
    subcategories: [
      { value: 'fitness', label: 'Fitness Equipment' },
      { value: 'sports-clothing', label: 'Sports Clothing' },
      { value: 'outdoor-gear', label: 'Outdoor Gear' },
      { value: 'camping-hiking', label: 'Camping & Hiking' },
      { value: 'biking', label: 'Biking' },
      { value: 'water-sports', label: 'Water Sports' },
      { value: 'winter-sports', label: 'Winter Sports' },
      { value: 'team-sports', label: 'Team Sports' },
    ],
  },
  {
    value: 'toys-and-games',
    label: 'Toys & Games',
    subcategories: [
      { value: 'action-figures', label: 'Action Figures' },
      { value: 'board-games', label: 'Board Games' },
      { value: 'educational-toys', label: 'Educational Toys' },
      { value: 'puzzles', label: 'Puzzles' },
      { value: 'remote-control-toys', label: 'Remote Control Toys' },
      { value: 'building-toys', label: 'Building Toys' },
      { value: 'dolls', label: 'Dolls & Accessories' },
      { value: 'pretend-play', label: 'Pretend Play & Dress-Up' },
    ],
  },
  {
    value: 'books-and-media',
    label: 'Books & Media',
    subcategories: [
      { value: 'books', label: 'Books' },
      { value: 'ebooks', label: 'Ebooks' },
      { value: 'audiobooks', label: 'Audiobooks' },
      { value: 'movies', label: 'Movies' },
      { value: 'music', label: 'Music' },
      { value: 'magazines', label: 'Magazines' },
      { value: 'newspapers', label: 'Newspapers' },
    ],
  },
];
