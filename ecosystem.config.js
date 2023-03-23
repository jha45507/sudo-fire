module.exports = {
  apps : [{
    script: 'npm start'
  }],

  deploy : {
    production : {
      key: 'key.pem',
      user : 'ubuntu',
      host : '35.75.162.246',
      ref  : 'origin/main',
      repo : 'https://github.com/jha45507/sudo-fire.git',
      path : '/homePage/ubuntu',
      'pre-deploy-local': '',
      'post-deploy' : 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
};
