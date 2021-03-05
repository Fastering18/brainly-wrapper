# Unoffical Brainly-wrapper  
[NPM](https://www.npmjs.com/package/brainly-wrapper)

```js
const brainly = require("brainly-wrapper")

brainly.getQuestion("apa itu benar").then(console.log).catch(console.error)

brainly.setServer("US")

brainly.getQuestion("what is true").then(console.log).catch(console.error)
```  

Structure:  
```json
{
  "id": "xxx=",
  "databaseId": "Number",
  "author": {
    "id": "xxx",
    "databaseId": "Number",
    "isDeleted": "boolean",
    "nick": "String (Username)",
    "avatar": {
      "thumbnailUrl": "String (URL)",
      "__typename": "Attachment"
    },
    "rank": {
      "name": "String (Rank)",
      "__typename": "Rank"
    },
    "__typename": "User"
  },
  "content": "String (Question)",
  "answers": {
    "nodes": [
      {
        "thanksCount": 1,
        "ratesCount": 1,
        "rating": 5,
        "content": "String (Answer)",
        "__typename": "Answer"
      }
    ],
    "hasVerified": "boolean",
    "__typename": "AnswerConnection"
  },
  "__typename": "Question"
}
```  

Test the package with `npm test`   
Contributions, Issues, visit [Github](https://github.com/Fastering18/brainly-wrapper)
