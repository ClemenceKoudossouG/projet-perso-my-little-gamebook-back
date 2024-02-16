BEGIN;

INSERT INTO "story" ("name", "level") VALUES
('L''histoire des 4 créateurs', 1),
('L''enquête de la Gaufre', 1),
('La quête de la Gaufre', 2);

INSERT INTO "genre" ("label", "img") VALUES
('Aventure', 'aventure'),
('Enquête', 'enquete');

INSERT INTO "world" ("label", "img") VALUES
('Pirate', 'pirate'),
('Espace', 'espace'),
('Fantastique', 'fantastique');

INSERT INTO "place" ("label", "img") VALUES
('île', 'ile'),
('bateau', 'bateau'),
('cabine du capitaine', 'cabine'),
('village', 'village'),
('forêt', 'foret'),
('espace', 'espace'),
('planète rouge', 'planete_rouge'),
('planète bleue', 'planete_bleue');

INSERT INTO "npc" ("label", "img") VALUES
('pirate', 'pirate'),
('poulpe', 'poulpe'),
('sirène', 'sirene'),
('robot', 'robot');

INSERT INTO "item" ("label", "img") VALUES
('laser', 'laser'),
('poisson', 'poisson');


INSERT INTO "action" ("label", "class", "consequence", "img") VALUES
('aller tout droit', 'no_npc', null, 'tout_droit'),
('aller à droite', 'no_npc', null, 'a_droite'),
('parler', 'npc', 'Suis-moi', 'parler'),
('explorer', 'no_npc', null, 'explorer'),
('faire une blague', 'npc', 'Elle est bien bonne ! Tu reprends ta route.', 'blague'),
('trouver le trésor', 'ending', 'Bravo, tu as trouvé le trésor ! Quelle aventure !', 'tresor'),
('rentrer chez soi pour manger du poisson', 'bonus_ending', 'Bravo, tu es rentré chez toi pour manger du poisson ! Quelle aventure !', 'rentrer_poisson'),
('voler', 'npc', 'C''est pas très gentil de voler...', 'voler'),
('boire du jus de poire', 'no_npc', 'Délicieux ce jus de poire ! Tu reprends ta route.', 'boire_jus'),
('nettoyer les écrous', 'npc', 'Quel boulot ! Tu reprends ta route.', 'nettoyer_ecrous'),
('repousser une invasion extraterrestre', 'bonus_ending', 'Bravo, tu as repoussé une invasion extraterrestre. Quelle aventure !', 'repousser_invasion'),
('rentrer chez soi et partir à la retraite', 'ending', 'Bravo, tu es rentré chez toi. Tu vas pouvoir profiter de ta retraite... Quelle aventure !', 'rentrer_retraite');

INSERT INTO "compartment" ("position", "class", "children", "story_id", "place_id", "npc_id") VALUES
(1, 'beginning', '2,3', 1, 1, null),
(2, 'middle', '4', 1, 1, 1),
(2, 'middle', '5,6', 1, 2, 3),
(3, 'middle', '7,8', 1, 3, 2),
(3, 'ending', null, 1, 3, null),
(3, 'middle', '9,10', 1, 6, 4),
(4, 'ending', null, 1, 4, null),
(4, 'bonus_ending', null, 1, 5, null),
(4, 'bonus_ending', null, 1, 7, null),
(4, 'ending', null, 1, 8, null);

INSERT INTO "action_has_item" ("action_id", "item_id") VALUES
(11, 1),
(7, 2);

INSERT INTO "story_has_genre" ("story_id", "genre_id") VALUES
(1, 1),
(2, 2),
(3, 1),
(3, 2);

INSERT INTO "compartment_has_action" ("compartment_id", "action_id", "child", "item") VALUES
(1, 1, 2, null),
(1, 2, 3, null),
(2, 3, 4, null),
(3, 8, 6, 1),
(3, 9, 5, null),
(4, 4, 7, null),
(4, 5, 8, 2),
(5, 6, null, null),
(6, 3, 10, null),
(6, 10, 9, null),
(7, 6, null, null),
(8, 12, null, null),
(8, 7, null, null),
(9, 12, null, null),
(9, 11, null, null),
(10, 12, null, null);

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