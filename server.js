const express = require('express');

const server = express();

server.use(express.json());

const projectRouter = require('./data/projects/projects-router.js')
const resourceRouter = require('./data/resources/resources-router.js')
const tasksRouter = require('./data/tasks/tasks-router.js')

server.use('/api/projects', projectRouter)
server.use('/api/resources', resourceRouter)
server.use('/api/tasks', tasksRouter)

server.get('/', (req, res) => {
    res.send(`
      <h1>Hello World</h1>
    `);
});

module.exports = server;