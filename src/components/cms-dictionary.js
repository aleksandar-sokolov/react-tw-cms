const Card = {
  label: "Card",
  component: ({
    cms,
    imgUrl = "https://www.w3schools.com/images/w3lynx_200.png",
    title,
    className,
    body,
    ...rest
  }) => (
    <div
      {...cms}
      {...rest}
      className={`m-2 rounded-xl p-3 flex flex-col items-center bg-gray-500 ${
        className || ""
      }`}
    >
      {title && <h3 className="text-white text-xl"> {title}</h3>}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
        repellendus nam cupiditate quod tenetur commodi vitae at ipsum deserunt
        illum?
      </p>
      {body && body}
      {imgUrl && <img src={imgUrl} alt="img" width={200} />}
      <button className=" border rounded p-2 mt-2">See more</button>
    </div>
  ),
  hasChildren: false,
  properties: {
    className: {
      type: "string",
      label: "className",
    },
    imgUrl: {
      type: "string",
      label: "Img Url",
    },
    title: {
      type: "string",
      label: "title",
    },
    body: {
      type: "rte",
      label: "rich text test",
    },
  },
};

const FlexBox = {
  label: "FlexBox",
  component: ({ cms, children, ...rest }) => (
    <div {...cms} {...rest} className="flex">
      {children}
    </div>
  ),
  hasChildren: true,
  properties: {},
};

const Grid4Cols = {
  label: "Грид 4 колони",
  component: ({ cms, children, ...rest }) => (
    <div {...cms} {...rest} className="grid grid-cols-4">
      {children}
    </div>
  ),
  hasChildren: true,
  properties: {},
};

const TestForm = {
  label: "TestForm",
  component: ({ cms, title, className, ...rest }) => (
    <form
      {...cms}
      {...rest}
      className={className + " bg-orange-600 p-2 flex flex-col"}
    >
      <h1> {title}</h1>
      тест
      <input type="text" />
      тест
      <input type="text" />
      тест
      <input type="text" />
    </form>
  ),
  hasChildren: false,
  properties: {
    title: {
      type: "string",
      label: "form title",
    },
  },
};

const PageWrapper = {
  label: "Page Wrapper",
  component: ({ cms, className, children, ...rest }) => (
    <div className={className || ""} {...cms} {...rest}>
      {children}{" "}
    </div>
  ),
  hasChildren: true,
  properties: {
    className: {
      type: "string",
      label: "classes",
    },
  },
};

const cmsDictionary = {
  Grid4Cols,
  Card,
  FlexBox,
  TestForm,
  PageWrapper,
};

export default cmsDictionary;
