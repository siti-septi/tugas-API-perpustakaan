const userModel = require('../model/userModel');

const getALLBooks = async(req, res) => {
    try {
        const books = await userModel.getALLBooks();
        res.json(books);
    } catch (error) {
        res.status(500).json(
            {
                message : "Error Get all Book",
                status : 500
            }
        );
    }
};

const getBookByCode = async (req, res) => {
    try {
        const book = await userModel.getBookByCode(req.params.code);

        if(!book) {
            return res.status(404).json(
              {
                message: "Data not found"
              }  
            );
        }
        res.json(book);
    } catch (error) {
        res.status(5000).json(
            {
                message: error
            }
        );
    }
}

module.exports = {getALLBooks, getBookByCode};
