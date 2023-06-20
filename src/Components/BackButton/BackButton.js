import React from 'react';
import { Button } from 'antd';

const BackButton = () => {

    const goBack = () => {
        window.location.href = '/';
    };

    return (
        <Button className="bck_btn" type="primary" onClick={goBack}>
            Back
        </Button>
    );
};

export default BackButton;