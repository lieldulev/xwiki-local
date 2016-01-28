var http = require('http'),
    conf = require('./localconf'),
    fs   = require('fs'),
    axios = require('axios');

module.exports = {
  client: axios.create({
    baseURL: conf.settings.host+conf.settings.path,
    timeout: 1000,
    headers: {'Accept': 'application/json'},
    auth: {
      username: conf.settings.user,
      password: conf.settings.password
    }
  }),
  get: function(xwikiPage, target){
    console.log("Fetching "+conf.settings.host+conf.settings.path+'/'+xwikiPage);
    this.client.get(xwikiPage).then(function(response){
      if (typeof target === 'undefined'){
        console.log(response.data.content);
      } else {
        fs.writeFileSync(target, response.data.content, {"mode": 0666, "encoding": "utf8"});
      }
    }).catch(function(e){
      console.log(e);
    });
  },
  put: function(source, xwikiTarget){
  try {
    contents = fs.readFileSync(source, 'utf8');

    this.client.put(xwikiTarget, contents, {
      headers : {'Content-Type': 'text/plain'}
    }).then(function(){
      console.log("Page '"+xwikiTarget+"' was updated.");
      return true;
    }).catch(function(e){
      console.log(e);
      return false;
    });
  } catch (e) {
    console.log(e);
    return false;
  }
    
  },
  restPathFromPageURL: function(URL){
    var parts = URL.split('/');
    return [parts.pop(), 'pages', parts.pop(), 'wikis/xwiki/spaces'].reverse().join('/');
  }

}
