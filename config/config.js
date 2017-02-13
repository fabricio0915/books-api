export default {
  database: {
    name: 'books',
    username: '',
    password: '',
  },
  params: {
    dialect: 'sqlite',
    storage: 'books.sqlite',
    define: {
      underscored: true,
    },
  },
};
