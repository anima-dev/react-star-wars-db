import React from 'react';
import {SwapiServiceConsumer} from '../swapiServiceContext'; 

const withSwapi = (Wrapped, mapMethodsToProps) => {
    return ((props) => {
        return (
            <SwapiServiceConsumer>
                {
                    (swapi) => {
                        const methods = mapMethodsToProps(swapi);
                        return (
                            <Wrapped {...props} {...methods} />
                            );
                    }
                }
            </SwapiServiceConsumer>
        );
    });
};

export default withSwapi;