const { Op } = require("sequelize");
const db = require('../models');

const getBooks = async()=>{
    const books = await db.libro.findAll()
        .then (result =>{
            return result;
        });
    return books;
}


const getAutor = async()=>{
    const autor = await db.autor.findAll({include: db.libro})
        .then (result =>{
            return result;
        });
    return autor;
}



const getBookById = async (id) => {
    // SELECT * FROM libro WHERE id = id
    // findByPk: find by primary key
    const book = await db.libro.findByPk(id, {
        include: db.autor
    }).then(result => {
            return result
        });
    return book;
}
const findBookByTitle = async(query)=>{
    const books = await db.libro.findAll({
        where:{
           titulo:{
                [Op.substring]:query
            }
        }
        , include: db.autor
           
    }).then(result=>{
        return result;
    })
    return books;
}

const addBook = async(titulo,precio,autorId,portada) =>{
    const book = await db.libro.create({
        titulo,
        precio,
        portada,
        autorId

    });

    return  book;
}


const deleteBookById = async (idLibro)=>{
    const book = await db.libro.destroy({
        where : {
            id:idLibro
        }
    });

    return book;

}
module.exports = {
    getBooks,
    getAutor,
    getBookById,
    findBookByTitle,
    addBook,
    deleteBookById
}