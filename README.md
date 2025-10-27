# FS09 스프린트 part2 - 1팀

> #### 📜[팀 협업 문서 ](https://www.notion.so/codeit/2806fd228e8d806db860e41c1e0f6426?v=2806fd228e8d812286a8000ca3543a39 "노션 주소")

### 🧑‍💻 팀원 구성

| 👑 이유리 | 박지은 | 김유신 |
|-----------|-------|-------|
| ![유리](https://github.com/yoorrll.png?s=40) | ![지은](https://github.com/jieun318.png?s=40) | ![유신](https://github.com/powerima.png?s=40) |
|[GitHub](https://github.com/yoorrll)|[GitHub](https://github.com/jieun318)|[GitHub](https://github.com/powerima)


## 💡 프로젝트 소개

> **프로젝트명** : 공부의 숲 🌳

- **프로젝트 주제** : 개인 공부 관리 및 커뮤니티 서비스

- **프로젝트 소개** : 최근 몇 년간 올바른 습관의 정착에 대한 사람들의 관심이 높아지고 있고, 그중에서도 '조금씩 습관을 들이기'에 대한 이론이 각광받고 있습니다. 따라서 개인이 학습할 내용을 정리할 스터디를 만들고, 하루동안 수행할 공부를 관리하며 집중 타이머 기능을 제공해 잘 수행할 때마다 포인트를 제공하는 서비스 제작합니다.

- **프로젝트 기간**: 2025. 10. 02 ~ 2025. 10. 28

## 🔧 기술 스택

- **Frontend**: JavaScript, React.js, CSS module
- **Backend**: Express.js, Prisma
- **Database**: PostgreSQL
- **공통 Tool**: Git & Github, Discord, Notion

## 📝 팀원별 구현 기능 상세

> #### 이유리 (팀장)
- **메인** : 프론트 / 백
- **스터디 만들기** : 프론트 수정 / 백
- **스터디 상세** : 프론트 / 백
- **오늘의 습관** : 프론트 수정 / 백
- **오늘의 집중** : 프론트 수정 / 백
- **백엔드** : DB 모델링, 스키마, 시딩, CRUD

> #### 박지은
- **오늘의 습관** : 프론트 / 백
- **오늘의 집중** : 프론트 수정
- **백엔드** : CRUD, 라우트, 미들웨어, 에러 핸들러

> #### 김유신
- **스터디 만들기** : 프론트

## 📂 파일 구조

```
fs9-part2-team1-be
├─ .prettierignore
├─ .prettierrc
├─ eslint.config.js
├─ package.json
├─ pnpm-lock.yaml
├─ prisma
│  ├─ migrations
│  │  ├─ 20251018111956_init
│  │  │  └─ migration.sql
│  │  └─ migration_lock.toml
│  └─ schema.prisma
├─ README.md
├─ scripts
│  └─ seed.js
└─ src
   ├─ config
   │  └─ config.js
   ├─ errors
   │  ├─ badRequestException.js
   │  ├─ forbiddenException.js
   │  ├─ httpException.js
   │  ├─ notFoundExption.js
   │  └─ unauthorizedException.js
   ├─ generated
   ├─ middlewares
   │  ├─ cors.js
   │  ├─ errorHandler.js
   │  ├─ logger.js
   │  ├─ requestTimer.js
   │  └─ validateHabit.js
   ├─ repository
   │  ├─ habit-record.repository.js
   │  ├─ habit.repository.js
   │  ├─ reaction.repository.js
   │  └─ study.repository.js
   ├─ routes
   │  ├─ index.js
   │  ├─ reaction.routes.js
   │  └─ study
   │     ├─ habit
   │     │  ├─ habit-record.routes.js
   │     │  └─ habit.routes.js
   │     └─ study.routes.js
   └─ server.js

```