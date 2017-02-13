describe('Routes books', () => {
  const Books = app.datasource.models.Books;
  const defaultBook = {
    id: 1,
    name: 'Default Book',
  };

  beforeEach((done) => {
    Books.destroy({ where: {} })
      .then(() => Books.create(defaultBook))
      .then(() => done());
  });

  describe('Route GET /books', () => {
    it('should return a list of books', (done) => {
      request
        .get('/books')
        .end((error, res) => {
          expect(res.body[0].id).to.be.equal(defaultBook.id);
          expect(res.body[0].name).to.be.equal(defaultBook.name);

          done(error);
        });
    });
  });

  describe('Route GET /books/{id}', () => {
    it('should return a book', (done) => {
      request
        .get('/books/1')
        .end((error, res) => {
          expect(res.body.id).to.be.equal(defaultBook.id);
          expect(res.body.name).to.be.equal(defaultBook.name);

          done(error);
        });
    });
  });

  describe('Route POST /books', () => {
    it('should create a book', (done) => {
      const newBook = {
        id: 2,
        name: 'New Book',
      };
      request
        .post('/books')
        .send(newBook)
        .end((error, res) => {
          expect(res.body.id).to.be.equal(newBook.id);
          expect(res.body.name).to.be.equal(newBook.name);

          done(error);
        });
    });
  });

  describe('Route PUT /books/{id}', () => {
    it('should update a book', (done) => {
      const updatedBook = {
        id: 1,
        name: 'updated book',
      };
      request
        .put('/books/1')
        .send(updatedBook)
        .end((error, res) => {
          expect(res.body).to.deep.equal([1]);

          done(error);
        });
    });
  });

  describe('Route DELETE /books/{id}', () => {
    it('should delete a book', (done) => {
      request
        .delete('/books/1')
        .end((error, res) => {
          expect(res.statusCode).to.be.equal(204);

          done(error);
        });
    });
  });
});
