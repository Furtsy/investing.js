investing.js
---
**En**
You can get information about the crypto you want and see how much it price on the date you set.
**Tr**
İstediğiniz kripto hakkında bilgi alabilir ve belirlediğiniz tarihte fiyatı ne kadar olduğuna bakabilirsiniz.

[Site](https://codare.fun) - [Guide](https://codare.gitbook.io/guide/api/api)
---
```shell
npm install investing.js
```
```javascript
const modül = require('investing.js')

   async function getHistory() {
    let kripto = await modül.getHistory('btc', 'try', '2018-05-22')
    console.log(kripto)
      }
      getHistory() //{ fiyat: 37964.43 }

async function get() {
    let kripto = await modül.get('btc', 'try')
    console.log(kripto)
      }
    get()
 /*/
   {
  fiyat: 431967.46,
  medyan: 431205,
  sonhacim: 0.01155322,
  son24saathacmi: 1406.1784100999998,
  'günaçılışı': 403196.9,
  'günyüksek': 443394.99,
  'gündüşük': 401186.6,
  'açılış24saate': 390345.02,
  'yüksek24saate': 443728.76,
  'düşük24saate': 389469.67,
  market: 'CCCAGG',
  sonmarket: 'BTCTurk',
  saatlikhacim: 7.0543062200000035,
  'saataçılış': 435572.83,
  'saatyüksek': 435614.35,
  'saatdüşük': 431745.47,
  'üstkatmanhacmi24saate': 1406.1784100999998,
  'değişiklik24saate': 41622.44,
  'değişiklikgünde': 28770.559999999998,
  'değişikliksaate': -3605.3699999999953,
  'çevrilen': 'yok',
  arz: 18692043,
  'piyasadeğeri': 8074354336920.78,
  'piyasadeğericezası': 0,
  toplamhacim24saate: 322552.3802063719,
  'toplamüstkatmanhacmi24saate': 322041.8538589735,
  resim: 'https://www.cryptocompare.com//media/37746251/btc.png'
}
/*/
```