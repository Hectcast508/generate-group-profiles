const Intern = require('../lib/Intern');

test('gets intern information.', () => {
  const intern = new Intern();

  expect(intern.getName()).toBe(intern.name);
  expect(intern.getId()).toBe(intern.id);
  expect(intern.getEmail()).toBe(intern.email);
  expect(intern.getSchool()).toBe(intern.school);
  expect(intern.getRole()).toBe('Intern');
});