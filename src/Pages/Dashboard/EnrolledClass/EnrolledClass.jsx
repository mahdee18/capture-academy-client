import React from 'react';
import { Helmet } from 'react-helmet';

const EnrolledClass = () => {
    return (
        <div>
            <h2 className="text-center text-2xl font-semibold my-12">
                My Enrolled Class
            </h2>
            <Helmet>
                <title>Capture Academy | Enrolled Class</title>
            </Helmet>
        </div>
    );
};

export default EnrolledClass;