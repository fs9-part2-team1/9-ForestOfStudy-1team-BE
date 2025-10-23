import express from 'express';
import habitRepository from 'habitRecord.repository.js';

export const habitRouter = express.Router();

/* 새로운 habit 생성 */
habitRouter.post('/', async (res, req, next) => {
  try {
    const newHabit = await habitRepository.createHabit(req.body);

    res.status(201).json(newHabit);
  } catch (error) {
    next(error);
  }
  return newHabit;
});

/* 하나 Study 의 모든 habit 리스트 조회 */
habitRouter.get('/study/:studyId', async (res, req) => {
  try {
    const habitList = await habitRepository.findHabitListByStudyId();

    res.status(200).json(habitList);
  } catch (error) {}

  return habitList;
});

/* 모든 habit 리스트 조회 */
habitRouter.get('/', async (res, req) => {
  try {
    const habitList = await habitRepository.findAllHabitList();

    res.status(200).json(habitList);
  } catch (error) {}

  return habitList;
});

/* 단건 habit 조회 */
habitRouter.get('/:id', async (res, req) => {
  try {
    const habit = await habitRepository.findHabitById();

    res.status(200).json(habit);
  } catch (error) {
    return habit;
  }
});

/* habit 수정 */
habitRouter.patch('/:id', async (res, req) => {
  try {
    await habitRepository.updateHabit(req.params.id, req.body);
  } catch (error) {}
});

/* habit 삭제 */
habitRouter.delete('/:id', async (res, req) => {
  return await habitRepository.deleteHabit(req.params.id);
});
