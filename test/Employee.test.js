const Employee = require('../lib/Employee');

describe("Employee", () => {
    // Test for default operation (input value, save them as objects)
    describe("Initialization", () => {
        it("should create an object with: Name, ID, Email if provided valid arguments", () => {
            const employee = new Employee("Heng Yu", 2, "heng.yu161@gmail.com");

            // Verify that the object has correct properties.
            expect(employee.name).toEqual("Heng Yu");
            expect(employee.id).toEqual(2);
            expect(employee.email).toEqual("heng.yu161@gmail.com");
        });

        it("should throw an error if 'id' is not a number", () => {
            const cb = () => new Employee("Heng Yu", "2", "heng.yu161@gmail.com");
            const err = new Error("Expected parameter 'id' to be a positive number");
      
            expect(cb).toThrowError(err);
          });
      
          it("should throw an error if 'id' is less than 0", () => {
            const cb = () => new Employee("Heng Yu", -1, "heng.yu161@gmail.com");
            const err = new Error("Expected parameter 'id' to be a positive number");
      
            expect(cb).toThrowError(err);
          });
    })
})