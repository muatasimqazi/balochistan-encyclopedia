import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import two from '../img/two.jpeg';
import five from '../img/five.jpeg';

class BottomRow extends Component {
    render() {
		const { categories } = this.props
		const categoryId = Object.keys(categories)
		console.log(categoryId)
        return (
            <div>
            
			</div>
        );
    }
}

export default BottomRow;