var expect = require("chai");
var request = require("request");

describe("hello API Notas", function() {
		let url = "http://localhost:3000";
		
    describe("/", function() {
			it("returns status 200", function() {
				request(url, function(error, response, body) {
					expect(response.statusCode).to.equal(200);
				});
			});
	});		
});