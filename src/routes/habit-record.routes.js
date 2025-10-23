import express from 'express';
import * as habitRecordRepo from '../repository/habit-record.repository.js';
import HttpException from '../errors/httpException.js';

const router = express.Router();

// ✅ 습관 기록 조회 (GET /api/habit/:habitId/record)
router.get('/:habitId/record', async (req, res, next) => {
  try {
    const { habitId } = req.params;
    if (!habitId) throw new HttpException(400, 'habitId가 필요합니다.');

    const records = await habitRecordRepo.getHabitRecords(habitId);
    res.json(records);
  } catch (error) {
    next(error);
  }
});

// ✅ 습관 체크 (POST /api/habit/:habitId/record)
router.post('/:habitId/record', async (req, res, next) => {
  try {
    const { habitId } = req.params;
    const { recordDate } = req.body;

    const record = await habitRecordRepo.createHabitRecord(habitId, recordDate);
    res.status(201).json({ message: '습관 기록 추가 완료', record });
  } catch (error) {
    next(error);
  }
});

// ✅ 습관 기록 삭제 (DELETE /api/habit/:habitId/record/:id)
router.delete('/:habitId/record/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    await habitRecordRepo.deleteHabitRecord(id);
    res.json({ message: '습관 기록 삭제 완료' });
  } catch (error) {
    next(error);
  }
});

export default router;
