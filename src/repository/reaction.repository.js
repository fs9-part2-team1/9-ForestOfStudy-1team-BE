import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// 특정 스터디의 모든 반응 조회

export async function getReactions(studyId) {
  return prisma.reaction.findMany({
    where: { studyId },
    orderBy: { emoji: 'asc' },
  });
}

//이모지 반응 추가 (새 반응 or 기존 count +1)

export async function addReaction(studyId, emoji) {
  // 이미 존재하는 반응이 있는지 확인
  const existing = await prisma.reaction.findFirst({
    where: { studyId, emoji },
  });

  if (existing) {
    // 있으면 count +1
    return prisma.reaction.update({
      where: { id: existing.id },
      data: { count: existing.count + 1 },
    });
  } else {
    // 없으면 새로 생성
    return prisma.reaction.create({
      data: { studyId, emoji, count: 1 },
    });
  }
}

//반응취소
export async function removeReaction(studyId, emoji) {
  const existing = await prisma.reaction.findFirst({
    where: { studyId, emoji },
  });

  if (!existing) return null;

  if (existing.count > 1) {
    // count 1 이상이면 -1
    return prisma.reaction.update({
      where: { id: existing.id },
      data: { count: existing.count - 1 },
    });
  } else {
    // 1이면 삭제
    return prisma.reaction.delete({
      where: { id: existing.id },
    });
  }
}
