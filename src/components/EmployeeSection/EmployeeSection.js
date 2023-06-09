import React from 'react';
import EmployeeRow from '../EmployeeRow/EmployeeRow';
import employees from '../../data/employees';
import '../EmployeeSection/EmployeeSection.css';

const EmployeeSection = () => {
    return (
        <section id="employees-section" className="employees-section">
            <div className="container">
                <h2>Lista pracowników</h2>
                {employees.map((employee, index) => (
                    <EmployeeRow
                        key={employee.id}
                        name={employee.name}
                        surname={employee.surname}
                        position={employee.position}
                        description={employee.description}
                        photo={employee.photo}
                        isRightAligned={index % 2 !== 0}
                    />
                ))}
            </div>
        </section>
    );
};

export default EmployeeSection;
