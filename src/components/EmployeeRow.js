import '../style/EmployeeRow.css';

const EmployeeRow = ({ name, surname, position, description, photo, isRightAligned }) => {
    const alignmentClass = isRightAligned ? 'right-align' : '';

    return (
        <div className={`employee-row ${alignmentClass}`}>
            <div className="employee-details">
                <h3>{name} {surname}</h3>
                <p>{position}</p>
                <p>{description}</p>
            </div>
            <div
                className={`employee-photo ${alignmentClass}`}
                style={{ backgroundImage: `url(${photo})` }}
            ></div>
        </div>
    );
};

export default EmployeeRow;
