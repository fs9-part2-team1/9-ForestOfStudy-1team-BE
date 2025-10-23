import { isDevelopment } from '../config/config.js';
import HttpException from '../errors/httpException.js'; 

// 공통 에러 핸들러
export const errorHandler = (error, req, res, next) => {
  console.error('error', error);

  if (error instanceof HttpException) {
    return res.status(error.statusCode).json({
      success: false,
      message: error.message,
    });
  }

  let result = {
    success: false,
    message: '서버 내부 오류가 발생했습니다.',
  };

  if (isDevelopment) {
    result = { ...result, error: error.message, stack: error.stack };
  }

  return res.status(500).json(result);
};
