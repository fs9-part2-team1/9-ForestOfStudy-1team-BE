import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// ✅ 특정 습관의 기록 조회
export async function getHabitRecords(habitId) {
  return prisma.habitRecord.findMany({
    where: { habitId }, // ✅ Number() 제거
    orderBy: { recordDate: 'desc' },
  });
}

// ✅ 습관 기록 추가
export async function createHabitRecord(habitId, recordDate) {
  if (!habitId) throw new Error('habitId가 필요합니다.');
  if (!recordDate) throw new Error('recordDate가 필요합니다.');

  const startOfDayKST = new Date(`${recordDate}T00:00:00+09:00`);
  const endOfDayKST = new Date(`${recordDate}T23:59:59.999+09:00`);

  try {
   
    await prisma.habitRecord.deleteMany({
      where: {
        habitId, 
        recordDate: {
          gte: startOfDayKST,
          lt: endOfDayKST,
        },
      },
    });

    // 새 기록 생성
    const record = await prisma.habitRecord.create({
      data: {
        habit: { connect: { id: habitId } },
        recordDate: startOfDayKST,
      },
    });

 
    return record;
  } catch (error) {
    console.error('❌ habitRecord create error:', error);
    throw error;
  }
}

//  습관 기록 삭제
export async function deleteHabitRecord(habitId, id) {
  return prisma.habitRecord.deleteMany({
    where: { id, habitId }, 
  });
}
