const BASE = 'https://jsonplaceholder.typicode.com';

class TodoService {
  static async getById(id = 1) {
    const resp = await fetch(`${BASE}/todos/${id}`);
    if (!resp.ok) throw new Error(`Todo HTTP ${resp.status}`);
    return resp.json();
  }
}

class UserService {
  static async getById(id = 1) {
    const resp = await fetch(`${BASE}/users/${id}`);
    if (!resp.ok) throw new Error(`User HTTP ${resp.status}`);
    return resp.json();
  }
}

(async () => {
  try {
    const [todo, user] = await Promise.all([
      TodoService.getById(1),
      UserService.getById(1),
    ]);
    console.log('Todo:', todo);
    console.log('User:', user);

    const first = await Promise.race([
      TodoService.getById(1),
      UserService.getById(1),
    ]);
    console.log('Перший відповів:', first);
  } catch (err) {
    console.error('Ups:', err);
  }
})();