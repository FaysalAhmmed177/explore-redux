import React from 'react';
import { connect } from 'react-redux';

const Control = (props) => {
    console.log(props);
    return (
        <div>
            <button onClick={() => props.add()}> + ADD</button>
            <button onClick={() => props.sub()}> - SUB</button>
        </div>
    );
};

function mapDispatchToProps(dispatch) {
    return {
        add: () => {
            dispatch({ type: 'ADD' })
        },
        sub: () => {
            dispatch({ type: 'SUB' })
        }
    }
}

export default connect(null, mapDispatchToProps)(Control);