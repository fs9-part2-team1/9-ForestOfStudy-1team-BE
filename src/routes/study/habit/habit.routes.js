import express from 'express';
import * as habitRepo from '../../../repository/habit.repository.js';
import HttpException from '../../../errors/httpException.js';

const router = express.Router({ mergeParams: true });

/* ---------------- 1) 스터디별 습관 목록/생성 (부모: /api/study/:studyId/habit) --------------- */

// GET /api/study/:studyId/habit
router.get('/', async (req, res, next) => {
  try {
    const { studyId } = req.params;
    const habits = await habitRepo.getHabits(studyId);
    res.json(habits);
  } catch (err) {
    next(err);
  }
});

// POST /api/study/:studyId/habit
router.post('/', async (req, res, next) => {
  try {
    const { studyId } = req.params;
    const { name } = req.body;
    if (!name) throw new HttpException(400, 'name은 필수 입력값입니다.');

    const habit = await habitRepo.createHabit(studyId, name);
    res.status(201).json({ habit });
  } catch (err) {
    next(err);
  }
});

/* ---------------- 2) 개별 습관 수정/삭제 (부모: /api/habit) ----------------------------------- */

// PATCH /api/habit/:habitId
router.patch('/:habitId', async (req, res, next) => {
  try {
    const { habitId } = req.params;
    const { name } = req.body;
    if (!name) throw new HttpException(400, 'name은 필수 입력값입니다.');

    const updatedHabit = await habitRepo.updateHabit(habitId, name);
    res.json({ habit: updatedHabit }); // 프론트가 habit으로 받도록 통일
  } catch (err) {
    next(err);
  }
});

// DELETE /api/habit/:habitId
router.delete('/:habitId', async (req, res, next) => {
  try {
    const { habitId } = req.params;
    await habitRepo.deleteHabit(habitId);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

export default router;
