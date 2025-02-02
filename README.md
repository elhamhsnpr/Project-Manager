# Project Manager

A TypeScript-based project management application featuring drag-and-drop capabilities for efficient task organization.

## Features

- **Project Categorization**: Organize projects into "Active" and "Finished" statuses.
- **Drag-and-Drop Interface**: Seamlessly move projects between categories using drag-and-drop.
- **Form Validation**: Ensure project entries are complete and valid before submission.

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/elhamhsnpr/Project-Manager.git
   cd Project-Manager
   ```

2. **Install Dependencies**:

   Ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed. Then, run:

   ```bash
   npm install
   ```

3. **Build the Project**:

   Before starting the development server, build the project using Webpack:

   ```bash
   npm run build
   ```

## Usage

1. **Start the Development Server**:

   This project now uses **webpack** and **webpack-dev-server** for development. Run the following command to start the server:

   ```bash
   npm start
   ```

   Webpack is configured with `ts-loader` to compile TypeScript files.

2. **Open in Browser**:

   Navigate to `http://localhost:8080` (or the port provided by webpack-dev-server) to interact with the application.

## Project Structure

- **src/**: Contains the TypeScript source files.
- **dist/**: Bundled JavaScript output generated by Webpack.
- **index.html**: Main HTML file.
- **app.css**: Main stylesheet for application styling.
- **webpack.config.js**: Webpack configuration file for setting up loaders, plugins, and development server.