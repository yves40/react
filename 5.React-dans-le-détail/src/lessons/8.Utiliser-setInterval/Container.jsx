import { useEffect, useState } from "react"

export default function Container() {
  
  const [counter, setCounter] = useState(0)

  let timer = 0;

  useEffect( ()=> {

    const id = setInterval(() => {
        setCounter(++timer)
    }, 1000);


    return () => clearInterval(id)

  }, [])
  
  return (
    <div>
      <h1>Valeur du compteur : {counter}</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci officia minima neque eum praesentium autem qui quisquam deleniti ipsum molestiae quasi numquam, eveniet consectetur accusamus exercitationem porro repudiandae alias, vel veritatis ea quam! Quos harum aspernatur praesentium! Vitae aut modi repudiandae obcaecati! Hic aliquam a ducimus atque amet nulla voluptatum quos repudiandae et ut voluptas fugiat quod at delectus, nesciunt officiis! Voluptatem animi at enim quam iusto cupiditate harum laborum doloremque, adipisci rem dolores asperiores quibusdam quae voluptates assumenda ullam earum ex id hic quo! Eligendi consequuntur veniam repellendus sequi, voluptatem assumenda, repellat est amet reiciendis dignissimos quam optio saepe.</p>
    </div>
  )
}
