import express from 'express';
import * as studyRepo from '../../repository/study.repository.js';
import HttpException from '../../errors/httpException.js';
import habitRouter from './habit/habit.routes.js';
import reactionRouter from '../reaction.routes.js'; // ✅ 추가

const router = express.Router();

if (process.env.NODE_ENV === 'development') {
  console.log('✅ study.routes.js 실행됨');
}

// ✅ 하위 라우터 연결
router.use('/:studyId/habit', habitRouter);
router.use('/:studyId/reaction', reactionRouter); // ✅ 추가

// 새 스터디 생성 (POST /api/study)
router.post('/', async (req, res, next) => {
  try {
    const { nickname, title, description, background, password } = req.body;
    if (!nickname || !title || !password) {
      throw new HttpException(400, 'nickname, title, password는 필수 입력값입니다.');
    }

    const study = await studyRepo.createStudy({ nickname, title, description, background, password });
    res.status(201).json({ message: '스터디가 생성되었습니다.', study });
  } catch (error) {
    next(error);
  }
});

// 전체 스터디 목록 조회 (GET /api/study)
router.get('/', async (req, res, next) => {
  try {
    const { orderBy = 'createdAt', search = '', page = 1, limit = 10 } = req.query;
    const studies = await studyRepo.getStudies({
      orderBy,
      search,
      page: Number(page),
      limit: Number(limit),
    });
    res.json(studies);
  } catch (error) {
    next(error);
  }
});

// 특정 스터디 조회 (GET /api/study/:studyId)
router.get('/:studyId', async (req, res, next) => {
  try {
    const { studyId } = req.params;
    const study = await studyRepo.getStudyById(studyId);
    if (!study) throw new HttpException(404, '해당 스터디를 찾을 수 없습니다.');
    res.json(study);
  } catch (error) {
    next(error);
  }
});

// 스터디 정보 수정 (PATCH /api/study/:studyId)
router.patch('/:studyId', async (req, res, next) => {
  try {
    const { studyId } = req.params;
    const { title, description, background } = req.body;
    const updatedStudy = await studyRepo.updateStudy(studyId, { title, description, background });
    res.json({ message: '스터디 정보가 수정되었습니다.', updatedStudy });
  } catch (error) {
    next(error);
  }
});

// 스터디 삭제 (DELETE /api/study/:studyId)
router.delete('/:studyId', async (req, res, next) => {
  try {
    const { studyId } = req.params;
    await studyRepo.deleteStudy(studyId);
    res.json({ message: '스터디가 삭제되었습니다.' });
  } catch (error) {
    next(error);
  }
});

export default router;
