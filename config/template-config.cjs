/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: '0001',
    title: '早起傻一天',
    desc: `
      **{{date.DATA}}**
      下个休息日：{{holidaytts.DATA}}
      ---
      城市：{{city.DATA}}
      天气：{{weather.DATA}}
      气温(最高/最低):{{max_temperature.DATA}} / {{min_temperature.DATA}}
      预防感冒提醒：{{ganmao.DATA}}
      {{comprehensive_horoscope.DATA}}
      {{career_horoscope.DATA}}
      {{wealth_horoscope.DATA}}
      {{healthy_horoscope.DATA}}
      ---
      今天是我们相识的第{{marry_day.DATA}}天
      {{birthday_message.DATA}}
      ---
      今日文案：{{moment_copyrighting.DATA}}
      今日鸡汤：{{poison_chicken_soup.DATA}}
      今日情话：{{earthy_love_words.DATA}}
      
      
      每日一言：{{one_talk.DATA}} {{talk_from.DATA}}
    `
  }
]

module.exports = TEMPLATE_CONFIG
