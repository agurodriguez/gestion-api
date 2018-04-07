import React from 'react';
import Header from '../Header';

import GestionEnmelon from '../../services/GestionEnmelon';

export default class CareerSubjectsGraph extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            graphNodes: [],
            graphEdges: [] 
        };
    }

    componentWillMount() {
        GestionEnmelon.careerSubjectsGraph(2001).then(res => {
            this.setState({
                graphNodes: res.nodes,
                graphEdges: res.edges
            })
        })
    }

    render() {
		return (
            <div>
			    <Header />

            </div>
		);
	}

}