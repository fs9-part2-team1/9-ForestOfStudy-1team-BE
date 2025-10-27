import express from 'express';
import * as reactionRepo from '../repository/reaction.repository.js';
import HttpException from '../errors/httpException.js';

const router = express.Router({ mergeParams: true });

// 특정 스터디의 모든 반응 조회 (GET /api/study/:studyId/reaction)
router.get('/', async (req, res, next) => {
  try {
    const { studyId } = req.params;

    if (!studyId) throw new HttpException(400, 'studyId가 필요합니다.');

    const reactions = await reactionRepo.getReactions(studyId);
    res.status(200).json({ success: true, data: reactions });
  } catch (error) {
    next(error);
  }
});

// 반응 추가 (POST /api/study/:studyId/reaction)
router.post('/', async (req, res, next) => {
  try {
    const { studyId } = req.params;
    const { emoji } = req.body;

    if (!studyId || !emoji) {
      throw new HttpException(400, 'studyId와 emoji는 필수 입력값입니다.');
    }

    const reaction = await reactionRepo.addReaction(studyId, emoji);
    res.status(201).json({
      success: true,
      message: '이모지 반응 추가 완료',
      data: reaction,
    });
  } catch (error) {
    next(error);
  }
});

// 반응 삭제
router.delete('/', async (req, res, next) => {
  try {
    const { studyId } = req.params;
    const { emoji } = req.body;
    if (!studyId || !emoji)
      throw new HttpException(400, 'studyId와 emoji는 필수 입력값입니다.');
    const reaction = await reactionRepo.removeReaction(studyId, emoji);
    res.status(200).json({
      success: true,
      message: '이모지 반응 삭제 완료',
      data: reaction,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
