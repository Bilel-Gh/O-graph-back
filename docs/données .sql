INSERT INTO "user" ("role", "email", "password", "first_name", "last_name", "company_name")
VALUES ('superAdmin', 'bobby@gmail.com', 'bobby','Bobby', 'Stone', ' '),
        ('graphiste', 'david@gmail.com', 'david', 'David', 'Lewis', ' '),
        ('graphiste', 'michael@gmail.com', 'michael', 'Michael', 'Jordan', ' '),
        ('client', 'adadis@gmail.com', 'adadis', ' ', ' ', 'Adadis'),
        ('client', 'vilvoc@gmail.com', 'vilvoc', ' ',  ' ', 'Vilvoc')

INSERT INTO project (name, statut, create_date)
    VALUES 
        ('Basket black Adadis', 'termine', now()), 
        ('T-shirt vacances 2019', 'termine', now()),
        ('Flyer famille', 'en attente de rendu', now()),
        ('Affiche Vilvoc fête des lilas', 'En attente de retour', now()),
        ('Mike Taillzon anniversary', 'Annulé', now()),
        ('Vilvoc le retour 3 Affiche', 'En attente de retour', now()),
        ('Flyer the callback hell', 'En attente de rendu', now()),
        ('Brochure expo', 'termine', now()),
        ('Affiche concert', 'En attente de retour', now()),
        ('Roll up MLB Immo', '', now());

INSERT INTO feedback (project_id, name, rendering_date, return_date, user_id)
    VALUES
        ('3', 'Premier rendu du flyer famille', now(), '2020-09-23 16:02:00-07', '2'),
        ('7', 'Premier rendu flyer callback hell', now(), '2020-09-23 14:02:00-07', '3');

INSERT INTO image_list ("feedback_id", "name")
VALUES ('1', 'Famille list-image'),
        ('2', 'Flyer Callback hell list-image');

INSERT INTO image (image_url, list_image_id)
    VALUES
        ('/public/images/img-12345678', '1'),
        ('/public/images/img-23456789', '2');

INSERT INTO sticker ("image_id", "position_x", "position_y")
VALUES ('1', '50', '50'),
        ('1', '100', '150');

INSERT INTO comment_list (sticker_id, "name")
    VALUES
        ('1', 'modifier la couleur du fond en bleu ciel'),
        ('2', 'Modifier le texte du titre en plus gros et en gras');

INSERT INTO comment ("text", "list_comment_id", "user_id")
VALUES ('Le premier commentaire', '1', '4'),
        ('réponse au commentaire', '1', '3');

INSERT INTO user_has_project
VALUES ('2', '3'),
        ('3', '7'),
        ('4', '6'),
        ('5', '2'),
        ('3', '5');