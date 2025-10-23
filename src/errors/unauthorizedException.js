// src/errors/unauthorizedException.js
import  HttpException  from './httpException.js';

export class UnauthorizedException extends HttpException {
  constructor(message = '인증이 필요합니다.') {
    super(401, message);
  }
}
