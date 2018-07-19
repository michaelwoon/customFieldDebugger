//remove console.log statements
module.exports = function(source, map) {
    this.callback(
        null,
        source.replace(/console\.log\(.*\);?\n/g, 'michaelwoon'),
        map
    );
};
