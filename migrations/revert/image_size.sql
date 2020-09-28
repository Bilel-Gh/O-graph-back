-- Revert relation-graphiste:image_size from pg

BEGIN;

ALTER TABLE image
    DROP COLUMN default_height;


ALTER TABLE image
    DROP COLUMN default_width;

COMMIT;
