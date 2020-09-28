-- Deploy relation-graphiste:create_view_user_without-password to pg

BEGIN;

CREATE OR REPLACE VIEW user_without_password AS
SELECT 
"user".id AS user_id,
"role",
email,
first_name,
last_name,
company_name,
"image"
FROM "user";

COMMIT;
