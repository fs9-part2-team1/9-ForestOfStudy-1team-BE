import express from 'express';
import * as habitRepo from '../repository/habit.repository.js';
import HttpException from '../errors/httpException.js';

const router = express.Router({ mergeParams: true }); // studyId 받기 위해 필요

// ✅ 특정 스터디의 모든 습관 조회 (GET /api/study/:studyId/habit)
router.get('/:studyId/habit', async (req, res, next) => {
  try {
    const { studyId } = req.params;
    const habits = await habitRepo.getHabits(studyId);
    res.json(habits);
  } catch (error) {
    next(error);
  }
});

// ✅ 습관 추가 (POST /api/study/:studyId/habit)
router.post('/:studyId/habit', async (req, res, next) => {
  try {
    const { studyId } = req.params;
    const { name } = req.body;

    if (!name) {
      throw new HttpException(400, 'name은 필수 입력값입니다.');
    }

    const habit = await habitRepo.createHabit(studyId, name);
    res.status(201).json({ message: '습관 추가 완료', habit });
  } catch (error) {
    next(error);
  }
});

// ✅ 습관 수정 (PATCH /api/habit/:habitId)
router.patch('/habit/:habitId', async (req, res, next) => {
  try {
    const { habitId } = req.params;
    const { name } = req.body;
    const updatedHabit = await habitRepo.updateHabit(habitId, name);
    res.json({ message: '습관 수정 완료', updatedHabit });
  } catch (error) {
    next(error);
  }
});

// ✅ 습관 삭제 (DELETE /api/habit/:habitId)
router.delete('/habit/:habitId', async (req, res, next) => {
  try {
    const { habitId } = req.params;
    await habitRepo.deleteHabit(habitId);
    res.json({ message: '습관 삭제 완료' });
  } catch (error) {
    next(error);
  }
});

export default router;
