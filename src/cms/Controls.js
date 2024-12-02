import { useEffect, useState } from "react";
import PropsEdit from "./PropsEdit";
import {
  addComponentAroundSelected,
  addComponentChildren,
  deleteComponent,
  getParentComponent,
  moveComponent,
} from "./utils";

PropsEdit;

const Controls = ({
  setActiveId,
  compData,
  dictionary,
  setPageJson,
  pageJson,
  activeId,
}) => {
  const [addOption, setAddOption] = useState(null);
  useEffect(() => {
    setAddOption(null);
  }, [activeId]);

  return compData ? (
    <div className="fixed bg-gray-400/75 top-0  w-96 bottom-0 p-4 text-center animate-translateFromBottom overflow-auto">
      <div className="flex justify-between">
        <p className="text-xl">Edit {dictionary?.[compData.name].label}</p>
        {pageJson?.pageData?.id !== activeId && (
          <button
            className="block border-2 bg-red-800 text-white p-1"
            onClick={() => {
              deleteComponent(activeId, pageJson);
              setActiveId(null);
            }}
          >
            Delete
          </button>
        )}
      </div>
      {pageJson?.pageData?.id !== activeId && (
        <>
          <button
            className="block border-2 bg-sky-500 text-lg p-1 mt-5 w-full rounded-md"
            onClick={() => {
              const el = getParentComponent(activeId, pageJson);
              if (el) setActiveId(el.id);
            }}
          >
            Select parent
          </button>
          <div className="flex w-full items-center justify-around">
            <button
              className="block border-2 bg-pink-200 p-2 mt-5 rounded-full"
              onClick={() => {
                setPageJson(moveComponent(activeId, pageJson, true));
              }}
            >
              {"< Move back"}
            </button>
            <button
              className="block border-2 bg-pink-200 p-2 mt-5 rounded-full"
              onClick={() => {
                setPageJson(moveComponent(activeId, pageJson, false));
              }}
            >
              {" Move forward >"}
            </button>
          </div>
        </>
      )}
      <button
        className="block border-2 bg-red-800 text-white p-2 w-full my-3 rounded-md"
        onClick={() => {
          setActiveId(null);
        }}
      >
        Close controls
      </button>

      <p className="text-xl">Add component:</p>
      {(dictionary[compData.name]?.hasChildren
        ? ["before", "after", "inside"]
        : ["before", "after"]
      ).map((type) => (
        <button
          key={type}
          onClick={() => setAddOption(type)}
          className={`p-2 bg-gray-300 m-1 rounded-xl ${
            type === addOption ? "bg-green-600 text-white border" : " "
          } `}
        >
          {type}
        </button>
      ))}

      {addOption && (
        <div className="flex flex-wrap">
          <p className="text-sm w-full">Components</p>
          {Object.keys(dictionary).map((dictionaryComp) => (
            <button
              key={dictionaryComp}
              disabled={!addOption}
              className="border border-gray-600 rounded-md bg-yellow-200 p-1 m-1 font-bold italic"
              onClick={() => {
                const fn =
                  addOption === "inside"
                    ? addComponentChildren
                    : addComponentAroundSelected;
                setPageJson(
                  fn(
                    activeId,
                    {
                      id: Math.random() + "test",
                      name: dictionaryComp,
                      properties: {
                        ...dictionary[dictionaryComp].properties,
                      },
                      custom_component_id: null,
                      children: [],
                    },
                    pageJson,
                    addOption === "after" ? true : false
                  )
                );
                setActiveId(null);
              }}
            >
              {dictionary[dictionaryComp].label}
            </button>
          ))}
        </div>
      )}

      {
        <PropsEdit
          properties={compData.properties}
          setPageJson={setPageJson}
          activeId={activeId}
          pageJson={pageJson}
          setActive={setActiveId}
        />
      }
    </div>
  ) : (
    <div className="fixed bottom-0 right-4 bg-yellow-400 p-2 h-2 hover:h-16 duration-300 rounded-t-xl">
      <button
        className="bg-green-400 p-2 m-1 rounded-md hover:bg-green-200 duration-300"
        onClick={() => console.log(pageJson)}
      >
        Save
      </button>
      <button
        className="bg-green-400 p-2 m-1 rounded-md hover:bg-green-200 duration-300"
        onClick={() => console.log(pageJson)}
      >
        Save copy
      </button>
    </div>
  );
};

export default Controls;
