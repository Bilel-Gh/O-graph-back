-- Deploy relation-graphiste:add_color_column to pg

BEGIN;

ALTER TABLE sticker
    ADD COLUMN color text;

COMMIT;
