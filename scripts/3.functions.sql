$$ LANGUAGE sql SECURITY DEFINER;

BEGIN;

ALTER DEFAULT PRIVILEGES FOR ROLE admin_gamebook IN SCHEMA public
GRANT EXECUTE ON FUNCTIONS TO gamebook;


-- Story :

-- Pour récupérer et afficher toutes les histoires :
CREATE OR REPLACE FUNCTION get_all_stories() RETURNS SETOF story AS $$
	SELECT * FROM story;
$$ LANGUAGE sql SECURITY DEFINER;

-- Pour récupérer et afficher toutes les histoires selon un genre choisi :
CREATE OR REPLACE FUNCTION get_all_stories_by_genre(int) RETURNS SETOF story AS $$
	SELECT DISTINCT story FROM story_has_genre JOIN story ON story.id = story_has_genre.story_id WHERE genre_id=$1;
$$ LANGUAGE sql SECURITY DEFINER;

-- Pour récupérer et afficher toutes les histoires selon un niveau choisi :
CREATE OR REPLACE FUNCTION get_all_stories_by_level(int) RETURNS SETOF story AS $$
	SELECT * FROM story WHERE level=$1;
$$ LANGUAGE sql SECURITY DEFINER;

-- Pour récupérer une histoire en particulier :
CREATE OR REPLACE FUNCTION find_story_by_id(int) RETURNS story AS $$
	SELECT * FROM story WHERE id=$1;
$$ LANGUAGE sql SECURITY DEFINER;



-- Genre :

-- Pour récupérer et afficher tous les genres :
CREATE OR REPLACE FUNCTION get_all_genres() RETURNS SETOF genre AS $$
	SELECT * FROM genre;
$$ LANGUAGE sql SECURITY DEFINER;

-- Pour récupérer et afficher le ou les genres appliqué(s) à une histoire :
CREATE OR REPLACE FUNCTION get_all_genres_of_a_story(int) RETURNS SETOF genre AS $$
	SELECT DISTINCT genre FROM story_has_genre JOIN genre ON genre.id = story_has_genre.genre_id WHERE story_id=$1;
$$ LANGUAGE sql SECURITY DEFINER;

-- Pour récupérer un genre en particulier :
CREATE OR REPLACE FUNCTION find_genre_by_id(int) RETURNS genre AS $$
	SELECT * FROM genre WHERE id=$1;
$$ LANGUAGE sql SECURITY DEFINER;



-- Compartment :

-- Pour récupérer et afficher toutes les cases :
CREATE OR REPLACE FUNCTION get_all_compartments() RETURNS SETOF compartment AS $$
	SELECT * FROM compartment;
$$ LANGUAGE sql SECURITY DEFINER;

-- Pour récupérer et afficher toutes les cases selon une classe choisie :
CREATE OR REPLACE FUNCTION get_all_compartments_by_class(json) RETURNS SETOF compartment AS $$
	SELECT * FROM compartment WHERE class=$1;
$$ LANGUAGE sql SECURITY DEFINER;

-- Pour récupérer une case en particulier :
CREATE OR REPLACE FUNCTION find_compartment_by_id(int) RETURNS compartment AS $$
	SELECT * FROM compartment WHERE id=$1;
$$ LANGUAGE sql SECURITY DEFINER;



-- World :

-- Pour récupérer et afficher tous les univers :
CREATE OR REPLACE FUNCTION get_all_worlds() RETURNS SETOF world AS $$
	SELECT * FROM world;
$$ LANGUAGE sql SECURITY DEFINER;

-- Pour récupérer un univers en particulier :
CREATE OR REPLACE FUNCTION find_world_by_id(int) RETURNS world AS $$
	SELECT * FROM world WHERE id=$1;
$$ LANGUAGE sql SECURITY DEFINER;



-- Place :

-- Pour récupérer et afficher tous les lieux :
CREATE OR REPLACE FUNCTION get_all_places() RETURNS SETOF place AS $$
	SELECT * FROM place;
$$ LANGUAGE sql SECURITY DEFINER;

-- Pour récupérer et afficher tous les lieux selon un univers choisi :
CREATE OR REPLACE FUNCTION get_all_places_by_world(int) RETURNS SETOF place AS $$
	SELECT DISTINCT place FROM place_has_world JOIN place ON place.id = place_has_world.place_id WHERE world_id=$1;
$$ LANGUAGE sql SECURITY DEFINER;

-- Pour récupérer un lieu en particulier :
CREATE OR REPLACE FUNCTION find_place_by_id(int) RETURNS place AS $$
	SELECT * FROM place WHERE id=$1;
