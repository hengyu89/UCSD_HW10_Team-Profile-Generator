const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    // Test for default operation (input value, save them as objects)
    describe("Initialization", () => {
        it("should create an object with: Name, ID, Email if provided valid arguments", () => {
            const engineer = new Engineer("Heng Yu", 2, "heng.yu161@gmail.com", "hengyu89");

            // Verify that the object has correct properties.
            expect(engineer.name).toEqual("Heng Yu");
            expect(engineer.id).toEqual(2);
            expect(engineer.email).toEqual("heng.yu161@gmail.com");
            expect(engineer.typical).toEqual("hengyu89");
        });

        it("should throw an error if 'id' is not a number", () => {
            const cb = () => new Engineer("Heng Yu", "2", "heng.yu161@gmail.com", "hengyu89");
            const err = new Error("Expected parameter 'id' to be a positive number");
      
            expect(cb).toThrowError(err);
          });
      
          it("should throw an error if 'id' is less than 0", () => {
            const cb = () => new Engineer("Heng Yu", -1, "heng.yu161@gmail.com", "hengyu89");
            const err = new Error("Expected parameter 'id' to be a positive number");
      
            expect(cb).toThrowError(err);
          });
    })
})