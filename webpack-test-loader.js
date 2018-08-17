path = require('path');
const fs = require('fs');

module.exports = function(source) {

    gets the soy2js js file
    let inputDir = './templates';
    let outputDir = './.tmp/js/templates';
    let resource = this.resourcePath;
    resource = path.relative(inputDir, resource);
    resource = resource.replace(".soy", ".js");
    resource = `${outputDir}/${resource}`;
    var jsSource = fs.readFileSync(resource, 'utf8');

    //set regex
    var re = /cftest="(.*?)"/g;
    var newSource = source;
    var cfName = re.exec(newSource); //finds first instance of cfname tag

    while(cfName)
    {
      var newHtml = 'title="' + cfName[1] + '" style="border: 1px dashed red"';
      //replaces cftag tag stuff with styling
      newSource = newSource.replace(/cftest="[A-Za-z0-9]*"/, newHtml);
      cfName = re.exec(newSource); //get next instance of tag
    }
    console.log(newSource);

    return newSource;
}
