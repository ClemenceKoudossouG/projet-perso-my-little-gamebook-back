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
('L''Ile', 'ile'),
('Le Bateau', 'bateau'),
('La Cabine du Capitaine', 'cabine'),
('Le Village', 'village'),
('La Forêt', 'foret'),
('L''Espace', 'espace'),
('La Planète Rouge', 'planete_rouge'),
('La Planète Bleue', 'planete_bleue'),
('Le Château', 'chateau'),
('La Mer', 'mer'),
('Les Fonds Marins', 'fonds_marins');

INSERT INTO "npc" ("label", "img") VALUES
('pirate', 'pirate'),
('poulpe', 'poulpe'),
('sirène', 'sirene'),
('robot', 'robot'),
('sorcière', 'sorciere'),
('chevalier', 'chevalier'),
('princesse', 'princesse'),
('requin', 'requin');

INSERT INTO "item" ("label", "img") VALUES
('laser', 'laser'),
('poisson', 'poisson'),
('baguette magique', 'baguette'),
('pomme', 'pomme'),
('épée', 'epee');

INSERT INTO "action" ("label", "class", "consequence", "img") VALUES
('aller tout droit', 'no_npc', null, 'tout_droit'),
('aller à droite', 'no_npc', null, 'a_droite'),
('parler', 'npc', '"Suis-moi"', 'parler'),
('explorer', 'no_npc', null, 'explorer'),
('faire une blague', 'npc', 'Elle est bien bonne ! Tu reprends ta route.', 'blague'),
('trouver le trésor', 'ending', 'Bravo, tu as trouvé le trésor ! Quelle aventure !', 'tresor'),
('rentrer chez soi pour manger du poisson', 'bonus_ending', 'Bravo, tu es rentré chez toi pour manger du poisson ! Quelle aventure !', 'rentrer_poisson'),
('voler', 'npc', 'C''est pas très gentil de voler...', 'voler'),
('boire du jus de poire', 'no_npc', 'Délicieux ce jus de poire ! Tu reprends ta route.', 'boire_jus'),
('nettoyer les écrous', 'npc', 'Quel boulot ! Tu reprends ta route.', 'nettoyer_ecrous'),
('repousser une invasion extraterrestre', 'bonus_ending', 'Bravo, tu as repoussé une invasion extraterrestre. Quelle aventure !', 'repousser_invasion'),
('rentrer chez soi et partir à la retraite', 'ending', 'Bravo, tu es rentré chez toi. Tu vas pouvoir profiter de ta retraite... Quelle aventure !', 'rentrer_retraite'),
('fuir', 'npc', null, 'fuir'),
('chanter', 'no_npc', 'Quelle voix ! Tu reprends ta route.', 'chanter'),
('manger son goûter', 'no_npc', 'Miam !', 'manger'),
('proposer un concours de déguisement', 'npc', null, 'deguisement'),
('continuer de vivre des aventures en voyageant à travers le monde', 'ending', 'Bravo, tu as décidé de vivre une vie faite de quêtes et de voyages... Quelle aventure !', 'voyager_aventure'),
('rendre Excalibur à la Dame du Lac', 'bonus_ending', 'Bravo, tu as décidé de rendre l''épée du roi Arthur à la Dame du Lac, et elle t''en remercie. Après tout, c''était d''abord son épée, à elle. Quelle aventure !', 'rendre_epee'),
('réaliser une chanson qui deviendra un tube médiéval', 'bonus_ending', 'Bravo, tu viens d''enregistrer ton premier single, et il cartonne dans toutes les auberges ! Quelle aventure !', 'tube_medieval'),
('rentrer chez soi, planter une pomme, et attendre que ce futur pommier donne des fruits', 'bonus_ending', 'Bravo, tu as décidé d''arrêter tes aventures pour retourner à ton jardin. On espère que la pomme que tu as planté deviendra un beau pommier... Quelle aventure !', 'jardiner'),
('demander gentiment son chemin', 'npc', null, 'demander_chemin');

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
(4, 'ending', null, 1, 8, null),
(1, 'beginning', '12,13', 3, 5, 5),
(2, 'middle', '14,15', 3, 4, 7),
(2, 'middle', '16,17', 3, 9, 6),
(3, 'middle', '18,19', 3, 1, 1),
(3, 'middle', '19,20', 3, 10, 3),
(3, 'middle', '21,22', 3, 2, 2),
(3, 'middle', '23,28', 3, 4, 1),
(4, 'middle', '24,25', 3, 2, 8),
(4, 'middle', '25,26', 3, 3, 1),
(4, 'bonus_ending', null, 3, 11, null),
(4, 'middle', '27,28', 3, 10, 3),
(4, 'middle', '28,29', 3, 1, 2),
(4, 'ending', null, 3, 2, null),
(5, 'ending', null, 3, 1, null),
(5, 'bonus_ending', null, 3, 10, null),
(5, 'ending', null, 3, 2, null),
(5, 'ending', null, 3, 1, null),
(5, 'bonus_ending', null, 3, 3, null),
(5, 'ending', null, 3, 10, null);

INSERT INTO "action_has_item" ("action_id", "item_id") VALUES
(11, 1),
(7, 2),
(18, 5),
(19, 3),
(20, 4);

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
(8, 7, null, null),
(9, 11, null, null),
(10, 12, null, null),
(11, 13, 13, 4),
(11, 21, 12, 3),
(12, 3, 14, 5),
(12, 4, 15, null),
(13, 8, 16, null),
(13, 14, 17, null),
(14, 5, 18, null),
(14, 9, 19, null),
(15, 3, 19, null),
(15, 14, 20, null),
(16, 15, 21, null),
(16, 16, 22, null),
(17, 1, 23, null),
(17, 13, 28, null),
(18, 1, 24, null),
(18, 2, 25, null),
(19, 1, 26, null),
(19, 3, 25, null),
(20, 19, null, null),
(21, 1, 27, null),
(21, 13, 28, null),
(22, 4, 29, null),
(22, 5, 28, null),
(23, 17, null, null),
(24, 17, null, null),
(25, 18, null, null),
(26, 17, null, null),
(27, 12, null, null),
(28, 20, null, null),
(29, 17, null, null);

INSERT INTO "place_has_world" ("place_id", "world_id") VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 3),
(5, 3),
(6, 2),
(7, 2),
(8, 2),
(9, 3),
(10, 1),
(11, 1);

INSERT INTO "npc_has_world" ("npc_id", "world_id") VALUES
(1, 1),
(2, 1),
(3, 1),
(3, 3),
(4, 2),
(5, 3),
(6, 3),
(7, 3),
(8, 1);

INSERT INTO "npc_has_action" ("npc_id", "action_id") VALUES
(4, 10);

COMMIT;