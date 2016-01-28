var yaml = require('js-yaml'),
    fs   = require('fs'),
    co = require('co'),
    prompt = require('co-prompt');

var exists = false,
    _settings = {host: "http://localhost:8080", path: "/xwiki/rest", user: "the_user_name", password: "the_password" };

function getUserHome() {
  return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
}

// Get document, or throw exception on error 
try {
  _settings = yaml.safeLoad(fs.readFileSync(getUserHome()+'/.xwikil', 'utf8'));
  exists = true;
} catch (e) {
  exists = false;
}

module.exports = {
  exists : exists,
  settings : _settings,
  settingsPretty : function(){return yaml.safeDump(this.settings);},
  askSettings: function() {
    var thisconf = this;
    console.log("\nConfigure xwikil:\n=================");
    co(function *(){
      var userInput = {host: '', path: '/', user: '', password: ''};
      userInput.host = yield prompt('XWiki Host ('+thisconf.settings.host+'): ');
      userInput.path = yield prompt('XWiki REST path ('+thisconf.settings.path+'): /');
      userInput.user = yield prompt('Username ('+thisconf.settings.user+'): ');
      userInput.password = yield prompt('Password'+(thisconf.settings.password ? ' (Enter to keep)' : '')+': ');
      process.stdin.pause();
      return userInput;
    }).then(function(userInput){
      thisconf.settings.host = userInput.host || thisconf.settings.host;
      thisconf.settings.path = userInput.path ? ('/'+userInput.path): thisconf.settings.path;
      thisconf.settings.user = userInput.user || thisconf.settings.user;
      thisconf.settings.password = userInput.password || thisconf.settings.password;
      thisconf.saveSettings();
    }).catch(function(e){
      console.log(e);
    });
  },
  saveSettings: function() {
    fs.writeFileSync(getUserHome()+'/.xwikil', yaml.safeDump(this.settings), {"mode": 0600, "encoding": "utf8"});
    console.log("Saved configuration to "+getUserHome()+"/.xwikil");
  }
}
