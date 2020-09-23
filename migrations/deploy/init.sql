-- Deploy relation-graphiste:init to pg

BEGIN;

-----
-- USER
-----
CREATE TABLE "user"(
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "role" text NOT NULL,
	"email" text NOT NULL UNIQUE,
    "password" text NOT NULL,
    "first_name" text NOT NULL,
    "last_name" text NOT NULL,
    "company_name" text NOT NULL
);

-----
-- PROJECT
-----
CREATE TABLE project(
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" text NOT NULL,
    "statut" text,
    "create_date" timestamptz NOT NULL DEFAULT now()
);

-----
-- FEEDBACK
-----
CREATE TABLE feedback(
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "project_id" int NOT NULL REFERENCES project(id),
    "user_id" int NOT NULL REFERENCES "user"(id),
    "name" text NOT NULL,
    "rendering_date" timestamptz NOT NULL DEFAULT now(),
    "return_date" timestamptz
    
);

-----
-- LIST_IMAGE
-----
CREATE TABLE image_list(
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "feedback_id" int NOT NULL REFERENCES feedback(id),
    "name" text NOT NULL
);

-----
-- IMAGE
-----
CREATE TABLE image(
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "image_url" text NOT NULL,
    "list_image_id" int REFERENCES image_list(id)
);

-----
-- STICKER
-----
CREATE TABLE sticker(
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "image_id" int NOT NULL REFERENCES image(id),
    "position_x" text NOT NULL,
    "position_y" text NOT NULL
);

-----
-- comment_list
-----
CREATE TABLE comment_list(
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "sticker_id" int NOT NULL REFERENCES sticker(id),
    "name" text NOT NULL
);

-----
-- comment
-----
CREATE TABLE comment(
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "text" text NOT NULL,
    "list_comment_id" int NOT NULL REFERENCES comment_list(id),
    "user_id" int NOT NULL REFERENCES "user"(id)
);


-----
-- USER_HAS_PROJECT
-----
CREATE TABLE "user_has_project" (
  "user_id" int NOT NULL REFERENCES "user"(id),
  "project_id" int NOT NULL REFERENCES "project"(id),
  PRIMARY KEY ("user_id", "project_id")
);

COMMIT;
