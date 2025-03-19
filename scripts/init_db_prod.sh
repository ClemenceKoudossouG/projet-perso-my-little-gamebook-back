#!/bin/bash

# Exit on error
set -e

# Export PostgreSQL environment variables
export PGHOST=${DB_HOST}
export PGPORT=${DB_PORT}
export PGUSER=${DB_USER}
export PGPASSWORD=${DB_PASSWORD}
export PGDATABASE=${DB_NAME}

# Function to execute a SQL script and handle errors
execute_sql_script() {
    local script_path=$1
    echo "Executing $script_path..."
    psql -h "$PGHOST" -p "$PGPORT" -U "$PGUSER" -d "$PGDATABASE" \
        -v my_db_name="$PGDATABASE" -v my_db_user="$PGUSER" \
        -f "$script_path"
    echo "$script_path executed successfully."
}

# Initialize the database
psql -h "$PGHOST" -p "$PGPORT" -U "$PGUSER" -d "$PGDATABASE" \
    -v my_db_name="$PGDATABASE" -v my_db_user="$PGUSER" \
    -f /Users/clemencekg/Desktop/dev/Gamebook/projet-my-little-game-book-back/scripts/0.init_db_prod.sql

# Execute scripts
execute_sql_script "/Users/clemencekg/Desktop/dev/Gamebook/projet-my-little-game-book-back/scripts/1.create_tables.sql"
execute_sql_script "/Users/clemencekg/Desktop/dev/Gamebook/projet-my-little-game-book-back/scripts/2.seeding.sql"
execute_sql_script "/Users/clemencekg/Desktop/dev/Gamebook/projet-my-little-game-book-back/scripts/3.functions_prod.sql"

echo "Database initialization completed successfully."
