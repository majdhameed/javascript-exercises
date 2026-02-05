const getTheTitles = function(books) {
    return books.reduce((result, book) => {
        result.push(book.title)
        return result
    }, [])
};

// Do not edit below this line
module.exports = getTheTitles;
