const Intern = require('../lib/Intern');

describe("Intern", () => {
    // Test for default operation (input value, save them as objects)
    describe("Initialization", () => {
        it("should create an object with: Name, ID, Email if provided valid arguments", () => {
            const intern = new Intern("Heng Yu", 2, "heng.yu161@gmail.com", "UCSD");

            // Verify that the object has correct properties.
            expect(intern.name).toEqual("Heng Yu");
            expect(intern.id).toEqual(2);
            expect(intern.email).toEqual("heng.yu161@gmail.com");
            expect(intern.typical).toEqual("UCSD");
        });

        it("should throw an error if 'id' is not a number", () => {
            const cb = () => new Intern("Heng Yu", "2", "heng.yu161@gmail.com", "UCSD");
            const err = new Error("Expected parameter 'id' to be a positive number");
      
            expect(cb).toThrowError(err);
          });
      
          it("should throw an error if 'id' is less than 0", () => {
            const cb = () => new Intern("Heng Yu", -1, "heng.yu161@gmail.com", "UCSD");
            const err = new Error("Expected parameter 'id' to be a positive number");
      
            expect(cb).toThrowError(err);
          });
    })
})