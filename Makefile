build:
	docker build \
		--build-arg UNAME=$$(whoami) \
		--build-arg UID=$$(id -u) \
		--build-arg GID=$$(id -g) \
		--build-arg GIT_USER_NAME=$$(git config --global user.name) \
		--build-arg GIT_USER_EMAIL=$$(git config --global user.email) \
		-t app/node .

run:
	docker run \
		-t \
		-d \
		--rm \
		--name app.node \
		-v .:/app  \
		-p 5173:5173 \
		--net=host \
		app/node

up: build run

shell:
	docker exec --user node -i -t app.node bash

down:
	docker stop app.node

rmi:
	docker rmi app/node

rm:
	docker rm app.node