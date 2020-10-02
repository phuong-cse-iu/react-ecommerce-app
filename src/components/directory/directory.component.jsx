import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import MenuItem from '../menu-item/menu-item.component';

import { DirectoryContainer } from './directory.styles';
import { selectDirectorySections } from '../../redux/directory/directory.selector';

class Directory extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <DirectoryContainer>
        {this.props.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </DirectoryContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
