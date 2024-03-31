import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import { SkipLink } from '@/components/SkipLink.tsx';
import { Product } from '@/constants';

type Order = Array<
  Product & {
    quantity: number;
  }
>;

const HomePage = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('order') || '[]');
    setOrders(storedOrders);
  }, []);

  return (
    <>
      <SkipLink href="#main">본문 바로가기</SkipLink>
      <Header />
      <div className="focus-children" id="main">
        <h1 className="mt-100 font-32 text-center" tabIndex={0}>
          웹 접근성, 손끝으로 탐험하고 🖐️
        </h1>
        <h1 className="mt-10 font-32 text-center" tabIndex={0}>
          웹의 즐거움, 모두가 함께 나눠요 🌍
        </h1>
      </div>
      <div className="flex flex-col w-480 focus-children" style={{ margin: '50px auto' }}>
        <h2 className="text-center" tabIndex={0}>
          주문 내역
        </h2>
        {orders.length > 0 ? (
          orders.map((product, index) => (
            <ul className="text-center border p-5 mt-20 gap-15 focus-children">
              <li tabIndex={0}>주문 {index + 1} 번째</li>
              {product.map((item) => (
                <li key={item.id} tabIndex={0}>
                  <span>{item.name}</span> <span>{item.price}원</span> <span>{item.quantity}개</span>
                </li>
              ))}
            </ul>
          ))
        ) : (
          <p className="text-center">주문 내역이 없습니다.</p>
        )}
      </div>
    </>
  );
};

export default HomePage;
