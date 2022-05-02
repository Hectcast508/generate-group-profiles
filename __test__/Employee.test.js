const Empolyee = require('../lib/Employee');

test('gets employee information.', () => {
  const employee = new Empolyee();

  expect(employee.getName()).toBe(employee.name);
  expect(employee.getId()).toBe(employee.id);
  expect(employee.getEmail()).toBe(employee.email);
  expect(employee.getRole()).toBe('Employee');
})