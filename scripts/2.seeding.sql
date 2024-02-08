BEGIN;

INSERT INTO "user" ("email", "password", "lastname", "firstname", "alias") VALUES
('john.doe@oclock.school', 'jojo123', 'Doe', 'John', 'jojo');

INSERT INTO "story" ("name", "level") VALUES
('L''histoire des 4 créateurs', 1),
('L''enquête de la Gaufre', 1),
('La quête de la Gaufre', 2);

INSERT INTO "genre" ("label") VALUES
('Aventure'),
('Enquête');

INSERT INTO "world" ("label") VALUES
('Pirate'),
('Espace'),
('Fantastique');

INSERT INTO "place" ("label") VALUES
('île'),
('bateau'),
('cabine du capitaine'),
('village'),
('forêt'),
('espace'),
('planète rouge'),
('planète bleue');

INSERT INTO "npc" ("label") VALUES
('pirate'),
('poulpe'),
('sirène'),
('robot');

INSERT INTO "item" ("label") VALUES
('laser'),
('poisson');


INSERT INTO "action" ("label", "class", "consequence") VALUES
('aller tout droit', 'no_npc', ''),
('aller à droite', 'no_npc', ''),
('parler', 'npc', 'Suis-moi'),
('explorer', 'no_npc', ''),
('faire une blague', 'npc', 'Elle est bien bonne ! Tu reprends ta route.'),
('trouver le trésor', 'ending', 'Bravo, tu as trouvé le trésor ! Quelle aventure !'),
('rentrer chez soi pour manger du poisson', 'bonus_ending', 'Bravo, tu es rentré chez toi pour manger du poisson ! Quelle aventure !'),
('voler', 'npc', 'C''est pas très gentil de voler...'),
('boire du jus de poire', 'no_npc', 'Délicieux ce jus de poire ! Tu reprends ta route.'),
('nettoyer les écrous', 'npc', 'Quel boulot ! Tu reprends ta route.'),
('repousser une invasion extraterrestre', 'bonus_ending', 'Bravo, tu as repoussé une invasion extraterrestre. Quelle aventure !'),
('rentrer chez soi et partir à la retraite', 'ending', 'Bravo, tu es rentré chez toi. Tu vas pouvoir profiter de ta retraite... Quelle aventure !');

INSERT INTO "compartment" ("position", "class", "children", "story_id", "place_id", "npc_id") VALUES
(1, 'beginning', '2,3', 1, 1, null),
(2, 'middle', '4', 1, 1, 1),
(2, 'middle', '5,6', 1, 2, 3),
(3, 'middle', '7,8', 1, 3, 2),
(3, 'ending', '', 1, 3, null),
(3, 'middle', '9,10', 1, 6, 4),
(4, 'ending', '', 1, 4, null),
(4, 'bonus_ending', '', 1, 5, null),
(4, 'bonus_ending', '', 1, 7, null),
(4, 'ending', '', 1, 8, null);

INSERT INTO "user_has_story" ("user_id", "story_id") VALUES
(1, 1);

INSERT INTO "action_has_item" ("action_id", "item_id") VALUES
(11, 1),
(7, 2);

INSERT INTO "story_has_genre" ("story_id", "genre_id") VALUES
(1, 1),
(2, 2),
(3, 1),
(3, 2);

INSERT INTO "compartment_has_action" ("compartment_id", "action_id") VALUES
(1, 1),
(1, 2),
(2, 3),
(3, 8),
(3, 9),
(4, 4),
(4, 5),
(5, 6),
(6, 10),
(6, 3),
(7, 6),
(8, 7),
(9, 11),
(10, 12);

INSERT INTO "place_has_world" ("place_id", "world_id") VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 3),
(5, 3),
(6, 2),
(7, 2),
(8, 2);

INSERT INTO "npc_has_world" ("npc_id", "world_id") VALUES
(1, 1),
(2, 1),
(3, 1),
(3, 3),
(4, 2);

INSERT INTO "npc_has_action" ("npc_id", "action_id") VALUES
(4, 10);

COMMIT;