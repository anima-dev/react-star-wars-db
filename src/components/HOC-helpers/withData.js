import React, {Component} from 'react';
import Spinner from '../spinner';
import ErrorMsg from '../errorMsg';

const withData = (View) => {
    return class extends Component {
        state = {
            data: [],
            error: false,
            loading: true
        };
    
        componentDidMount() {
            this.props.getData()
                .then((data) => this.setState({
                    data,
                    loading: false
                }));
        };

        componentDidCatch() {
            this.setState({
                error: true
            })
        }
        
        render() {
            const {data, error, loading} = this.state;

            if (loading) {
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