$$ LANGUAGE sql SECURITY DEFINER;



-- NPC :

-- Pour récupérer et afficher tous les personnages :
CREATE OR REPLACE FUNCTION get_all_npcs() RETURNS SETOF npc AS $$
	SELECT * FROM npc;
$$ LANGUAGE sql SECURITY DEFINER;

-- Pour récupérer et afficher tous les personnages selon un univers choisi :
CREATE OR REPLACE FUNCTION get_all_npcs_by_world(int) RETURNS SETOF npc AS $$
	SELECT DISTINCT npc FROM npc_has_world JOIN npc ON npc.id = npc_has_world.npc_id WHERE world_id=$1;
$$ LANGUAGE sql SECURITY DEFINER;

-- Pour récupérer un personnage en particulier :
CREATE OR REPLACE FUNCTION find_npc_by_id(int) RETURNS npc AS $$
	SELECT * FROM npc WHERE id=$1;
$$ LANGUAGE sql SECURITY DEFINER;



-- Item :

-- Pour récupérer et afficher tous les objets :
CREATE OR REPLACE FUNCTION get_all_items() RETURNS SETOF item AS $$
	SELECT * FROM item;
$$ LANGUAGE sql SECURITY DEFINER;

-- Pour récupérer et afficher le ou les objet(s) associé(s) à une action :
CREATE OR REPLACE FUNCTION get_all_items_by_action(int) RETURNS SETOF item AS $$
	SELECT DISTINCT item FROM action_has_item JOIN item ON item.id = action_has_item.item_id WHERE action_id=$1;
$$ LANGUAGE sql SECURITY DEFINER;

-- Pour récupérer un objet en particulier :
CREATE OR REPLACE FUNCTION find_item_by_id(int) RETURNS item AS $$
	SELECT * FROM item WHERE id=$1;
$$ LANGUAGE sql SECURITY DEFINER;



-- Action :

-- Pour récupérer et afficher toutes les actions :
CREATE OR REPLACE FUNCTION get_all_actions() RETURNS SETOF action AS $$
	SELECT * FROM action;
$$ LANGUAGE sql SECURITY DEFINER;

-- Pour récupérer et afficher la ou les action(s) associée(s) à un personnage :
CREATE OR REPLACE FUNCTION get_all_actions_by_npc(int) RETURNS SETOF action AS $$
	SELECT DISTINCT action FROM npc_has_action JOIN action ON action.id = npc_has_action.action_id WHERE npc_id=$1;
$$ LANGUAGE sql SECURITY DEFINER;

-- Pour récupérer et afficher la ou les action(s) associée(s) à un objet :
CREATE OR REPLACE FUNCTION get_all_actions_by_item(int) RETURNS SETOF action AS $$
	SELECT DISTINCT action FROM action_has_item JOIN action ON action.id = action_has_item.action_id WHERE item_id=$1;
$$ LANGUAGE sql SECURITY DEFINER;

-- Pour récupérer et afficher toutes les actions selon une classe choisie :
CREATE OR REPLACE FUNCTION get_all_actions_by_class(json) RETURNS SETOF action AS $$
	SELECT * FROM action WHERE class=$1;
$$ LANGUAGE sql SECURITY DEFINER;

-- Pour récupérer une action en particulier :
CREATE OR REPLACE FUNCTION find_action_by_id(int) RETURNS action AS $$
	SELECT * FROM action WHERE id=$1;
$$ LANGUAGE sql SECURITY DEFINER;



-- User :
CREATE FUNCTION add_user(u json) RETURNS "user" AS $$
	INSERT INTO "user"
	(email,password,lastname,firstname,alias,avatar)
	VALUES
	(
		u->>'email',
		u->>'password',
		u->>'lastname',
		u->>'firstname',
        u->>'alias',
        u->>'avatar'
	)
	RETURNING *;
$$ LANGUAGE sql SECURITY DEFINER;

CREATE OR REPLACE FUNCTION verify_user(json) RETURNS json AS $$
DECLARE
	user_found json;
BEGIN
	SELECT json_build_object(
		'id',id,
		'email',email,
		'lastname',lastname,
		'firstname',firstname,
		'alias',alias,
        'avatar',avatar
	) INTO user_found
	FROM "user"
	WHERE email = $1->>'email' AND password = $1->>'password';
	
	IF user_found IS NOT NULL
	THEN
		return user_found;
	ELSE
		return null;
	END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE FUNCTION get_user(int) RETURNS "user" AS $$
	SELECT * FROM "user" WHERE id=$1;
$$ LANGUAGE sql SECURITY DEFINER;



COMMIT;