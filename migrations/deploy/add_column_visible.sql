-- Deploy relation-graphiste:add_column_visible to pg

BEGIN;

ALTER TABLE sticker
    ADD COLUMN visible boolean NOT NULL DEFAULT true;

COMMIT;
