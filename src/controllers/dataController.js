const Data = require("../models/data")


const dataControllers = {
  //CREATE
  createSourceCode: async (req, res) => {
    console.log("req>>>", req.body);
    try {
      const sourceCode= req.body;
      const createSourceCode = await Data.create(sourceCode);
      console.log("createSourceCode>>> ", createSourceCode);
      // return
      return res.status(200).json({
        errCode: 0,
        message: "Tạo danh mục thành công!!!",
        data: createSourceCode,
      });
    } catch (error) {
      console.log("error>> ", error);
      res.status(500).json({
        errCode: 1,
        message: "Danh mục đã tồn tại",
        error: error,
      });
    }
  },
  //FETCH ALL
  fetchDataById: async (req, res) => {
    console.log("req>>>", req.query);
    try {
      const idData= req.query.id;
      const data = await Data.findById(idData);
      console.log("data??>>", data);
        return res.status(200).json({
          errCode: 0,
          message: "take date category successful!!!!",
          data: data,
        });
    } catch (error) {
      res.status(500).json({
        errCode: 1,
        message: "have error",
        error: error,
      });
    }
  },

 
};

module.exports = dataControllers;