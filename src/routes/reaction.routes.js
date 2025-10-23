import express from 'express';
import * as reactionRepo from '../repository/reaction.repository.js';
import HttpException from '../errors/httpException.js';

const router = express.Router({ mergeParams: true });

// ✅ 특정 스터디의 반응 조회 (GET /api/study/:studyId/reaction)
router.get('/:studyId/reaction', async (req, res, next) => {
  try {
    const { studyId } = req.params;
    const reactions = await reactionRepo.getReactions(studyId);
    res.json(reactions);
  } catch (error) {
    next(error);
  }
});

// ✅ 반응 추가 (POST /api/study/:studyId/reaction)
router.post('/:studyId/reaction', async (req, res, next) => {
  try {
    const { studyId } = req.params;
    const { emoji } = req.body;

    if (!emoji) throw new HttpException(400, 'emoji는 필수 입력값입니다.');

    const reaction = await reactionRepo.addReaction(studyId, emoji);
    res.status(201).json({ message: '이모지 반응 추가 완료', reaction });
  } catch (error) {
    next(error);
  }
});

export default router;
