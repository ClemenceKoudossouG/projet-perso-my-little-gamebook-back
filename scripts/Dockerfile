# filepath: /Users/clemencekg/Desktop/dev/Gamebook/projet-my-little-game-book-back/scripts/Dockerfile
# projet-my-little-game-book-back/scripts/Dockerfile
FROM postgres:15

# Copy the initialization scripts to the directory where PostgreSQL will automatically run them
COPY ./scripts/0.init_db.sql /docker-entrypoint-initdb.d/
COPY ./scripts/1.create_tables.sql /docker-entrypoint-initdb.d/
COPY ./scripts/2.seeding.sql /docker-entrypoint-initdb.d/
COPY ./scripts/3.functions.sql /docker-entrypoint-initdb.d/
COPY ./scripts/init_db.sh /docker-entrypoint-initdb.d/

RUN chmod +x /docker-entrypoint-initdb.d/init_db.sh
