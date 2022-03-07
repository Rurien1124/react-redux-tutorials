import DisplayNumber from '../../components/displayNumber/DisplayNumber';
import {connect} from 'react-redux';

// Redux�� State�� React�� Props�� ����
const mapReduxStateToReactProps = (state) => {
	return {
		number: state.number
	}
}

const mapReduxDispatchToReactProps = () => {
	return {}
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(DisplayNumber);
