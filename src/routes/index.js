import express from 'express';
import studyRouter from './study.routes.js';
import habitRouter from './habit.routes.js';
import habitRecordRouter from './habit-record.routes.js';
import reactionRouter from './reaction.routes.js';

import { errorHandler } from '../middlewares/errorHandler.js';
import { logger } from '../middlewares/logger.js';
import { requestTimer } from '../middlewares/requestTimer.js';
import { corsMiddleware } from '../middlewares/cors.js';

const router = express.Router();

// 공통 미들웨어
router.use(corsMiddleware);
router.use(logger);
router.use(requestTimer);

//  라우터 등록
router.use('/api/study', studyRouter); // /api/study
router.use('/api/study', habitRouter); // /api/study/:studyId/habit
router.use('/api/habit', habitRecordRouter); // /api/habit/:habitId/record
router.use('/api/study', reactionRouter); // /api/study/:studyId/reaction

// 에러 핸들러
router.use(errorHandler);

export default router;
