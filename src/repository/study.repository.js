import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

//  모든 스터디 조회
export async function getStudies() {
  return prisma.study.findMany({
    include: {
      habits: true,
      reactions: true,
    },
    orderBy: { createdAt: 'desc' },
  });
}

//  특정 스터디 조회
export async function getStudyById(id) {
  return prisma.study.findUnique({
    where: { id },
    include: {
      habits: {
        include: {
          habitRecord: true,
        },
      },
      reactions: true,
    },
  });
}

//  스터디 생성
export async function createStudy(data) {
  return prisma.study.create({ data });
}

// 스터디 수정
export async function updateStudy(id, data) {
  return prisma.study.update({
    where: { id },
    data,
  });
}

//  스터디 삭제
export async function deleteStudy(id) {
  return prisma.study.delete({ where: { id } });
}
