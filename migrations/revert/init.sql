-- Revert relation-graphiste:init from pg

BEGIN;

DROP TABLE "user_has_project";
-----
DROP TABLE comment;
-----
DROP TABLE comment_list;
-----
DROP TABLE sticker;
-----
DROP TABLE image;
-----
DROP TABLE image_list;
-----
DROP TABLE feedback;
-----
DROP TABLE project;
-----
DROP TABLE "user";
-----
COMMIT;
