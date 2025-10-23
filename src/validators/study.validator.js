const VALIDATE_TITLE_LENGTH = 2;
const VALIDATE_NICKNAME_LENGTH = 2;

/* 스터디 생성 유효성  */
export const createStudySchema = {
  title: checkValidateTitle(
    paramTitle,
    (validateLength = VALIDATE_TITLE_LENGTH),
  )
    ? {}
    : { message: `비밀번호는 ${validateLength}자 이상이어야 합니다.` },
  nickname: checkValidateNickname(
    paramNickname,
    (validateLength = VALIDATE_NICKNAME_LENGTH),
  )
    ? {}
    : { message: `이름은 ${validateLength}자 이상이어야 합니다.` },
};

/* 스터디 수정 유효성 */
export const updateStudySchema = {
  title: checkValidateTitle(
    paramTitle,
    (validateLength = VALIDATE_TITLE_LENGTH),
  )
    ? {}
    : { message: `비밀번호는 ${validateLength}자 이상이어야 합니다.` },
  nickname: checkValidateNickname(
    paramNickname,
    (validateLength = VALIDATE_NICKNAME_LENGTH),
  )
    ? {}
    : { message: `이름은 ${validateLength}자 이상이어야 합니다.` },
};
