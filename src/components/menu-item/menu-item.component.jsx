import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';
import {MenuItemContainer, BackgroundImage, Content, Title, SubTitle} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemContainer
    // className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImage
      // className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <Content >
      <Title >{title.toUpperCase()}</Title>
      <SubTitle >SHOP NOW</SubTitle>
    </Content>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
