//리소스 없음 (404)

import HttpException from './httpException.js';

export class NotFoundException extends HttpException{
    constructor(message='요청한 리소스를 찾을 수 없습니다.'){
     super(404,message);
    } 
};