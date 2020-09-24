-- Revert relation-graphiste:add_column_image from pg

BEGIN;

ALTER TABLE "user"
    DROP COLUMN "image";

COMMIT;
