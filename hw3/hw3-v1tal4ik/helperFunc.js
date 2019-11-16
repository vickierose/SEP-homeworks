const validateObj = (obj) => {
  const allOfMainProp = ['firstName', 'lastName', 'birthDate', 'address', 'job'];
  const allOfAddressProp = ['country', 'city', 'street', 'house', 'apartment'];
  const allOfJobProp = ['title', 'experience'];
  const info = {
    isObjHasAllProperty: true,
    isObjPropertyTypeRight: true,
    msg: '',
  };

  // Check name of main property
  // eslint-disable-next-line no-restricted-syntax
  for (const propName of allOfMainProp) {
    if (!(obj.hasOwnProperty(propName))) {
      info.isObjHasAllProperty = false;
      info.msg = `Error : Object does not have propery "${propName}"! `;
      // console.log(info);
      return info;
    }
  }

  // prop length
  if (Object.keys(obj).length !== allOfMainProp.length) {
    info.isObjHasAllProperty = false;
    info.msg = `Error : Object propery length = ${Object.keys(obj).length} and must be = ${Object.keys(allOfMainProp).length}`;
    // console.log(info);
    return info;
  }

  // Address
  if (obj.address === null || obj.address === {} || typeof (obj.address) !== 'object') {
    info.isObjPropertyTypeRight = false;
    info.msg = 'Error : Type of property "address" is invalid!';
    return info;
  }
  // eslint-disable-next-line no-restricted-syntax
  for (const propName of allOfAddressProp) {
    if (!(obj.address.hasOwnProperty(propName))) {
      info.isObjHasAllProperty = false;
      info.msg = `Error : Object does not have propery "${propName}"! `;
      // console.log(info);
      return info;
    }
  }

  if (Object.keys(obj.address).length !== allOfAddressProp.length) {
    info.isObjHasAllProperty = false;
    info.msg = `Error : Object address propery length = ${Object.keys(obj).length} and must be = ${Object.keys(allOfAddressProp).length}`;
    // console.log(info);
    return info;
  }

  // Job
  if (obj.job === null || obj.job === {} || typeof (obj.job) !== 'object') {
    info.isObjPropertyTypeRight = false;
    info.msg = 'Error : Type of property "job" is invalid!';
    return info;
  }
  // eslint-disable-next-line no-restricted-syntax
  for (const propName of allOfJobProp) {
    if (!(obj.job.hasOwnProperty(propName))) {
      info.isObjHasAllProperty = false;
      info.msg = `Error : Object job does not have propery "${propName}"!`;
      // console.log(info);
      return info;
    }
  }

  if (Object.keys(obj.job).length !== allOfJobProp.length) {
    info.isObjHasAllProperty = false;
    info.msg = `Error : Object job propery length = ${Object.keys(obj).length} and must be = ${Object.keys(allOfJobProp).length}`;
    // console.log(info);
    return info;
  }


  // Check type
  if (obj.firstName === '' || typeof (obj.firstName) !== 'string') {
    info.isObjPropertyTypeRight = false;
    info.msg = 'Error : Type of property "firstName" is invalid!';
    return info;
  }
  if (obj.birthDate === '' || typeof (obj.birthDate) !== 'string') {
    info.isObjPropertyTypeRight = false;
    info.msg = 'Error : Type of property "birthDate" is invalid!';
    return info;
  }


  return info;
};

module.exports = validateObj;
