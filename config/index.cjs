/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
  USE_PASSAGE: 'push-deer',

  // 使用微信测试号：公众号APP_ID
  APP_ID: '',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '',

  PROVINCE: '江苏',
  CITY: '南京',

  USERS: [
    {
      name: '鹏鹏',
      id: 'PDU16843Tb9OS4cg8VyECcsVOgJBkr7mCtlWKPiEL',
      useTemplateId: '0001',
      horoscopeDate: '02-08',
      festivals: [
        {
          type: '*生日', name: '平平', year: '1992', date: '10-07',
        },
        {
          type: '*生日', name: '醒醒', year: '2020', date: '05-20',
        },
      ],
      customizedDateList: [
        { keyword: 'marry_day', date: '2017-12-30' },
      ],
    },
      {
      name: '平平',
      id: 'PDU16843Tb9OS4cg8VyECcsVOgJBkr7mCtlWKPiEL',
      useTemplateId: '0001',
      horoscopeDate: '02-08',
      festivals: [
        {
          type: '*生日', name: '鹏鹏', year: '1992', date: '01-18',
        },
        {
          type: '*生日', name: '醒醒', year: '2020', date: '05-20',
        },
      ],
      customizedDateList: [
        { keyword: 'marry_day', date: '2017-12-30' },
      ],
    },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
//         { keyword: 'love_day', date: '2022-09-08' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2017-12-30' },
      ],
    },
  ],
}

module.exports = USER_CONFIG

