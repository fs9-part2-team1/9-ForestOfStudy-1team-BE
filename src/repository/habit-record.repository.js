import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// ✅ 특정 습관의 기록 조회
export async function getHabitRecords(habitId) {
  return prisma.habitRecord.findMany({
    where: { habitId },
    orderBy: { recordDate: 'desc' },
  });
}

// ✅ 습관 기록 추가
export async function createHabitRecord(habitId, recordDate) {
  return prisma.habitRecord.create({
    data: {
      habitId,
      recordDate: recordDate ? new Date(recordDate) : new Date(),
    },
  });
}

// ✅ 습관 기록 삭제
export async function deleteHabitRecord(id) {
  return prisma.habitRecord.delete({
    where: { id },
  });
}
