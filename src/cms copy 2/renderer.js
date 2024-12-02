export const renderer = ({
  pageJson,
  dictionary,
  setActive,
  active,
  isEdit,
}) => {
  const { id, name, properties, children } = pageJson;
  const props = {}; //TODO: add function for properties

  Object.keys(properties || {}).forEach((prop) => {
    if (properties[prop].type === "rte") {
      return (props[prop] = (
        <div dangerouslySetInnerHTML={{ __html: properties[prop].value }}></div>
      ));
    }
    return (props[prop] = properties[prop].value);
  });

  const Component = dictionary?.[name]?.component;
  if (!Component) return null;

  return (
    <Component
      cms={
        isEdit
          ? {
              style:
                active === id
                  ? { border: "3px dashed red" }
                  : { minHeight: "30px" },
              onContextMenu: (e) => {
                e.stopPropagation();
                e.preventDefault();
                setActive(id);
              },
              key: id,
            }
          : null
      }
      {...props}
    >
      {children
        ? children.map((comp) =>
            renderer({ pageJson: comp, dictionary, setActive, active, isEdit })
          )
        : null}
    </Component>
  );
};
