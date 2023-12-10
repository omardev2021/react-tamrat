// Breadcrumbs.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="breadcrumbs w-full" style={{ paddingLeft: '11%', paddingTop: '10px' }}>
      <ol className="flex items-center flex-wrap text-sm">
        <li className="whitespace-nowrap">
          <Link to="/" className="fix-align" style={{ color: '#7C9D64' }}>
            Home
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return (
            <React.Fragment key={name}>
              <li>
                <img src="/images/next.png" alt="next" className="mx-2" />
              </li>
              <li className={isLast ? 'whitespace-nowrap' : ''}>
                {isLast ? (
                  <span className="fix-align">{name}</span>
                ) : (
                  <Link to={routeTo} className="fix-align">
                    {name}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;