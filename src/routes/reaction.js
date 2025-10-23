import express from 'express';
import { reactionRepository } from '../repository/reaction.repository.js';

export const reactionRouter = express.Router();

/* 새로운 reaction 생성 ver 1 */
reactionRouter.post('/study/:studyId', async (req, res, next) => {
  try {
    const data = { studyId: req.params.studyId, ...req.body };
    const newReaction = await reactionRepository.createReaction(data);

    res.status(201).json(newReaction);
  } catch (error) {
    next(error);
  }
});

/* 새로운 reaction 생성 ver 2 */
reactionRouter.post('/', async (req, res, next) => {
  try {
    const newReaction = await reactionRepository.createReaction(req.body);

    res.status(201).json(newReaction);
  } catch (error) {
    next(error);
  }
});

/* 하나 Study 의 모든 reaction 리스트 조회 */
reactionRouter.get('/study/:studyId', async (req, res) => {
  try {
    const reactionList = await reactionRepository.findReactionListByStudyId();

    res.status(200).json(reactionList);
  } catch (error) {}
});

/* 모든 reaction 리스트 조회 */
reactionRouter.get('/', async (req, res, next) => {
  try {
    const reactionList = await reactionRepository.findAllReactionList();

    res.status(200).json(reactionList);
  } catch (error) {
    next(error);
  }
});

/* 단건 reaction 조회 */
reactionRouter.get('/:id', async (req, res, next) => {
  try {
    const reaction = await reactionRepository.findReactionById(req.params.id);

    res.status(200).json(reaction);
  } catch (error) {
    next(error);
  }
});

/* reaction 수정 */
reactionRouter.patch('/:id', async (req, res, next) => {
  try {
    const reaction = await reactionRepository.updateReaction(
      req.params.id,
      req.body,
    );

    res.status(200).json(reaction);
  } catch (error) {}
});

/* reaction 삭제 */
reactionRouter.delete('/:id', async (req, res, next) => {
  try {
    const reaction = await reactionRepository.deleteReaction(req.params.id);
    res.status(200).json(reaction);
  } catch (error) {}
});
