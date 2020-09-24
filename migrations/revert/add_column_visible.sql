-- Revert relation-graphiste:add_column_visible from pg

BEGIN;

ALTER TABLE sticker
    DROP COLUMN visible;

COMMIT;
