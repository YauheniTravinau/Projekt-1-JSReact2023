import React from 'react';
import EmployeeRow from '../components/EmployeeRow';
import employees from '../data/employees';
import '../style/EmployeeSection.css';

const EmployeeSection = () => {
    return (
        <section className="employees-section">
            <div className="container">
                <h2>Lista pracownikow</h2>
                {employees.map((employee, index) => (
                    <EmployeeRow
                        key={employee.id}
                        name={employee.name}
                        surname={employee.surname}
                        position={employee.position}
                        description={employee.description}
                        photo={employee.photo}
                        isRightAligned={index === 1} // Второй работник будет выровнен справа и ниже
                    />
                ))}
            </div>
        </section>
    );
};

export default EmployeeSection;
