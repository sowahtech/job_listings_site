import React from 'react';

const Job = (props) => {
    let keywords = [role, level, ...languages, ...tools];
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
            <div className="part1">
                <div className="company">
                    <div className="cname">{company}</div>
                    {props.data.new && <span className="new">new!</span> }
                    {props.data.new && <span className="new">featured</span> }
                </div>

                <div className="position">{position}</div>

                <div className="details">
                    <span>{postedAt}</span>
                    <span>{contract}</span>
                    <span>{location}</span>
                </div>
            </div>
        </div>
    )
}

export default Job
