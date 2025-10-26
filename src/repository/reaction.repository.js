import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/* Reaction 생성하기 */
async function createReaction(data) {
  return await prisma.reaction.create({ data });
}

/* 모든 Reaction 리스트 조회 */
async function findAllReactionList() {
  return await prisma.reaction.findMany();
}

/* Reaction 단건 검색  - reactions, hibits 같이 조회 */
async function findReactionById(id) {
  return await prisma.reaction.findUnique({
    where: { id },
    include: {
      study: {
        include: { habits: true },
      },
    },
  });
}

/* Reaction 수정 */
async function updateReaction(id, data) {
  return await prisma.reaction.update({
    where: {
      id: id,
    },
    data: data,
  });
}

/*  단건 Reaction 삭제 */
async function deleteReaction(id) {
  return await prisma.reaction.delete({
    where: { id },
  });
}

export const reactionRepository = {
  findAllReactionList,
  createReaction,
  findReactionById,
  updateReaction,
  deleteReaction,
};
