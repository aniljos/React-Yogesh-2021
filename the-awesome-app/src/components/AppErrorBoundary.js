import React, { Component } from "react";

class AppErrorBoundary extends Component {

    state = {
        hasError: false
    }
    componentDidCatch(error, info) {

        if (error) {
            this.setState({
                hasError: true
            }, () => {
                console.log("Error Info", info)
            })
        }

    }

    render() {
        if (this.state.hasError === true) {

            return (
                <div className="alert alert-danger">
                    Something went wrong. Please try again...
                </div>
            )
        }
        else {
            return (
                this.props.children
            )
        }
    }
}

export default AppErrorBoundary;