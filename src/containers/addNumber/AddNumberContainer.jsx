import AddNumber from '../../components/addNumber/AddNumber';
import {connect} from 'react-redux';

// Redux�� Dispatch�� React�� Props�� ����
const mapReduxDispatchToReactProps = (dispatch) => {
	return {
		onClick: (size) => {
			dispatch({type: "INCREMENT", size: size});
		}
	}
}

export default connect(null, mapReduxDispatchToReactProps)(AddNumber);