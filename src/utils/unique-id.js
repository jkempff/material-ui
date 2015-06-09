var index = 0;

module.exports = {
  generate: function() {
    return "mui-id-" + (index++);
  },
  reset: function() {
    index = 0;
  }
};
