define(["modules/module1"], function (module) {
    describe("module1", function () {

        it("can say hello world", function() {
 
            expect(module.sayHello()).toEqual("hello world");
        });

        it("can return the square root", function()
        {
        	expect(module.sqrt(4)).toEqual(2);

        });

        it("can fart", function()
        {
        	expect(module.fart()).toEqual("smell");
        });

    });
});