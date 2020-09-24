-- Revert relation-graphiste:add_column_DateTime from pg

BEGIN;

ALTER TABLE comment
    DROP COLUMN date_time;

COMMIT;
