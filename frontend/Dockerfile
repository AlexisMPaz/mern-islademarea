# Use the official Node.js image as the base image
FROM node:18.16.0

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Set the environment variable NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=https://api-isla-de-marea.onrender.com

# Build the Next.js application
RUN npm run build

# Start the Next.js application in production mode
CMD ["npm", "start"]