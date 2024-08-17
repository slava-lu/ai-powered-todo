DROP TABLE IF EXISTS "task_list";

CREATE TABLE "task_list" (
     "id" SERIAL PRIMARY KEY,
     "category" VARCHAR(255),
     "description" TEXT,
     "status" INTEGER,
     "created" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
     "ai_rec" TEXT
);

