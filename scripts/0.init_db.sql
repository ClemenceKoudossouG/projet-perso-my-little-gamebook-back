-- Create roles if they do not exist
DO $$
BEGIN
   IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = :'admin_user') THEN
      EXECUTE format('CREATE ROLE %I WITH LOGIN PASSWORD %L CREATEDB', :'admin_user', :'admin_password');
   ELSE
      EXECUTE format('ALTER ROLE %I WITH LOGIN PASSWORD %L CREATEDB', :'admin_user', :'admin_password');
   END IF;
   IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = :'app_user') THEN
      EXECUTE format('CREATE ROLE %I WITH LOGIN PASSWORD %L', :'app_user', :'app_password');
   ELSE
      EXECUTE format('ALTER ROLE %I WITH LOGIN PASSWORD %L', :'app_user', :'app_password');
   END IF;
END
$$;

-- Create the database if it does not exist
DO $$ 
BEGIN
   IF NOT EXISTS (SELECT 1 FROM pg_database WHERE datname = :'db_name') THEN
      EXECUTE format('CREATE DATABASE %I', :'db_name');
   END IF;
END
$$;

-- Grant privileges
DO $$
BEGIN
   EXECUTE format('ALTER DATABASE %I OWNER TO %I', :'db_name', :'admin_user');
   EXECUTE format('GRANT ALL PRIVILEGES ON DATABASE %I TO %I', :'db_name', :'admin_user');
END
$$;