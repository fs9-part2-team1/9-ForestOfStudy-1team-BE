
import express from 'express';
import * as habitRecordRepo from '../../../repository/habit-record.repository.js';
import HttpException from '../../../errors/httpException.js';

const router = express.Router({ mergeParams: true });

// ✅ 습관 기록 조회
router.get('/', async (req, res, next) => {
  try {
    const { habitId } = req.params;
    const records = await habitRecordRepo.getHabitRecords(habitId);
    res.json(records);
  } catch (error) {
    next(error);
  }
});

// ✅ 습관 기록 생성
router.post('/', async (req, res, next) => {
  try {
    const { habitId } = req.params;
    const { recordDate } = req.body;

    if (!recordDate) throw new HttpException(400, 'recordDate는 필수입니다.');

    const record = await habitRecordRepo.createHabitRecord(habitId, recordDate);
    res.status(201).json({ record });
  } catch (error) {
    console.error('🔥 습관 기록 생성 에러:', error);
    next(error);
  }
});

// ✅ 습관 기록 삭제
router.delete('/:recordId', async (req, res, next) => {
  try {
    const { habitId, recordId } = req.params;
    await habitRecordRepo.deleteHabitRecord(habitId, recordId);
    res.status(200).json({ message: '삭제 완료' });
  } catch (error) {
    console.error('🔥 습관 기록 삭제 에러:', error);
    next(error);
  }
});

export default router;
