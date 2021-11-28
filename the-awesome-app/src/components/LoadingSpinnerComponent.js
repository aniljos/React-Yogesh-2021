import React, { Component } from 'react';
import { usePromiseTracker } from "react-promise-tracker";

export const LoadingSpinnerComponent = (props) => {

    const { promiseInProgress } = usePromiseTracker();

    return (
        <div>
            {
                (promiseInProgress === true) ?
                    <h3>Loading, Please wait...</h3>
                    :
                    null
            }
        </div>
    )
};