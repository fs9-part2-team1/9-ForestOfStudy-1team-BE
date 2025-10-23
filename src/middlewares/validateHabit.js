import { BadRequestException } from '../errors/badRequestException.js';

export const validateHabit = (req, res, next) => {
  const { studyId, name } = req.body;

  if (!studyId || !name) {
    throw new BadRequestException('studyId와 name은 필수 입력값입니다.');
  }

  if (name.trim().length < 2) {
    throw new BadRequestException('습관 이름은 최소 2글자 이상이어야 합니다.');
  }

  next();
};
