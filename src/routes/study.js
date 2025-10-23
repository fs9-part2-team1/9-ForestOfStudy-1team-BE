import express from 'express';
import { studyRepository } from '../repository/study.repository.js';

export const studyRouter = express.Router();

/* 새로운 study 생성 */
studyRouter.post('/', async (req, res, next) => {
  try {
    const newStudy = await studyRepository.createStudy(req.body);

    res.status(201).json(newStudy);
  } catch (error) {
    next(error);
  }
});

/* 모든 study 리스트 조회 */
studyRouter.get('/', async (req, res, next) => {
  try {
    console.log('findAllStudyList() calll');
    const studyList = await studyRepository.findAllStudyList();

    res.status(200).json(studyList);
  } catch (error) {
    next(error);
  }
});

/* 단건 study 조회 */
studyRouter.get('/:id', async (req, res, next) => {
  try {
    const study = await studyRepository.findStudyById(req.params.id);

    res.status(200).json(study);
  } catch (error) {
    next(error);
  }
});

/* 단건 study에 대한 habit 조회 */
studyRouter.get('/:id/habit/:habitId', async (req, res, next) => {
  try {
    const study = await studyRepository.findStudyById(req.params.id);

    res.status(200).json(study);
  } catch (error) {
    next(error);
  }
});

/* 단건 study에 대한 reaction 조회 */
studyRouter.get('/:id/reaction/:reactionId', async (req, res, next) => {
  try {
    const study = await studyRepository.findStudyById(req.params.id);

    res.status(200).json(study);
  } catch (error) {
    next(error);
  }
});

/* study 수정 */
studyRouter.patch('/:id', async (req, res) => {
  try {
    await studyRepository.updateStudy(req.params.id, req.body);
  } catch (error) {
    next(error);
  }
});

/* study 삭제 */
studyRouter.delete('/:id', async (req, res, next) => {
  try {
    const study = await studyRepository.deleteStudy(req.params.id);

    res.status(200).json(study);
  } catch (error) {
    next(error);
  }
});
