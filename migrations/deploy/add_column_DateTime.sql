-- Deploy relation-graphiste:add_column_DateTime to pg

BEGIN;

ALTER TABLE comment
    ADD COLUMN date_time timestamptz NOT NULL DEFAULT now();

COMMIT;
