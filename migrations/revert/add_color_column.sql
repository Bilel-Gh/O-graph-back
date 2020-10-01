-- Revert relation-graphiste:add_color_column from pg

BEGIN;

ALTER TABLE sticker
    DROP COLUMN color;

COMMIT;
