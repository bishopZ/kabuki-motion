import React, {PropTypes} from 'react';
import Actions from '../actions/actions';

module.exports = React.createClass({

  propTypes: {
    key: PropTypes.number,
    id: PropTypes.number,
    src: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string
  },
  onEnter: function(){
    Actions.updateHover(this.props.id);
  },
  onLeave: function(){
    Actions.updateHover(false);
  },
  render: function() {
    return (
      <img 
        {...this.props}
        onMouseEnter={this.onEnter} 
        onMouseLeave={this.onLeave} />
    );
  }
});
