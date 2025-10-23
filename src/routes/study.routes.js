import express from 'express';
import * as studyRepo from '../repository/study.repository.js';
import HttpException from '../errors/httpException.js';

const router = express.Router();
console.log('✅ study.routes.js 실행됨');

router.post('/', async (req, res, next) => {
  try {
    const { nickname, title, description, background, password } = req.body;

    if (!nickname || !title || !password) {
      throw new HttpException(400, 'nickname, title, password는 필수 입력값입니다.');
    }

    const study = await studyRepo.createStudy({
      nickname,
      title,
      description,
      background,
      password,
    });

    res.status(201).json({ message: '스터디가 생성되었습니다.', study });
  } catch (error) {
    next(error);
  }
});

// ✅ 2️⃣ 전체 스터디 목록 조회 (GET /api/study?orderBy&search=&page=)
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

// ✅ 3️⃣ 특정 스터디 상세 조회 (GET /api/study/:id)
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const study = await studyRepo.getStudyById(id);
    if (!study) throw new HttpException(404, '해당 스터디를 찾을 수 없습니다.');
    res.json(study);
  } catch (error) {
    next(error);
  }
});

// ✅ 4️⃣ 스터디 정보 수정 (PATCH /api/study/:id)
router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description, background } = req.body;

    const updatedStudy = await studyRepo.updateStudy(id, {
      title,
      description,
      background,
    });

    res.json({ message: '스터디 정보가 수정되었습니다.', updatedStudy });
  } catch (error) {
    next(error);
  }
});

// ✅ 5️⃣ 스터디 삭제 (DELETE /api/study/:id)
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    await studyRepo.deleteStudy(id);
    res.json({ message: '스터디가 삭제되었습니다.' });
  } catch (error) {
    next(error);
  }
});

export default router;
