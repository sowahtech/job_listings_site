import React from 'react';

const Job = (props) => {

    const {
        company,
        contract,
        featured,
        id,
        languages,
        level,
        location,
        logo,
        position,
        postedAt,
        role,
        tools
    } = props.data;
    return (
        <div className="job-container">
            <div className="logo">
                <img src={logo} alt="company logo" />
            </div>
        </div>
    )
}

export default Job
