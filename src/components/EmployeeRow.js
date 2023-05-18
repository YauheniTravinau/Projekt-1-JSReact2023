import React from 'react';
import '../style/EmployeeRow.css';

const EmployeeRow = ({ name, surname, position, description, photo, isRightAligned }) => {
    return (
        <div className={`employee-row ${isRightAligned ? 'right-align' : ''}`}>
            <div className="employee-details">
                <h3>{name} {surname}</h3>
                <p>{position}</p>
                <p>{description}</p>
            </div>
            <div className={`employee-photo ${isRightAligned ? 'left-align' : ''}`} style={{ backgroundImage: `url(${photo})` }}></div>
        </div>
    );
};

export default EmployeeRow;
