const userModel = require('../models/userModel')

const getAllBooks = async (req, res) => {
    try {
        const books = await userModel.getAllBooks()
        res.json(books)
    }
    catch (error) {
        res.status(500).json(
            {
                message: "Error Get All Book",
                status: 500
            }
        )
    }
}

const getBookByCode = async (req, res) => {
    try {
        const book = await userModel.getBookByCode(req.params.code);

        if (!book) {
            return res.status(404).json({
                message: 'Data Not Found'
            })
        }
        res.json(book)
    }
    catch (error) {
        res.status(500).json({ message: error })
    }
}

const addBook = async (req, res) => {
    const { kode, judul, pengarang, penerbit } = req.body
    let isKode = true
    let isJudul = true
    let msg = ""
    if (!kode) {
        msg = msg + "Kode wajib diisi"
        isKode = false
    }
    if (!judul) {
        msg = msg + "Kode wajib diisi"
        isJudul = false
    }
    if (isKode && isJudul) {
        try {
            const affected = await userModel.addBook(req.body)
            if (affected == 1) [
                res.status(200).json({
                    msg: "insert successfull",
                    data: { ...req.body }
                })
            ]
        }
        catch (error) {
            res.status(400).json({
                message: error
            })
        }
    }
    else {
        res.status(400).json({ msg: msg })
    }
}

const delBook = async (req, res) => {
    try {
        const result = await userModel.delBook(req.params.code)
        if (result == 1) {
            res.status(200).json({ msg: "Delete is Successfull" })
        }
        else {
            res.status(400).json({ msg: error })
        }
    }
    catch (error) {
        res.status(400).json({ msg: error })
    }
}

const updateBook = async (req, res) => {
    const kode = req.params.code
    const { judul, pengarang, penerbit } = req.body
    if (!judul || !pengarang || !penerbit) {
        return res.status(400).json({
            message: "Judul, Pengarang, dan Penerbit wajib diisi!"
        })
    }

    try {
        const existing = await userModel.getBookByCode(kode)
        if (!existing) {
            return res.status(404).json({
                message: "Data Not Found"
            })
        }
        const affected = await userModel.updateBook(kode, req.body)
        if (affected === 1) {
            res.status(200).json({
                msg: "Update successful",
                data: { kode, judul, pengarang, penerbit }
            })
        }
        else {
            res.status(400).json({
                message: "Update failed"
            })
        }
    }
    catch (error) {
        res.status(500).json({
            message: "Error while updating",
            error: error
        })
    }
}

module.exports = { getAllBooks, getBookByCode, addBook, delBook, updateBook }