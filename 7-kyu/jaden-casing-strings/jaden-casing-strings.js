// Add toJadenCase method to String prototype
Object.defineProperty(
  String.prototype,
  'toJadenCase',
  {
    // value: the function implementation
    value: function toJadenCase() {
      // Split string into words, capitalize first letter of each, rejoin
      return this.split(' ').map((element, index) => {
        return element[0].toUpperCase() + element.slice(1);
      }).join(' ');
    }
  }
);