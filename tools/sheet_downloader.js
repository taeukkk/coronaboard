const fs = require("fs");
const path = require("path");

class SheetDownloader {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async downloadToJson(spreadsheetId, sheetName, filePath = null) {
    const res = await this.apiClient.spreadsheets.values.get({
      spreadsheetId: spreadsheetId,
      range: sheetName,
    });

    const rows = res.data.values;

    //시트에 데이터가 없다면 빈 JSON 객체를 반환
    if (rows.length === 0) {
      const message = "No data found on the sheet";
      console.error(message);
      return {};
    }

    //배열을 객체로 변환
    const object = this._rowsToObject(rows);

    //filePath를 명시했다면 지정한 파일로 저장
    if (filePath) {
      //마지막 인수는 space를 의마
      const jsonText = JSON.stringify(object, null, 2);

      const directory = path.dirname(filePath);
      if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory);
      }
      fs.writeFileSync(filePath, jsonText);
      console.log(`Written to ${filePath}`);
    }

    return object;
  }

  _rowsToObject(rows) {
    const headerRow = rows.slice(0, 1)[0];
    const dataRows = rows.slice(1, rows.length);

    return dataRows.map((row) => {
      const item = {};
      for (let i = 0; i < headerRow.length; i++) {
        const fieldName = headerRow[i];
        const fieldValue = rows[i];
        item[fieldName] = fieldValue;
      }
      return item;
    });
  }
}

module.exports = SheetDownloader;
