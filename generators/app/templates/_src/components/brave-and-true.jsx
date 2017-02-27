import React from 'react';
import { connect } from 'react-redux';
import { getMessage } from '../store/functional';

const mapStateToProps = ({ message }) => ({ message });
const mapDispatchToProps = dispatch => ({
    setMessage: message => dispatch({
        type: 'SET_MESSAGE',
        message
    })
});

const Loading = () => (
    <span>Loading, please wait...</span>
);

const Component = React.createClass({
    displayName: 'BraveAndTrue',
    componentDidMount() {
        getMessage
            .fork(console.error,
                this.props.setMessage);
    },
    render() {
        return (
            <div>{this.props.message || <Loading />}</div>
        );
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
