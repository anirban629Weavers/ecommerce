export const getChangedFields = (obj1: any, obj2: any) => {
  const changedFields: any = {};
  for (const key in obj2) {
    if (obj1[key] !== obj2[key]) {
      changedFields[key] = obj2[key];
    }
  }
  return changedFields;
};
