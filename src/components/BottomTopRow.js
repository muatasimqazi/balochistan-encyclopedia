import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import one from '../img/one.jpeg';
import two from '../img/two.jpeg';
import three from '../img/three.jpeg';


class BottomTopRow extends Component {
    render() {
		const { articles } = this.props
        const articleId = Object.keys(articles)
        return (
            <div></div>
        );
    }
}

export default BottomTopRow;