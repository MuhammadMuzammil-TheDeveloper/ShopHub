export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  features: string[];
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Apple iPhone 15 Pro Max",
    price: 1199.99,
    description: "The most advanced iPhone ever with titanium design, A17 Pro chip, and professional camera system.",
    category: "electronics",
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: { rate: 4.8, count: 2547 },
    features: ["6.7-inch Super Retina XDR display", "A17 Pro chip", "Triple camera system", "5G connectivity"],
    inStock: true
  },
  {
    id: 2,
    title: "Samsung Galaxy S24 Ultra",
    price: 1299.99,
    description: "Premium Android smartphone with S Pen, advanced AI features, and exceptional camera capabilities.",
    category: "electronics",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: { rate: 4.7, count: 1893 },
    features: ["6.8-inch Dynamic AMOLED display", "S Pen included", "200MP camera", "AI-powered features"],
    inStock: true
  },
  {
    id: 3,
    title: "Sony WH-1000XM5 Headphones",
    price: 399.99,
    description: "Industry-leading noise canceling wireless headphones with premium sound quality.",
    category: "electronics",
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: { rate: 4.9, count: 3421 },
    features: ["30-hour battery life", "Active noise canceling", "Quick charge", "Touch controls"],
    inStock: true
  },
  {
    id: 4,
    title: "Apple MacBook Air M3",
    price: 1099.99,
    description: "Supercharged by the M3 chip, with up to 18 hours of battery life and stunning Liquid Retina display.",
    category: "electronics",
    image: "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: { rate: 4.8, count: 1567 },
    features: ["M3 chip", "13.6-inch Liquid Retina display", "18-hour battery", "8GB unified memory"],
    inStock: true
  },
  {
    id: 5,
    title: "Nike Air Force 1 '07",
    price: 110.00,
    description: "The radiance lives on in the Nike Air Force 1 '07, the basketball original that puts a fresh spin on what you know best.",
    category: "clothing",
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: { rate: 4.6, count: 892 },
    features: ["Leather upper", "Air-sole unit", "Rubber outsole", "Classic design"],
    inStock: true
  },
  {
    id: 6,
    title: "Levi's 501 Original Jeans",
    price: 89.99,
    description: "The original blue jean since 1873. Straight fit with button fly and classic 5-pocket styling.",
    category: "clothing",
    image: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: { rate: 4.4, count: 567 },
    features: ["100% cotton denim", "Button fly", "Straight fit", "Machine washable"],
    inStock: true
  },
  {
    id: 7,
    title: "The Great Gatsby - Classic Literature",
    price: 12.99,
    description: "F. Scott Fitzgerald's masterpiece about the Jazz Age and the American Dream.",
    category: "books",
    image: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: { rate: 4.5, count: 2341 },
    features: ["Paperback edition", "180 pages", "Classic American literature", "New translation"],
    inStock: true
  },
  {
    id: 8,
    title: "Becoming by Michelle Obama",
    price: 19.99,
    description: "An intimate, powerful, and inspiring memoir by the former First Lady of the United States.",
    category: "books",
    image: "https://images.pexels.com/photos/159866/books-book-pages-read-159866.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: { rate: 4.9, count: 4567 },
    features: ["Hardcover edition", "448 pages", "Bestseller", "Personal memoir"],
    inStock: true
  },
  {
    id: 9,
    title: "Professional Chef's Knife Set",
    price: 149.99,
    description: "Premium stainless steel knife set with ergonomic handles, perfect for professional and home cooking.",
    category: "home",
    image: "https://images.pexels.com/photos/4226896/pexels-photo-4226896.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: { rate: 4.7, count: 234 },
    features: ["High-carbon stainless steel", "Ergonomic handles", "6-piece set", "Storage block included"],
    inStock: true
  },
  {
    id: 10,
    title: "Smart Home Security Camera",
    price: 79.99,
    description: "1080p HD wireless security camera with night vision, motion detection, and smartphone app control.",
    category: "home",
    image: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: { rate: 4.3, count: 678 },
    features: ["1080p HD video", "Night vision", "Motion alerts", "Cloud storage"],
    inStock: true
  }
];

export const categories = [
  { id: 'electronics', name: 'Electronics', count: 4 },
  { id: 'clothing', name: 'Clothing', count: 2 },
  { id: 'books', name: 'Books', count: 2 },
  { id: 'home', name: 'Home & Garden', count: 2 }
];