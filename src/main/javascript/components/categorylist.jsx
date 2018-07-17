import React from 'react';
import Category from './category.jsx';

// tag::category-list[]
class CategoryList extends React.Component{
	render() {
		var categories = this.props.categories.map(category =>
			<Category key={category._links.self.href} category={category}/>
		);
		return (
			<table className="table">
				<tbody>
					<tr>
						<th>Name</th>
						<th>Slug</th>
						<th>Description</th>
					</tr>
					{categories}
				</tbody>
			</table>
		)
	}
}
// end::category-list[]