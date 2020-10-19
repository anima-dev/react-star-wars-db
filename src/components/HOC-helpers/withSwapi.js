import React from 'react';
import {SwapiServiceConsumer} from '../swapiServiceContext'; 

const withSwapi = (Wrapped) => {
    return ((props) => {
        return (
            <SwapiServiceConsumer>
                {
                    (swapi) => {
                        return (
                            <Wrapped {...props} swapi={swapi} />
                            );
                    }
                }
            </SwapiServiceConsumer>
        );
    });
};

export default withSwapi;