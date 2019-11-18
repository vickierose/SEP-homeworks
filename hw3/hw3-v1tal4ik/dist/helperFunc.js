'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var validateObj = function validateObj(obj) {
  var allOfMainProp = ['firstName', 'lastName', 'birthDate', 'address', 'job'];
  var allOfAddressProp = ['country', 'city', 'street', 'house', 'apartment'];
  var allOfJobProp = ['title', 'experience'];
  var info = {
    isObjHasAllProperty: true,
    isObjPropertyTypeRight: true,
    msg: ''
  };

  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
    console.error('Error : Wrong type of argument!');
    info.isObjPropertyTypeRight = false;
    info.msg = 'Error : Wrong type of argument!';
    return info;
  }
  if (obj === null || Object.getPrototypeOf(obj).constructor.name.toLowerCase() !== 'object') {
    console.error('Error : Wrong type of argument!');
    info.isObjPropertyTypeRight = false;
    info.msg = 'Error : Wrong type of argument!';
    return info;
  }
  if (Object.keys(obj).length === 0) {
    console.error('Error : Object is empty');
    info.isObjPropertyTypeRight = false;
    info.msg = 'Error : Object is empty!';
    return info;
  }

  // Check name of main property
  // eslint-disable-next-line no-restricted-syntax
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = allOfMainProp[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _propName = _step.value;

      if (!obj.hasOwnProperty(_propName)) {
        info.isObjHasAllProperty = false;
        info.msg = 'Error : Object does not have propery "' + _propName + '"! ';
        return info;
      }
    }

    // prop length
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  if (Object.keys(obj).length !== allOfMainProp.length) {
    info.isObjHasAllProperty = false;
    info.msg = 'Error : Object propery length = ' + Object.keys(obj).length + ' and must be = ' + Object.keys(allOfMainProp).length;
    return info;
  }

  // Address
  if (obj.address === null || obj.address === {} || _typeof(obj.address) !== 'object') {
    info.isObjPropertyTypeRight = false;
    info.msg = 'Error : Type of property "address" is invalid!';
    return info;
  }
  // eslint-disable-next-line no-restricted-syntax
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = allOfAddressProp[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _propName2 = _step2.value;

      if (!obj.address.hasOwnProperty(_propName2)) {
        info.isObjHasAllProperty = false;
        info.msg = 'Error : Object does not have propery "' + _propName2 + '"! ';
        return info;
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  if (Object.keys(obj.address).length !== allOfAddressProp.length) {
    info.isObjHasAllProperty = false;
    info.msg = 'Error : Object address propery length = ' + Object.keys(obj).length + ' and must be = ' + Object.keys(allOfAddressProp).length;
    return info;
  }

  // Job
  if (obj.job === null || obj.job === {} || _typeof(obj.job) !== 'object') {
    info.isObjPropertyTypeRight = false;
    info.msg = 'Error : Type of property "job" is invalid!';
    return info;
  }
  // eslint-disable-next-line no-restricted-syntax
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = allOfJobProp[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var _propName3 = _step3.value;

      if (!obj.job.hasOwnProperty(_propName3)) {
        info.isObjHasAllProperty = false;
        info.msg = 'Error : Object job does not have propery "' + _propName3 + '"!';
        return info;
      }
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  if (Object.keys(obj.job).length !== allOfJobProp.length) {
    info.isObjHasAllProperty = false;
    info.msg = 'Error : Object job propery length = ' + Object.keys(obj).length + ' and must be = ' + Object.keys(allOfJobProp).length;
    return info;
  }

  // Check main property type
  if (obj.firstName === '' || typeof obj.firstName !== 'string') {
    info.isObjPropertyTypeRight = false;
    info.msg = 'Error : Type of property "firstName" is invalid!';
    return info;
  }
  if (obj.lastName === '' || typeof obj.lastName !== 'string') {
    info.isObjPropertyTypeRight = false;
    info.msg = 'Error : Type of property "lastName" is invalid!';
    return info;
  }
  if (obj.birthDate === '' || typeof obj.birthDate !== 'string') {
    info.isObjPropertyTypeRight = false;
    info.msg = 'Error : Type of property "birthDate" is invalid!';
    return info;
  }

  // Check type of child property of address
  // eslint-disable-next-line no-restricted-syntax
  for (var propName in obj.address) {
    if (typeof obj.address[propName] !== 'string') {
      info.isObjPropertyTypeRight = false;
      info.msg = 'Error : Type of property "' + propName + '" is invalid!';
      return info;
    }
  }

  // Check type of child property of job
  if (obj.job.title === '' || typeof obj.job.title !== 'string') {
    info.isObjPropertyTypeRight = false;
    info.msg = 'Error : Type of property "title" is invalid!';
    return info;
  }
  if (isNaN(obj.job.experience) || obj.job.experience < 0 || typeof obj.job.experience !== 'number') {
    info.isObjPropertyTypeRight = false;
    info.msg = 'Error : Type of property "experience" is invalid!';
    return info;
  }

  return info;
};

exports.default = validateObj;