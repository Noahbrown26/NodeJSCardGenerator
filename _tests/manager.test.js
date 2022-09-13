// import manager constructor from libs folder //

const Manager = require('../lib/manager.js');

// creates an object for managers // 

test('creates a manager object', () => {
    const manager = new Manager('Noah', 23, 'noahbrown2663@gmail.com', 4);

// set expectations for manager constructor data //

    expect(manager.officeNumber).toEqual(expect.any(Number));

});

// gets employee role //

test('gets employee role', () => {
    const manager = new Manager('Noah', 23, 'noahbrown2663@gmail.com', 4);

    expect(manager.getRole()).toEqual("Manager");
}); 