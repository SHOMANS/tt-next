import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header style={{ marginBottom: 20 }}>
      <nav>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='about'>About</Link>
          </li>
          <li>
            <Link href='/skills'>Skills</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
