```sh
curl -X POST -H "content-type:application/json" -d '{"swaggerUrl":"http://8d1b439e.ngrok.io/build/swagger.json"}' https://generator.swagger.io/api/gen/clients/typescript-node
```

## steps

### generating openapi specs
https://github.com/lukeautry/tsoa
https://tsoa-community.github.io/docs/getting-started.html

### generating declaration file from specs
https://www.npmjs.com/package/dtsgenerator

### generating sdk

instructions in `codegen.js`

alternative: 

https://github.com/swagger-api/swagger-codegen#building

https://swagger.io/docs/open-source-tools/swagger-codegen/


but only web version works for typescript-node


### missing: ui


