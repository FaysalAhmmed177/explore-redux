import React from 'react';
import { connect } from 'react-redux';

const Count = (props) => {
    console.log(props);
    return (
        <div>
            <h1>I'm count: {props.count}</h1>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        count: state.count
    }
}


export default connect(mapStateToProps)(Count);