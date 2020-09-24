-- Deploy relation-graphiste:add_column_image to pg

BEGIN;

ALTER TABLE "user"
    ADD COLUMN "image" text;


COMMIT;
