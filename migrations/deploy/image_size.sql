-- Deploy relation-graphiste:image_size to pg

BEGIN;

ALTER TABLE image
    ADD COLUMN default_height int;


ALTER TABLE image
    ADD COLUMN default_width int;

COMMIT;
