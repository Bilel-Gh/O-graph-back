-- Revert relation-graphiste:create_view_user_without-password from pg

BEGIN;

DROP VIEW user_without_password;

COMMIT;
