import { useEffect, useState } from "react";
import Controls from "./Controls";
import { renderer } from "./renderer";
import { getComponentById } from "./utils";

const CMS = ({ dictionary, pageData }) => {
  const [pageJson, setPageJson] = useState(pageData);
  const [activeId, setActiveId] = useState(null);
  const [compData, setCompData] = useState(null);

  useEffect(() => {
    setCompData(getComponentById(activeId, pageJson));
  }, [activeId]);

  if (!dictionary || !pageJson) return null;

  return (
    <div>
      {renderer({
        pageJson: pageJson.pageData,
        dictionary,
        isEdit: true,
        setActive: setActiveId,
        active: activeId,
      })}

      <Controls
        active={activeId}
        setActiveId={setActiveId}
        compData={compData}
        dictionary={dictionary}
        setPageJson={setPageJson}
        activeId={activeId}
        pageJson={pageJson}
      />
    </div>
  );
};

export default CMS;
