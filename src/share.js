'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import Utils from './utils';

class Share extends React.Component {
  componentDidMount() {
    this.componentDidUpdate();
  }
  componentDidUpdate() {
    Utils.loadButtons();
  }
  render() {
    const { style, className, locale } = this.props;
    const url = Utils.fixUrl( this.props.url );

    return (
      <div
        style={ Object.assign( {}, { display: 'none' }, style ) }
        className={ 'line-it-button' + ( className ? '' : ' ' + className ) }
        data-lang={ Utils.localeToLang( locale ) }
        data-type="share-a"
        data-url={ url } />
    );
  }
}

Share.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  locale: PropTypes.oneOf( [ 'en', 'ja', 'zh-TW', 'th', 'id' ] ),
  url: PropTypes.string
};

Share.defaultProps = {
  locale: 'zh-TW'
};

export default Share;
