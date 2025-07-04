export const categories = [
  { id: 'electronics', name: 'Electronics', icon: 'Smartphone' },
  { id: 'clothing', name: 'Clothing', icon: 'Shirt' },
  { id: 'home', name: 'Home & Garden', icon: 'Home' },
  { id: 'sports', name: 'Sports & Outdoors', icon: 'Dumbbell' },
  { id: 'books', name: 'Books', icon: 'Book' },
  { id: 'beauty', name: 'Beauty & Health', icon: 'Heart' }
];

export const products = [
  {
    id: '1',
    name: 'Premium Wireless Headphone',
    price: 299.99,
    originalPrice: 399.99,
    category: 'electronics',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Experience crystal-clear audio with our premium wireless headphones featuring active noise cancellation.',
    features: ['Active Noise Cancellation', '30-hour battery life', 'Premium leather comfort', 'Hi-Res Audio certified'],
    rating: 4.8,
    reviews: 1247,
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 199.99,
    originalPrice: 249.99,
    category: 'electronics',
    image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Track your fitness goals with this advanced smartwatch featuring heart rate monitoring and GPS.',
    features: ['Heart Rate Monitor', 'GPS Tracking', '7-day battery', 'Water resistant'],
    rating: 4.6,
    reviews: 892,
    inStock: true,
    featured: true
  },
  {
    id: '3',
    name: 'Designer Cotton T-Shirt',
    price: 49.99,
    originalPrice: 69.99,
    category: 'clothing',
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Premium cotton t-shirt with modern fit and sustainable materials.',
    features: ['100% Organic Cotton', 'Modern Fit', 'Sustainable Materials', 'Machine Washable'],
    rating: 4.4,
    reviews: 324,
    inStock: true,
    featured: false
  },
  {
    id: '4',
    name: 'Professional Camera',
    price: 899.99,
    originalPrice: 1199.99,
    category: 'electronics',
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Capture stunning photos with this professional-grade camera featuring advanced autofocus.',
    features: ['24MP Sensor', '4K Video Recording', 'Advanced Autofocus', 'Weather Sealed'],
    rating: 4.9,
    reviews: 567,
    inStock: true,
    featured: true
  },
  {
    id: '5',
    name: 'Luxury Leather Jacket',
    price: 299.99,
    originalPrice: 399.99,
    category: 'clothing',
    image: 'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Handcrafted leather jacket made from premium materials with timeless design.',
    features: ['Genuine Leather', 'Handcrafted', 'Timeless Design', 'Multiple Pockets'],
    rating: 4.7,
    reviews: 189,
    inStock: true,
    featured: false
  },
  {
    id: '6',
    name: 'Modern Coffee Table',
    price: 399.99,
    originalPrice: 499.99,
    category: 'home',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Elegant coffee table with modern design perfect for contemporary living spaces.',
    features: ['Solid Wood Construction', 'Modern Design', 'Easy Assembly', 'Scratch Resistant'],
    rating: 4.5,
    reviews: 234,
    inStock: true,
    featured: true
  },
  {
    id: '7',
    name: 'Running Shoes',
    price: 129.99,
    originalPrice: 159.99,
    category: 'sports',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'High-performance running shoes designed for comfort and durability.',
    features: ['Breathable Mesh', 'Cushioned Sole', 'Lightweight Design', 'Durable Construction'],
    rating: 4.3,
    reviews: 456,
    inStock: true,
    featured: false
  },
  {
    id: '8',
    name: 'Bestselling Novel',
    price: 19.99,
    originalPrice: 24.99,
    category: 'books',
    image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Captivating novel that has topped bestseller lists worldwide.',
    features: ['Bestseller', 'Award Winning', 'Paperback Edition', 'Free Shipping'],
    rating: 4.6,
    reviews: 1023,
    inStock: true,
    featured: false
  }
];

export const featuredProducts = products.filter(product => product.featured);