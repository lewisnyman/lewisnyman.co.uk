module.exports = {
  options: {
    logToFile: true,
    filter: function(content) { // `function` or `regular expressions` to take a link. default is markdown.
      var expressions = [
        /\[[^\]]*\]\((http[s]?:\/\/[^\) ]+)/g,  //[...](<url>)
        /\[[^\]]*\]\s*:\s*(http[s]?:\/\/.*)/g,  //[...]: <url>
      ];
      var result = [];
      for (var i = expressions.length - 1; i >= 0; i--) {
        var expression = expressions[i];
        var match = expression.exec(content);
        while(match != null) {
          result.push(match[1]);
          match = expression.exec(content);
        }
      }
      return result; // Return array of link.
    },
  },
  posts: {
    src: [ 'app/_posts/*.md' ], // glob pattern. files path that include links to checking.
  },
};
