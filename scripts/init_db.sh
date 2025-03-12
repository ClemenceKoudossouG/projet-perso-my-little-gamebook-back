#!/bin/bash
export PGPORT=5432

export PGUSER=postgres
export PGPASSWORD=postgres

psql -v admin_user="$ADMIN_USER" -v admin_password="$ADMIN_PASSWORD" -v app_user="$APP_USER" -v app_password="$APP_PASSWORD" -v db_name="$DB_NAME" -f /docker-entrypoint-initdb.d/0.init_db.sql

export PGUSER=admin_gamebook
export PGPASSWORD=gamebook

export PGDATABASE=gamebook

psql -f /docker-entrypoint-initdb.d/1.create_tables.sql

psql -f /docker-entrypoint-initdb.d/2.seeding.sql

psql -f /docker-entrypoint-initdb.d/3.functions.sql