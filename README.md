# My Little Gamebook

My Little Gamebook aims to allow young users (ages 3 and up) to play interactive stories similar to Choose Your Own Adventure books, where the storyline unfolds based on the user's choices.

## Main features

- User space with profile management
- With a profile: play interactive stories available in an immersive interface
- On the immersive interface: select one or two possible actions. The chosen action influences the course of the story.

## API Tech Stack

- PostgreSQL
- NodeJS
- Express

### Building and running your application

When you're ready, build your container and start your application by running:
`docker compose up --build`.

Or, to start an existing container from the command line, just run `docker compose up`.

Your application will be available at http://localhost:3000.

### Navigating the database

Once your app is running, open a shell in the container: `docker exec -it <container_id_or_name> /bin/sh` or `docker exec -it <container_id_or_name> /bin/bash`
To find container id or name, run `docker ps`.

Assuming the PostgreSQL client is installed in the container or on the host:

If you want to access the database from your host machine, run the following command with the adequate credentials: `psql -h localhost -p 5432 -U your_username -d your_database`

Inside the container, run `psql -U your_username -d your_database`

### Deploying your application to the cloud

First, build your image, e.g.: `docker build -t myapp .`.
If your cloud uses a different CPU architecture than your development
machine (e.g., you are on a Mac M1 and your cloud provider is amd64),
you'll want to build the image for that platform, e.g.:
`docker build --platform=linux/amd64 -t myapp .`.

Then, push it to your registry, e.g. `docker push myregistry.com/myapp`.

Consult Docker's [getting started](https://docs.docker.com/go/get-started-sharing/)
docs for more detail on building and pushing.

### References
* [Docker's Node.js guide](https://docs.docker.com/language/nodejs/)