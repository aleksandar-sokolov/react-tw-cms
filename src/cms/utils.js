const findNode = (id, component) => {
  let i, currentChild, result;

  if (id === component.id) {
    return component;
  } else if (component.children.length < 1) return;
  else {
    for (i = 0; i < component.children.length; i++) {
      currentChild = component.children[i];
      result = findNode(id, currentChild);
      if (!!result) {
        return result;
      }
    }
  }
};

const findParentNode = (childId, component) => {
  if (component.id === childId) return component;

  const children = component.children;
  if (Array.isArray(children) && children.length > 0) {
    if (children.some((comp) => comp.id === childId)) {
      return component;
    } else {
      for (let i = 0; i < children.length; i++) {
        let result = findParentNode(childId, children[i]);
        if (!!result) {
          return result;
        }
      }
    }
  }
  return false;
};

export const getComponentById = (id, json) => {
  return findNode(id, json.pageData);
};

export const getParentComponent = (childId, json) => {
  return findParentNode(childId, json.pageData);
};

export const updateComponentProperties = (id, properties, json) => {
  const newJson = JSON.parse(JSON.stringify(json));
  const comp = getComponentById(id, newJson);
  comp.properties = properties;
  return newJson;
};

export const addComponentChildren = (id, children, json) => {
  const newJson = JSON.parse(JSON.stringify(json));
  const comp = getComponentById(id, newJson);
  comp.children.push(children);
  return newJson;
};

export const addComponentAroundSelected = (
  childId,
  children,
  json,
  isAfter
) => {
  const newJson = JSON.parse(JSON.stringify(json));
  const parent = getParentComponent(childId, newJson);
  const parentOldChildren = parent.children;
  let childIndex = parentOldChildren.findIndex((comp) => comp.id === childId);
  if (isAfter) {
    childIndex++;
  }
  parentOldChildren.splice(childIndex, 0, children);
  return newJson;
};

export const deleteComponent = (id, json) => {
  // const newJson = JSON.parse(JSON.stringify(json));
  const parent = getParentComponent(id, json);
  parent.components
    ? (parent.components = parent.components.filter((comp) => comp.id !== id))
    : (parent.children = parent.children.filter((comp) => comp.id !== id));
  // return newJson;
};

export const moveComponent = (id, json, isBack) => {
  const newJson = JSON.parse(JSON.stringify(json));
  const parent = getParentComponent(id, newJson);
  const compIndex = parent.children.findIndex((el) => el.id === id);
  if (compIndex === parent.children.length - 1 && !isBack) {
    return newJson;
  }
  if (compIndex === 0 && isBack) {
    return newJson;
  }
  const comp = parent.children[compIndex];

  parent.children.splice(compIndex, 1);
  parent.children.splice(isBack ? compIndex - 1 : compIndex + 1, 0, comp);

  return newJson;
};
