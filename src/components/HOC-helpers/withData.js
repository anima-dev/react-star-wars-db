import React, {Component} from 'react';
import Spinner from '../spinner';
import ErrorMsg from '../errorMsg';

const withData = (View) => {
    return class extends Component {
        state = {
            data: [],
            error: false
        };
    
        componentDidMount() {
            this.props.getData()
                .then((data) => this.setState({
                    data
                }));
        };

        componentDidCatch() {
            this.setState({
                error: true
            })
        }
        
        render() {
            const {data, error} = this.state;

            if (!data) {
                return (
                    <div className="mt-5 p-5 d-flex bg-dark rounded">
                        <Spinner />
                    </div>
                );
            }

            if (error) {
                return (
                    <div className="mt-5 p-5 d-flex bg-dark rounded">
                        <ErrorMsg msg={"Oh no! It's all expired"}/>
                    </div>
                );
            }

            return <View {...this.props}  data={data}/>
        };
    }
}

export default withData;