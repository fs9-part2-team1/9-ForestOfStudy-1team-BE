import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

//  특정 스터디의 습관 목록 조회
export async function getHabits(studyId) {
  return prisma.habit.findMany({
    where: { studyId },
    orderBy: { createdAt: 'asc' },
  });
}

//  습관 추가
export async function createHabit(studyId, name) {
  return prisma.habit.create({
    data: { studyId, name },
  });
}

//  습관 수정
export async function updateHabit(id, name) {
  return prisma.habit.update({
    where: { id },
    data: { name },
  });
}

//  습관 삭제
export async function deleteHabit(id) {
  return prisma.habit.delete({
    where: { id },
  });
}

//  전체 습관 목록 조회 (기본 /api/habit)
export async function getAllHabits() {
  return prisma.habit.findMany({
    orderBy: { createdAt: 'asc' },
  });
}
