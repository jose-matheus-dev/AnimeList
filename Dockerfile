FROM node:23.9.0-alpine3.21 AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN mkdir -p "$PNPM_HOME/store" && chown -R node:node $PNPM_HOME

RUN corepack enable

USER node

WORKDIR /app

FROM base AS deps

COPY package.json pnpm-lock.yaml ./

RUN pnpm fetch
RUN pnpm i -r --offline --frozen-lockfile

COPY --chown=node . /app

EXPOSE 5173

CMD ["pnpm", "dev"]