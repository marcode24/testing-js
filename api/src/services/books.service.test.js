const { generateManyBooks } = require('../fakes/book.fake');
const BooksService = require('./books.service');

// const fakeBooks = [
//   {
//     _id: 1,
//     name: 'Nombre de un libro',
//   },
// ];

const mockGetAll = jest.fn();

// const MongoLibStub = {
//   getAll: () => [...fakeBooks],
//   create: () => {},
// };

// const MongoLibStub = {
//   getAll: mockGetAll,
//   create: () => {},
// };

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({ getAll: mockGetAll, create: () => {} })));

describe('Test for BookService', () => {
  let service;

  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks(); // limpia el estado antes de cada prueba
  });

  describe('test for getbooks', () => {
    test('should return a list book', async () => {
      const fakeBooks = generateManyBooks(20);
      mockGetAll.mockResolvedValue(fakeBooks);
      const books = await service.getBooks({});
      expect(books.length).toEqual(20);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });
  });
});
