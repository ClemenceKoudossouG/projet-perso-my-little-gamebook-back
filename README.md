# My Little Gamebook

My Little Gamebook aims to allow young users (ages 3 and up) to play interactive stories similar to Choose Your Own Adventure books, where the storyline unfolds based on the user's choices.

## Fonctionnalités principales

- User space with profile management
- With a profile: play interactive stories available in an immersive interface
- On the immersive interface: select one or two possible actions. The chosen action influences the course of the story.

## API Tech Stack

- PostgreSQL
- NodeJS
- Express

### Building and running your application

When you're ready, start your application by running:
`docker compose up --build`.

Your application will be available at http://localhost:3000.

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