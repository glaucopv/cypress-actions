const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjE4ZWYwMzZjLTI2YzAtNDIxOC1iMmZhLTgxZGZmZDUzMjIyZC0xNzI5NjQ3NjA5NjA2IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiOGNiMDdmMmEtYzYyMi00NzU4LWFmNDgtYWQ0MGYxYzNmMzE3IiwidHlwZSI6InQifQ.iMmXUKnPQjNxtp5D_tR3OSoHtZ8G7TXRBMJf8DE8TMw'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
