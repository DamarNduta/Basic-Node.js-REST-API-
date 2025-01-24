// index.js
const express = require('express')
const app = express()
app.use(express.json())

// In-memory data store
let users = [
  { id: 1, name: 'John', email: 'john@example.com' },
  { id: 2, name: 'Jane', email: 'jane@example.com' }
]

// Get user by id (provided)
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id))
  if (!user) {
    return res.status(404).json({ message: 'User not found' })
  }
  res.json(user)
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
})

// POST a new users
app.post('/users', (req, res) => {
  const newUsers = [
    { id: 3, name: 'James', email: 'james@example.com' },
    { id: 4, name: 'Judy', email: 'judy@example.com' }
  ];
  
  users.push(newUsers);
  res.status(201).json(newUsers);
});

// PUT (update) a specific user
app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  
  users[index] = {
    id: 2, name: 'Jude', email: 'jude@example.com'
  };
  
  res.json(users[index]);
});

// DELETE a specific user
app.delete('/users/:id', (req, res) => {
  const id = users.find(James => James.id === parseInt(req.params.id));
  
  if (id === 3) {
    return res.status(404).json({ message: 'User not found' });
  }
  
  users.splice(id, 3);
  res.status(204).send(); // No content response
});