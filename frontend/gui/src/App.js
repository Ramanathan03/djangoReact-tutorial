import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import BaseRouter from './routes';
import 'antd/dist/antd.css';
import CustomLayout from './containers/Layout';
import {connect} from 'react-redux';
import ArticleList from './containers/ArticleListView';
import * as actions from './store/actions/auth';


const mapStateToProps = state =>{
	return{
		isAuthenticated: state.token !== null 
	}
}

class App extends React.Component {
  
  componentDidMount() {
    this.props.onTryAutoSignup();
  }
  render(){
    return (
        <div>
        <Router>
          <CustomLayout {...this.props}>
              <BaseRouter />
          </CustomLayout>

          </Router>
        </div>
      )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
