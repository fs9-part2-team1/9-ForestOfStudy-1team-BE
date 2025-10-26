import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/*  새로운 Habit 생성하기 */
async function createHabit(data) {
  return await prisma.habit.create({ data });
}

/* Habit 리스트를 studyId 로 조회 */
async function findHabitListByStudyId(id) {
  return await prisma.habit.findMany();
}

/* 모든 Habit 리스트 조회 */
async function findAllHabitList() {
  return await prisma.habit.findMany();
}

/* Habit 단건 검색  - reactions, hibits 같이 조회 */
async function findHabitById(id) {
  return await prisma.habit.findUnique({
    where: { id },
    include: {
      study: {
        include: { reactions: true },
      },
    },
  });
}

/* Habit 수정 */
async function updateHabit(id, data) {
  return await prisma.habit.update({
    where: {
      id: id,
    },
    data: data,
  });
}

/*  단건 Habit 삭제 */
async function deleteHabit(id) {
  return await prisma.habit.delete({
    where: { id },
  });
}

export const habitRepository = {
  createHabit,
  findHabitById,
  findHabitListByStudyId,
  findAllHabitList,
  updateHabit,
  deleteHabit,
};
