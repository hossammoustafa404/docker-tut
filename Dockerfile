FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
ARG NODE_ENV

RUN if [ "$NODE_ENV" = "production" ]; \
    then npm run build; \
    fi

RUN if [ "$NODE_ENV" = "production" ]; \
    then npm ci --omit=dev && npm cach clean --force; \
    fi

FROM builder AS dev-runner
CMD [ "npm","run","start:dev" ]

FROM node:20-alpine AS prod-runner
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
CMD [ "node","dist/main" ]
