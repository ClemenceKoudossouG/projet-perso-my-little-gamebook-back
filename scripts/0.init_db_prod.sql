DO $$
DECLARE
    db_name TEXT := current_database();
    db_user TEXT := current_user;
BEGIN
    -- Grant privileges on the database
    EXECUTE format('GRANT ALL PRIVILEGES ON DATABASE %I TO %I', db_name, db_user);
    
    -- Correct the quoting issue by using `quote_ident`
    EXECUTE format(
        'ALTER DEFAULT PRIVILEGES FOR ROLE %I IN SCHEMA public GRANT EXECUTE ON FUNCTIONS TO %I',
        db_user, db_user
    );
END $$;
