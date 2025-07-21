const axios = require('axios');

describe('JSONPlaceholder API tests', () => {
  // 1. /posts GET
  describe('GET /posts', () => {
    test('should return a list of posts with correct structure', async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log('\nGET /posts response:', response.data.slice(0, 1));
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
      const post = response.data[0];
    });
  });
  // 2. /posts POST
  describe('POST /posts', () => {
    test('should create a new post and return it with an id', async () => {
      const newPost = {
        title: 'Test Title',
        body: 'Test Body',
        userId: 2,
      };
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
      console.log('\nPOST /posts response:', response.data);
      expect(response.status).toBe(201);
      expect(response.data).toMatchObject(newPost);
      expect(response.data).toHaveProperty('id');
    });
  });

  // 3. /albums GET
  describe('GET /albums', () => {
    test('should return a list of albums with correct structure', async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
      console.log('\nGET /albums response:', response.data.slice(0, 1));
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
      const album = response.data[0];
    });
  });

  // 4. /users POST
  describe('POST /users', () => {
    test('should create a new user and return it with an id', async () => {
      const newUser = {
        name: 'Maria',
        username: 'mariaqa',
        email: 'maria@example.com',
      };
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', newUser);
      console.log('\nPOST /users response:', response.data);
      expect(response.status).toBe(201);
      expect(response.data).toMatchObject(newUser);
      expect(response.data).toHaveProperty('id');
    });
  });

  // 5. /todos GET
  describe('GET /todos', () => {
    test('should return a list of todos with correct structure', async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      console.log('\nGET /todos response:', response.data.slice(0, 1));
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
      const todo = response.data[0];
      expect(typeof todo.completed).toBe('boolean');
    });
  });
});