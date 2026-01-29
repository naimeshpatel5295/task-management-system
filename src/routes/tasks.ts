import { Router } from 'express';

const router = Router();

// GET /api/tasks
router.get('/', (req, res) => {
  // TODO: implement list tasks
  res.json({ message: 'Tasks API - Coming Soon' });
});

// POST /api/tasks
router.post('/', (req, res) => {
  // TODO: implement create task
  res.status(501).json({ message: 'Not implemented' });
});

// GET /api/tasks/:id
router.get('/:id', (req, res) => {
  // TODO: implement get task by id
  res.status(501).json({ message: 'Not implemented' });
});

// PATCH /api/tasks/:id
router.patch('/:id', (req, res) => {
  // TODO: implement update task
  res.status(501).json({ message: 'Not implemented' });
});

// DELETE /api/tasks/:id
router.delete('/:id', (req, res) => {
  // TODO: implement delete task
  res.status(501).json({ message: 'Not implemented' });
});

export default router;
