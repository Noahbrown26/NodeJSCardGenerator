// import employee constructor from libs folder //

const Employee = require('../libs/employee.js');

// creates an object for employees // 

test('creates an employee object', () => {
    const employee = new Employee('Noah', 23, 'noahbrown2663@gmail.com');

// set expectations for employee constructor data //

    expect(employee.name).toEqual(expect.any(string));
    expect(employee.id).toEqual(expect.any(string));
    expect(employee.email).toEqual(expect.any(string));

});

// gets employee name //

test('gets employee name', () => {
    const employee = new Employee('Noah', 23, 'noahbrown2663@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// gets employee id //

test('gets employee id', () => {
    const employee = new Employee('Noah', 23, 'noahbrown2663@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// gets employee email //

test('gets employee email', () => {
    const employee = new Employee('Noah', 23, 'noahbrown2663@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// gets employee role //

test('gets employee role', () => {
    const employee = new Employee('Noah', 23, 'noahbrown2663@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 