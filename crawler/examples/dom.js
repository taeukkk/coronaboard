const axios = require("axios");
const cheerio = require("cheerio");

async function main() {
  //HTML 로드하기
  const resp = await axios.get(
    "https://yjiq150.github.io/coronaboard-crawling-sample/dom"
  );

  const $ = cheerio.load(resp.data); //HTML을 파싱하고 DOM 생성
  const elements = $("./slide p"); //CSS 셀럭터로 원하는 요소 찾기

  //요소가 가진 텍스트 출력
  elements.each((idx, el) => {
    console.log($(el).text());
  });
}

main();
