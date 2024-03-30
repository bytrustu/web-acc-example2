import { toast } from 'react-toastify';
import { Header } from '@/components/Header.tsx';
import { PRODUCTS } from '@/constants/products.ts';

const addToCart = (productId: number) => {
  const currentCart = JSON.parse(localStorage.getItem('cart') || '[]');
  if (currentCart.includes(productId)) {
    toast.info('이미 장바구니에 추가된 상품입니다.', {
      position: 'bottom-right',
    });
    return;
  }

  const updatedCart = [...currentCart, productId];
  localStorage.setItem('cart', JSON.stringify(updatedCart));
  toast('장바구니에 상품이 추가되었습니다.', {
    position: 'bottom-right',
  });
};

const ProductsPage = () => (
  <>
    <Header />

    <section className="product-container">
      {PRODUCTS.sort(() => Math.random() - 0.5).map((product) => (
        <div className="product-item" key={product.id}>
          <div className="product-image">
            <img src={product.imageUrl} alt={product.name} tabIndex={0} />
          </div>
          <div className="flex justify-between w-280 p-5">
            <div className="product-info flex flex-col">
              <span className="product-info__name" tabIndex={0}>
                {product.name}
              </span>
              <span className="product-info__price mt-10" tabIndex={0}>
                {product.price.toLocaleString()}원
              </span>
            </div>
            <div className="product-buttons">
              <button className="product-button" aria-label="좋아요">
                <img src="assets/icon4.svg" width="24px" alt="좋아요 아이콘" />
              </button>
              <button className="product-button" aria-label="즐겨찾기">
                <img src="assets/icon3.svg" width="24px" alt="즐겨찾기 아이콘" />
              </button>
              <button className="product-button" onClick={() => addToCart(product.id)} aria-label="장바구니">
                <img src="assets/icon1.svg" width="24px" alt="장바구니 아이콘" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  </>
);

export default ProductsPage;
