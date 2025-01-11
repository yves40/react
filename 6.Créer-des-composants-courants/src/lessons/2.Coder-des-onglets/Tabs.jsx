const tabsData = [
  {
    title: "This the tab1 data",
    txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima impedit nesciunt atque rerum fugiat hic, corporis explicabo? Illum consectetur recusandae, distinctio, et necessitatibus quis officia, tempora perspiciatis nesciunt rem debitis."
  },
  {
    title: "This the tab2 data",
    txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima impedit nesciunt atque rerum fugiat hic, corporis explicabo? Illum consectetur recusandae, distinctio, et necessitatibus quis officia, tempora perspiciatis nesciunt rem debitis.",
  },
  {
    title: "This the tab3 data",
    txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima impedit nesciunt atque rerum fugiat hic, corporis explicabo? Illum consectetur recusandae, distinctio, et necessitatibus quis officia, tempora perspiciatis nesciunt rem debitis.",
  },
]

import { useState } from "react"

export default function Tabs() {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <div className="max-w-xl min-h-[250px] mx-auto rounded border border-slate-400">
      <div className="flex divide-x divide-slate-700">
        {tabsData.map( (obj, index) => (
          <button key={index} className="w-full p-4 bg-slate-200 hover:bg-slate-300"
              onClick={()=> setSelectedTab(index)}>Tab {index +1}</button>
        ))}
      </div>
      <div className="text-slate-100 p-4">
        <p>{tabsData[selectedTab].title}</p>
        <p>{tabsData[selectedTab].txt}</p>
      </div>
    </div>
  )
}
