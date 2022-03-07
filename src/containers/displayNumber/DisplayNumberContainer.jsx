import DisplayNumber from '../../components/displayNumber/DisplayNumber';
import {connect} from 'react-redux';

// Redux의 State를 React의 Props로 매핑
const mapReduxStateToReactProps = (state) => {
	return {
		number: state.number
	}
}

const mapReduxDispatchToReactProps = () => {
	return {}
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(DisplayNumber);
