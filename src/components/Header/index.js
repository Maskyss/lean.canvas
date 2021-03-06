import React, { useState } from 'react';
import lottie from 'lottie-web';
import Menu from '../Menu';

import {
  HeaderCustom,
  LinkImage,
  LinkHeader,
  LinksHeader,
  DivEstimate,
  ButtonEstimate,
  MenuButton,
} from './styles';

import animation from '../../static/Menu.json';

import Logo from '../../static/Logo.svg';

const Header = ( ) => {
  const [visibilityMenu, setVisibilityMenu] = useState(false);
  const [styleMenu, setStyleMenu] = useState('menu-container');
  const origin = 'https://fulcrum.rocks/'


  const [menuAnimation, setMenuAnimation] = useState(true);

  const _visibilityMenuFunc = () => {
    const { body } = document;

    if (visibilityMenu === false) {
      setVisibilityMenu(!visibilityMenu);
      setStyleMenu('menu-container is-menu-open');

      setMenuAnimation(true);

      lottie.loadAnimation({
        container: document.getElementById('menuAnimation'),
        animType: 'svg',
        animationData: animation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      });

      setTimeout(() => {
        setMenuAnimation(false);
      }, 550);
    }
    if (visibilityMenu === true) {
      setStyleMenu('menu-container');
      setTimeout(function() {
        setVisibilityMenu(!visibilityMenu);
      }, 300);
      setMenuAnimation(true);
    }
    visibilityMenu
      ? body.setAttribute('style', 'overflow-y:auto')
      : body.setAttribute('style', 'overflow-y:hidden');
  };

  return (
    <>
      <Menu
        origin={origin}
        toggleMenu={() => _visibilityMenuFunc()}
        visibilityMenu={visibilityMenu}
        menuAnimation={menuAnimation}
        about
      />

      <HeaderCustom>
        <LinkImage href={origin}>
          <img src={Logo} alt="logo" />
        </LinkImage>
        <LinksHeader>
          <LinkHeader href={`${origin}#services`}>Services</LinkHeader>
          <LinkHeader href={`${origin}#projects`}>Projects</LinkHeader>
          <LinkHeader href={`${origin}/about/`}>About</LinkHeader>
          <LinkHeader href={`${origin}/blog/`}>Blog</LinkHeader>
        </LinksHeader>
        <DivEstimate>
          <ButtonEstimate href={`${origin}#contact`}>
            Estimate
          </ButtonEstimate>
        </DivEstimate>
        <MenuButton>
          <div onClick={_visibilityMenuFunc} className={styleMenu} alt="menu">
            <div className="bars">
              <span />
              <span />
              <span />
              <div className="other-bar" />
            </div>
          </div>
        </MenuButton>
      </HeaderCustom>
    </>
  );
};

export default Header;
