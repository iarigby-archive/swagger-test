var fs = require("fs");
var CodeGen = require("swagger-typescript-codegen").CodeGen;
 
var file = "build/swagger.json";
var swagger = JSON.parse(fs.readFileSync(file, "UTF-8"));
var tsSourceCode = CodeGen.getTypescriptCode({
  className: "Test",
  swagger: swagger,
  imports: ["./types.d.ts"]
});
console.log(tsSourceCode);
