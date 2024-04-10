# Stage 1: Build the backend server
FROM node:14 AS backend

# Set the working directory for the backend
WORKDIR /usr/server/app

# Copy package.json and install dependencies for backend
COPY Server/package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the backend application code
COPY Server .

# Expose the port that the backend runs on
EXPOSE 3001

# Define the command to run the backend application
CMD ["npm", "start"]

# Stage 2: Build the frontend application
FROM node:14 AS frontend

# Set the working directory for the frontend
WORKDIR /usr/spotify/app

# Copy package.json and install dependencies for frontend
COPY spotifie/package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend application code
COPY spotifie/ .

# Build the React app for frontend
RUN npm run build

# Expose the port that the frontend runs on
EXPOSE 3000

# Define the command to run the frontend application
CMD ["npm", "start"]
