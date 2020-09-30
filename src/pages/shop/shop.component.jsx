import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Route, withRouter, Switch } from 'react-router-dom';

import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { selectShopCollectionsPage } from '../../redux/shop/shop.selector';

const ShopPage = ({ match }) => {
  console.log(`Match ${match.path}`);
  return (
    <div className="shop-page">
      <Switch>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      </Switch>
    </div>
  );
};

export default withRouter(ShopPage);
