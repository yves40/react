import "./Container.css"

export default function Container() {
  
  const bgColor = "#333";

  return (
    <div>
      <h1 style={{color: "crimson", backgroundColor: bgColor}}>Utiliser du CSS</h1>
      <p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aperiam quis enim voluptas deleniti, quasi ipsam consequuntur sequi veritatis sit, nostrum fuga eligendi vel aliquam nobis fugiat magnam optio vero.</p>
    </div>
  )
}
