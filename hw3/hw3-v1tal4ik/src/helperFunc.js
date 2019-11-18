const validateObj = (obj) => {
  const allOfMainProp = ['firstName', 'lastName', 'birthDate', 'address', 'job'];
  const allOfAddressProp = ['country', 'city', 'street', 'house', 'apartment'];
  const allOfJobProp = ['title', 'experience'];
  const info = {
    isObjHasAllProperty: true,
    isObjPropertyTypeRight: true,
    msg: '',
  };

  if (typeof (obj) !== 'object') {
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
  for (const propName of allOfMainProp) {
    if (!(obj.hasOwnProperty(propName))) {
      info.isObjHasAllProperty = false;
      info.msg = `Error : Object does not have propery "${propName}"! `;
      return info;
    }
  }

  // prop length
  if (Object.keys(obj).length !== allOfMainProp.length) {
    info.isObjHasAllProperty = false;
    info.msg = `Error : Object propery length = ${Object.keys(obj).length} and must be = ${Object.keys(allOfMainProp).length}`;
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
      return info;
    }
  }

  if (Object.keys(obj.address).length !== allOfAddressProp.length) {
    info.isObjHasAllProperty = false;
    info.msg = `Error : Object address propery length = ${Object.keys(obj).length} and must be = ${Object.keys(allOfAddressProp).length}`;
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
      return info;
    }
  }

  if (Object.keys(obj.job).length !== allOfJobProp.length) {
    info.isObjHasAllProperty = false;
    info.msg = `Error : Object job propery length = ${Object.keys(obj).length} and must be = ${Object.keys(allOfJobProp).length}`;
    return info;
  }


  // Check main property type
  if (obj.firstName === '' || typeof (obj.firstName) !== 'string') {
    info.isObjPropertyTypeRight = false;
    info.msg = 'Error : Type of property "firstName" is invalid or empty!';
    return info;
  }
  if (obj.lastName === '' || typeof (obj.lastName) !== 'string') {
    info.isObjPropertyTypeRight = false;
    info.msg = 'Error : Type of property "lastName" is invalid or empty!';
    return info;
  }
  if (obj.birthDate === '' || typeof (obj.birthDate) !== 'string') {
    info.isObjPropertyTypeRight = false;
    info.msg = 'Error : Type of property "birthDate" is invalid or empty!';
    return info;
  }

  // Check type of child property of address
  // eslint-disable-next-line no-restricted-syntax
  for (const propName in obj.address) {
    if (typeof (obj.address[propName]) !== 'string' || obj.address[propName].trim() === '') {
      info.isObjPropertyTypeRight = false;
      info.msg = `Error : Type of property "${propName}" is invalid or empty!`;
      return info;
    }
  }

  // Check type of child property of job
  if (obj.job.title === '' || typeof (obj.job.title) !== 'string') {
    info.isObjPropertyTypeRight = false;
    info.msg = 'Error : Type of property "title" is invalid or empty!';
    return info;
  }
  if (isNaN(obj.job.experience) || obj.job.experience < 0 || typeof (obj.job.experience) !== 'number') {
    info.isObjPropertyTypeRight = false;
    info.msg = 'Error : Type of property "experience" is invalid!';
    return info;
  }

  return info;
};

export default validateObj;
