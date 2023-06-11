import React from 'react';
import { Helmet } from 'react-helmet';

const MyClasses = () => {
    return (
        <div>
            <h2 className="text-center text-2xl font-semibold my-12">
                My Classes
            </h2>
            <Helmet>
                <title>Capture Academy | My Classes</title>
            </Helmet>
        </div>
    );
};

export default MyClasses;