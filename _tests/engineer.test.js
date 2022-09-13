// import engineer constructor from libs folder //

const Engineer = require('../lib/engineer.js');

// creates an object for engineers // 

test('creates an engineer object', () => {
    const engineer = new Engineer('Noah', 23, 'noahbrown2663@gmail.com', 'noahbrown26');

// set expectations for engineer constructor data //

    expect(engineer.github).toEqual(expect.any(String));

});

// gets engineer github //

test('gets engineer github', () => {
    const engineer = new Engineer('Noah', 23, 'noahbrown2663@gmail.com', 'noahbrown26');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});


// gets employee role //

test('gets employee role', () => {
    const engineer = new Engineer('Noah', 23, 'noahbrown2663@gmail.com', 'noahbrown26');

    expect(engineer.getRole()).toEqual("Engineer");
}); 