# Builder stage
FROM node:23-slim AS builder

WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:23-slim

WORKDIR /app

# Copy the built application from the builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/public ./public

# Copy the package.json and package-lock.json files to the production image@
COPY package*.json ./
# Install only production dependencies
RUN npm install --omit=dev

ENV PORT=3000

CMD ["npm", "run", "start"]

# Expose the application port
EXPOSE 3000