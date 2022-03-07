import AddNumber from '../../components/addNumber/AddNumber';
import {connect} from 'react-redux';

// Redux의 Dispatch를 React의 Props로 매핑
const mapReduxDispatchToReactProps = (dispatch) => {
	return {
		onClick: (size) => {
			dispatch({type: "INCREMENT", size: size});
		}
	}
}

export default connect(null, mapReduxDispatchToReactProps)(AddNumber);