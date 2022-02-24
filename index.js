const employee = {
    name: 'Homer',
    streetAddress: '123 Fake St'
}
function updateEmployeeWithKeyAndValue (object, key, value) {
    return {
        ...object,
        [key]: value,
    };
}
updateEmployeeWithKeyAndValue(employee, 'name', 'Sam')

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    employee ["streetAddress"] = '12 Broadway';
    return employee;
}
const newEmployee = {employee};


function deleteFromEmployeeByKey() {
    delete newEmployee.name;
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey() {
    delete employee.name;
    return employee;
}