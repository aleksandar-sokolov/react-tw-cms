import { useEffect, useState } from "react";
import { updateComponentProperties } from "./utils";
import "react-quill/dist/quill.snow.css";

import "react-quill/dist/quill.snow.css";

import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

const PropsEdit = ({
  properties,
  setPageJson,
  pageJson,
  activeId,
  setActive,
}) => {
  const [props, setProps] = useState();
  useEffect(() => {
    setProps(properties);
  }, [properties]);
  return (
    props &&
    Object.keys(props).length > 0 && (
      <div className="p-2 border rounded-md my-3">
        <p className="text-xl py-2">Properties: </p>
        {Object.keys(props).map((prop, i) =>
          props[prop].type === "rte" ? (
            <ReactQuill
              modules={{
                toolbar: [
                  ["bold", "italic", "underline"],
                  // [{ color: [] }, { background: [] }],
                  // [{ script: 'super' }, { script: 'sub' }],

                  [{ list: "ordered" }, { list: "bullet" }],
                  ["link"],
                  ["clean"],
                ],
              }}
              formats={[
                "header",
                "bold",
                "italic",
                "underline",
                "strike",
                "blockquote",
                "list",
                "bullet",
                "indent",
                "link",
                "image",
              ]}
              theme="snow"
              value={props[prop].value || ""}
              onChange={(e) => {
                setProps((old) => ({
                  ...old,
                  [prop]: {
                    type: "rte",
                    value: e,
                  },
                }));
              }}
            />
          ) : (
            <fieldset key={i} className="flex flex-col my-3">
              <label className="font-bold">{prop}</label>
              <input
                className="h-7 border rounded-md "
                type="text"
                value={props[prop].value || ""}
                onChange={(e) => {
                  setProps((old) => ({
                    ...old,
                    [prop]: {
                      value: e.target.value,
                    },
                  }));
                }}
              />
            </fieldset>
          )
        )}

        <button
          className="bg-green-700 text-white p-2 self-center mt-3"
          onClick={() => {
            setPageJson(updateComponentProperties(activeId, props, pageJson));
            setActive(null);
          }}
        >
          Save
        </button>
      </div>
    )
  );
};

export default PropsEdit;
