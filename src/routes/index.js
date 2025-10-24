import express from 'express';
import studyRouter from './study/study.routes.js';
import reactionRouter from './reaction.routes.js';

const router = express.Router();

//  스터디 관련 라우터 (하위에 habit, record까지 다 포함됨)
router.use('/api/study', studyRouter);

// 스터디 반응 관련 라우터
router.use('/api/study/:studyId/reaction', reactionRouter);

export default router;
