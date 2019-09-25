import React from 'react';
import CustomForm from '../components/Form'
import Articles from '../components/Article';
import axios from 'axios';
import {Card, Button} from 'antd';


class ArticleDetail extends React.Component{
	    
	    state = {
			article:[]
		}


			 componentDidMount() {
    const articleID = this.props.match.params.articleID;
    const articetitle  = this.props.match.params.articletitle
        axios.get(`http://127.0.0.1:8000/api/${articleID}`)
           .then(res => {
                this.setState({
                 article: res.data
                });
          });
    console.log(articleID,articetitle)
  }
		
     handleDelete  = (event) =>{
      const articleID = this.props.match.params.articleID;
      axios.delete(`http://127.0.0.1:8000/api/${articleID}`)
     }
	render(){
		

		
		return(
			<div>
              <Card title={this.state.article.title}>
              <p>{this.state.article.content}</p>
              </Card>
              <CustomForm requestType="put" articleID={this.props.match.params.articleID} btnText="update"/>
              <form onSubmit={this.handleDelete}>
              <Button type="danger" htmlType="submit">Delete</Button>
              </form>
     		</div>
			)
	}
}

export default ArticleDetail;