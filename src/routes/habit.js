import express from 'express';
import { habitRepository } from '../repository/habit.repository.js';

export const habitRouter = express.Router();

/* 새로운 habit 생성 */
habitRouter.post('/', async (req, res, next) => {
  try {
    const newHabit = await habitRepository.createHabit(req.body);

    res.status(201).json(newHabit);
  } catch (error) {
    next(error);
  }
});

/* studyId 로 새로운 habit 생성 */
habitRouter.get('/studyId', async (req, res, next) => {
  try {
    const studyId = req.params.studyId;
    const data = { studyId: studyId, ...req.body };
    const newHabit = await habitRepository.createHabit(data);

    res.status(201).json(newHabit);
  } catch (error) {
    next(error);
  }
});

/* 하나 Study 의 모든 habit 리스트 조회 */
habitRouter.get('/study/:studyId', async (req, res, next) => {
  try {
    const studyId = req.params.studyId;
    const habitList = await habitRepository.findHabitListByStudyId(studyId);

    res.status(200).json(habitList);
  } catch (error) {
    next(error);
  }

  return habitList;
});

/* 모든 habit 리스트 조회 */
habitRouter.get('/', async (req, res, next) => {
  try {
    const habitList = await habitRepository.findAllHabitList();

    res.status(200).json(habitList);
  } catch (error) {
    next(error);
  }
});

/* 단건 habit 조회 */
habitRouter.get('/:id', async (req, res, next) => {
  try {
    const habit = await habitRepository.findHabitById(req.params.id);

    res.status(200).json(habit);
  } catch (error) {
    next(error);
  }
});

/* habit 수정 */
habitRouter.patch('/:id', async (req, res, next) => {
  try {
    await habitRepository.updateHabit(req.params.id, req.body);
  } catch (error) {
    next(error);
  }
});

/* habit 삭제 */
habitRouter.delete('/:id', async (req, res, next) => {
  try {
    await habitRepository.deleteHabit(req.params.id);

    res.status(200).json({ message: '습관이 성공적으로 삭제되었습니다.' });
  } catch (error) {
    next(error);
  }
});
