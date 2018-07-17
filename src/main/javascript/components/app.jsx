import React from 'react';
import CategoryList from './categorylist.jsx';

// tag::app[]
class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {categories: []};
	}

	componentDidMount() {
		client({method: 'GET', path: '/api/categories'}).done(response => {
			this.setState({categories: response.entity._embedded.categories});
		});
	}

	render() {
		return (
			<CategoryList categories={this.state.categories}/>
		)
	}
}
// end::app[]