import React from 'react';
import { ILayoutProps } from './types';
import { classNamePrefix } from './constants';
import Header from './Header';
import MainContent from './MainContent';

import './index.css';

export { Header, MainContent };

const Layout = (props: React.PropsWithChildren<ILayoutProps>) => {
  const { headerProps, className: cln, children, ...restProps } = props;

  let className = `${classNamePrefix}-layout`;
  if (cln) {
    className += ` ${cln}`;
  }
  return (
    <div {...restProps} className={className}>
      <Header {...headerProps} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
