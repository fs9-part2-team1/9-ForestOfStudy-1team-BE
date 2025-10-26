import express from 'express';
import studyRouter from './study/study.routes.js';
import habitRouter from './study/habit/habit.routes.js';
import habitRecordRouter from './study/habit/habit-record.routes.js';
import reactionRouter from './reaction.routes.js'; 

const router = express.Router();

//  스터디별 습관 목록, 추가
router.use('/api/study', studyRouter);
router.use('/api/study/:studyId/habit', habitRouter);

//  습관 수정, 삭제
router.use('/api/habit', habitRouter);

//  습관 기록 (체크/해제)
router.use('/api/habit/:habitId/record', habitRecordRouter);
router.use('/api/study/:studyId/reaction', reactionRouter); 
export default router;
