docker-watch:
	docker compose up --build --watch

prisma-migrate:
	npm run docker:prisma generate
	npm run docker:prisma migrate dev --name init