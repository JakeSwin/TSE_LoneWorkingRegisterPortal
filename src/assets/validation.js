var dave = function(value) {
  var schema = {
    id(v) {
      if (typeof v == 'number') {
        return true;
      } else {
        return false;
      }
    },
    value(v) {
      if (typeof v == 'number') {
        return true;
      } else {
        return false;
      }
    },
    message(v) {
      return /([a-zA-Z ]{0,15})/g.test(v)
    }
  }

  errors = Object
    .keys(schema)
    .filter(key => !schema[key](value[key]))
    .map(key => new Error(`${key} is invalid.`))

  if (errors.length > 0) {
    for (const { message } of errors) {
      console.log(message);
    }
    return false;
  } else {
    return true;
  }
}