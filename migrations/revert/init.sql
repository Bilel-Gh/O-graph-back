-- Revert relation-graphiste:init from pg

BEGIN;

DROP TABLE "user";
-----
DROP TABLE project;
-----
DROP TABLE feedback;
-----
CREATE TABLE image_list;
-----
DROP TABLE image;
-----
DROP TABLE sticker;
-----
DROP TABLE comment_list;
-----
DROP TABLE comment;
-----
DROP TABLE "user_has_project";

COMMIT;
