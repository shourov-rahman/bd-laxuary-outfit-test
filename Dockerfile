## Development

FROM node:lts-slim AS base

# Set the working directory
WORKDIR /app

# Copy package.json to install dependencies first
COPY package.*json ./

# Install dependencies
RUN npm install

## Production

FROM base AS builder

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build


FROM node:lts-slim AS runner

# Set the working directory
WORKDIR /app

# Copy the necessary files from the builder stage for the standalone build
COPY --from=builder /app/.next/standalone ./
# COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static .next/static

# Change ownership of the files to the node user
RUN chown -R node:node /app

# Switch to the non-root user
USER node

# Expose the internal port
EXPOSE 3000

CMD ["node", "server.js"]
