const fetch = require('node-fetch')

module.exports = {
  get: async function(val,val2) {
 const api = await fetch(`https://api.codare.fun/kripto/${val}/${val2}`)
  .then(response => response.json());
if(api.error) throw 'Apide has been problem'
return api
}, getHistory: async function(val,val2, history) {
  const api = await fetch(`https://api.codare.fun/kripto/tarih/${val}/${val2}?tarih=${history}`)
   .then(response => response.json());
 if(api.error) throw 'Apide has been problem'
 return api
 },
};