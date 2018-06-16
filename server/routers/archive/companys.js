const API_KEY = "358ae4ee-a20d-4169-95bc-27754a23e344";
const REQ = "Сельхоз запчасти, Ростов-на-Дону"
const TYPE ='biz'

import cheerio from 'cheerio'

console.log(`https://search-maps.yandex.ru/v1/?text=${REQ}&type=biz&lang=ru_RU&apikey=${API_KEY}`);

 function destructResult (arr) {
  arr.map((company)=>{
    let {name, adress} = company.properties
    return {name, adress}
  })
  console.log(arr);
}

export default async (ctx, next) => {
    let result = await ctx.get(`/v1/`, {
      text: REQ,
      type: 'biz',
      lang: 'ru_RU',
      apikey: API_KEY
    }, {
        'User-Agent': 'koa-http-request'
    });

    ctx.body =  destructResult(result.features)
};
