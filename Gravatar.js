var React = require('react-native');
var gravatarApi = require('gravatar-api');
var {Image, Component} = React;

class Gravatar extends Component {
  constructor(props) {
      super(props);
    }
	render() {
		return (
          <Image style={[{width: 50, height:50}, this.props.style]}
                source={{uri:gravatarApi.imageUrl(this.props.options)}} />
		);
	}
}

module.exports = {
  Gravatar: Gravatar,
  GravatarApi: gravatarApi
}
