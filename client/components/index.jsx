
var React = require('react/addons');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
  render: function() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12">
            <Link to="healer" className="navbar" >Healer</Link>
            <Link to="seer" className="navbar" >Seer</Link>
            <Link to="melete" className="navbar" >Melete</Link>
          </div>
        </div>
      </div>
    );
  }
});
