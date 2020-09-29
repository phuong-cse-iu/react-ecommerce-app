import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../../components/collection-preview/collection-preview';
import { selectShopCollections } from '../../redux/shop/shop.selector';

class ShopPage extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const { collections } = this.props;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(ShopPage);
