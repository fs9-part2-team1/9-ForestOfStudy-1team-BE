import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/* 스터디 생성하기 */
async function createStudy(data) {
  return await prisma.study.create({ data });
}

/* 모든 스터디 리스트 조회 */
async function findAllStudyList() {
  return await prisma.study.findMany();
}

/* 스터디 단건 검색  - reactions, hibits 같이 조회 */
async function findStudyById(id) {
  return await prisma.study.findUnique({
    where: { id },
    include: { habits: true, reactions: true },
  });
}

/* 스터디 수정 */
async function updateStudy(id, data) {
  return await prisma.study.update({
    where: {
      id: id,
    },
    data: data,
  });
}

/*  단건 스터디 삭제 */
async function deleteStudy(id) {
  return await prisma.study.delete({
    where: { id },
  });
}

export const studyRepository = {
  findAllStudyList,
  createStudy,
  findStudyById,
  updateStudy,
  deleteStudy,
};
