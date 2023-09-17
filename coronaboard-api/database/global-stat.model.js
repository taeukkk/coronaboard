const sequelize = require("sequelize");
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    // 매개변수1: 모델 이름
    "GlobalStat",
    //매개변수2: 속성 목록
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
      },
      cc: {
        //country code
        type: DataTypes.CHAR(2),
        allowNull: false,
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      confirmed: {
        //확진자 수
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      death: {
        //사망자 수
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      released: {
        //완치자 수
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      tested: {
        //총 검사자 수
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      testing: {
        //검사중 수
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      negative: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    //매개변수3: 추가 옵션
    {
      sequelize, //시퀄라이즈 인스턴스
      tableName: "GlobalStat", //데이터베이스에서 테이블의 이름
      indexes: [
        //테이블 인덱스
        {
          name: "PRIMARY",
          unique: true,
          fields: [{ name: "cc" }, { name: "data" }],
        },
        {
          name: "ccWithDate",
          unique: true,
          fields: [{ name: "cc" }, { name: "date" }],
        },
      ],
      timestamps: false, //타임스탬프 속성 자동 생성 X
    }
  );
};
