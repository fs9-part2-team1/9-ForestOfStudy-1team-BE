import express from 'express';
import * as habitRepo from '../repository/habit.repository.js';

const router = express.Router();

//  습관 목록 조회
router.get('/:studyId', async (req, res) => {
  const habits = await habitRepo.getHabits(req.params.studyId);
  res.json(habits);
});

//  습관 추가
router.post('/', async (req, res) => {
  const { studyId, name } = req.body;
  const habit = await habitRepo.createHabit(studyId, name);
  res.status(201).json(habit);
});

//  습관 수정
router.put('/:id', async (req, res) => {
  const { name } = req.body;
  const updatedHabit = await habitRepo.updateHabit(req.params.id, name);
  res.json(updatedHabit);
});

//  습관 삭제
router.delete('/:id', async (req, res) => {
  await habitRepo.deleteHabit(req.params.id);
  res.json({ message: '습관 삭제 완료' });
});

export default router;
