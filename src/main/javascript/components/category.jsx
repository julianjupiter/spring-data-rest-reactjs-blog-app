// tag::category[]
class Category extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.category.name}</td>
				<td>{this.props.category.slug}</td>
				<td>{this.props.category.description}</td>
			</tr>
		)
	}
}
// end::category[]