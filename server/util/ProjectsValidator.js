const Ajv = require("ajv");
const sechma = {
  "type": "object",
  "properties": {
    "title": { 
      "type": "string",
      //"pattern": "^[A-Z][a-z]*$",
      
    },    
    "description": {
      "type": "string",
    },
    "demoLink": {
      "type": "string",
    },
    "githubLink": {
      "type": "string",
    },
  },
  "required":["title","description", "demoLink","githubLink"],

};
const ajv = new Ajv();
module.exports = ajv.compile(sechma);