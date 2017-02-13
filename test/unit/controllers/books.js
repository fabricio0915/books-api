import BooksController from '../../../controllers/books';

describe('Controllers: Books', () => {

    describe('Get all books: getAll()', () => {
        it('should return a list of books', () => {

            const Books = {
                findAll: td.function()
            };

            const booksController = new BooksController(Books);

            const expectedResponse = [{
                id: 1,
                name: 'test book',
                created_at: '2017-02-12T23:11:00.692Z',
                updated_at: '2017-02-12T23:11:00.692Z'
            }];

            td.when(Books.findAll({})).thenResolve(expectedResponse);

            return booksController.getAll()
                .then((response) => {
                    expect(response.data).to.be.equal(expectedResponse);
                });

        });
    });


    describe('Get a book: getById()', () => {
        it('should return a book', () => {

            const Books = {
                findOne: td.function()
            };

            const booksController = new BooksController(Books);

            const expectedResponse = {
                id: 1,
                name: 'test book',
                created_at: '2017-02-12T23:11:00.692Z',
                updated_at: '2017-02-12T23:11:00.692Z'
            };

            td.when(Books.findOne({ where: { id: 1 } })).thenResolve(expectedResponse);

            return booksController.getById({ id: 1 })
                .then((response) => {
                    expect(response.data).to.be.equal(expectedResponse);
                });

        });
    });


});