import Script from "next/script";

import CMS from "../src/cms/CMS";
import cmsDictionary from "../src/components/cms-dictionary";

export default function Home() {
  return (
    <>
      <Script src="https://cdn.tailwindcss.com"></Script>
      <CMS dictionary={cmsDictionary} pageData={testData} />
    </>
  );
}

const testData = {
  id: 1,
  pageData: {
    id: "f361eeb2-4627-477d-818d-sdgsdgsdhg9",
    name: "PageWrapper",
    properties: {
      className: {
        value: "p-6",
      },
    },
    custom_component_id: null,
    children: [
      {
        id: "0.15485187449092375test",
        name: "Grid4Cols",
        properties: {},
        custom_component_id: null,
        children: [
          {
            id: "0.25363355784892705test",
            name: "Card",
            properties: {
              className: {
                value: "!bg-green-300",
              },
              imgUrl: {
                value:
                  "https://www.a1.bg/public/file/id/30b85a666e1fd00ba2a35c2fe8eb0df9/gt3-pro-46-black.png",
              },
              title: {
                value: "Watch 3",
              },
            },
            custom_component_id: null,
            children: [],
          },
          {
            id: "0.7643739219477141test",
            name: "Card",
            properties: {
              className: {
                value: "!bg-yellow-200",
              },
              imgUrl: {
                value:
                  "https://www.a1.bg/public/file/id/f55aabbb06f7b585fd74a15bfab25dbf/gt3-pro-43-ceramic.png",
              },
              title: {
                type: "string",
                label: "title",
              },
              body: {
                type: "rte",
                value: "<p><strong>Test <em>content </em></strong></p>",
              },
            },
            custom_component_id: null,
            children: [],
          },
          {
            id: "0.4266290778488402test",
            name: "TestForm",
            properties: {
              title: {
                value: "Форма",
              },
            },
            custom_component_id: null,
            children: [],
          },
          {
            id: "0.9814107536123668test",
            name: "Card",
            properties: {
              className: {
                value: "text-white",
              },
              imgUrl: {
                value:
                  "https://www.a1.bg/public/file/id/9b2b34c8502622e7fccab2815fa9636c/PUS800-list.png",
              },
              title: {
                type: "string",
                label: "title",
              },
            },
            custom_component_id: null,
            children: [],
          },
        ],
      },
      {
        id: "2a351224-bc10-467c-a5e2-a436ba6030af",
        name: "Card",
        parentId: "c52b5ddf-1d2f-4405-9dd7-ec681f0e6f83",
        properties: {
          imgUrl: {
            value: "",
          },
          title: {
            value: "#sfhgsfhg",
          },
        },
        custom_component_id: null,
        children: [],
      },
      {
        id: "c52b5ddf-1d2f-4405-9dd7-ec681f0e6f83",
        name: "FlexBox",
        parentId: "00000000-0000-0000-0000-000000000001",
        properties: {},
        custom_component_id: null,
        children: [
          {
            id: "059dff4f-f677-4223-a871-c57332cfe36a",
            name: "PriceTag",
            parentId: "6b2c8951-4a42-4447-a55c-fe85c2af1daf",
            properties: {
              price: {
                value: 15,
              },
            },
            custom_component_id: null,
            children: [],
          },
          {
            id: "0.8603764597021615test",
            name: "Card",
            properties: {
              className: {
                value: "bg-orange-300 border-2 border-black text-gray-100",
              },
              imgUrl: {
                value:
                  "https://www.a1.bg/public/file/id/40e08c515b70897c4862ddddd532fed4/list-laptop.png",
              },
              title: {
                value: "Laptop combo",
              },
              body: {
                type: "rte",
                value:
                  '<p><strong>Rich text editor </strong></p><ul><li><a href="https://a1.bg" rel="noopener noreferrer" target="_blank">a1</a></li><li>item 2</li><li>item 3</li></ul>',
              },
            },
            custom_component_id: null,
            children: [],
          },
          {
            id: "e8fb3f2f-24eb-4606-92e4-018cd86584f6",
            name: "Card",
            parentId: "c52b5ddf-1d2f-4405-9dd7-ec681f0e6f83",
            properties: {
              imgUrl: {
                value:
                  "https://www.a1.bg/public/file/id/c190e1b01cd9f27152a38f25c3e20d7c/legion-5-list.png",
              },
              title: {
                value: "Картичка 1",
              },
            },
            custom_component_id: null,
            children: [],
          },
        ],
      },
      {
        id: "0.5373539660074702test",
        name: "Card",
        properties: {
          className: {
            value: "!bg-red-200",
          },
          imgUrl: {
            value:
              "https://www.a1.bg/sites/1/themes/main/images/layout/A1-logo-christmas.png",
          },
          title: {
            type: "string",
            label: "title",
          },
        },
        custom_component_id: null,
        children: [],
      },
    ],
  },
};
