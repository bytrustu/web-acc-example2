import { useState, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { MENU_ITEMS } from '@/constants/menu.ts';

export const Header = () => {
  const [expended, setExpended] = useState<number[]>([]);
  const handleExpendedClick = (e: MouseEvent<HTMLAnchorElement>, index: number) => {
    e.preventDefault();
    const newExpended = [...expended];
    if (newExpended.includes(index)) {
      newExpended.splice(newExpended.indexOf(index), 1);
    } else {
      newExpended.push(index);
    }
    setExpended(newExpended);
  };

  return (
    <header>
      <nav className="nav">
        {MENU_ITEMS.map((menu, index) => (
          <div key={menu.id} className="nav-menu">
            {/* HINT: .nav-menu CSS 속성을 참고해도 됩니다. */}
            <a href={menu.link} aria-expanded={expended.includes(index)} onClick={(e) => handleExpendedClick(e, index)}>
              {menu.label}
            </a>
            {menu.subMenu && (
              <ul className="sub-menu">
                {menu.subMenu.map((subMenu) => (
                  <Link to={subMenu.link} key={subMenu.id}>
                    {subMenu.label}
                  </Link>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>
    </header>
  );
};

export default Header;
