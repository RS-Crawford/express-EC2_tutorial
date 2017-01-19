module.exports = {
	apps: [{
    name: 'tutorial-2',
    scripts: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-35-166-78-164.us-west-2.compute.amazonaws.com',
      key: '/users/samcrawford/Downloads/TUTORIAL.pem',
      ref: 'origin/master',
      repo: 'git@github.com:RS-Crawford/express-EC2_tutorial.git',
      path: 'express-EC2_tutorial',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
