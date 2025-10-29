// pages/ProductDetail.tsx
import React from 'react';
import { useTypedParams } from '../hooks/useTypedParams';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}

const ProductDetail: React.FC = () => {
  const { id } = useTypedParams<'/product/:id'>();
  const [product, setProduct] = React.useState<Product | null>(null);

  React.useEffect(() => {
    const fetchProduct = async () => {
      const productData: Product = {
        id,
        name: `产品 ${id}`,
        price: Math.random() * 100,
        description: `这是产品 ${id} 的详细描述`,
      };
      setProduct(productData);
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>加载产品信息...</div>;
  }

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <p className="price">¥{product.price.toFixed(2)}</p>
      <p className="description">{product.description}</p>
    </div>
  );
};

export default ProductDetail;