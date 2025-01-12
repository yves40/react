import { Link, Outlet } from "react-router-dom"

export default function Analytics() {
  return (

    <div className="bg-slate-400">
        <div className="max-w-4xl mx-auto text-center pb-20">
            <p className="text-2xl pt-10 mb-6">Who are we ? What are we doing ?</p>
            <p className="m-4 p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, amet!
            Ex aspernatur consequuntur non, ab odio iste? Placeat, eaque tempore?
            Tenetur quasi consequatur eum quaerat numquam iure vitae sequi laudantium.
            Tempore impedit, porro temporibus quis ducimus delectus pariatur veritatis numquam?
            Ipsum laboriosam iure tempore quam vitae! Earum rerum placeat sequi.
            Asperiores sapiente doloribus inventore ea nam iste cumque error a.
            Corrupti, enim magnam! Asperiores ea provident iusto quos earum totam!
            Animi illo sapiente tenetur non voluptas debitis eos in facilis?
            Deleniti, blanditiis. Fugit suscipit dolore, quibusdam quas amet praesentium itaque?
            Accusantium magnam cum accusamus a possimus officiis quasi, tenetur sunt!</p>
            <nav>
                <Link to="/analytics/development"
                    className="mx-2 font-semibold text-lg">Development
                </Link>
                <Link to="/analytics/cybersecurity"
                    className="mx-2 font-semibold text-lg">Cyber security
                </Link>
                <Link to="/analytics/uix"
                    className="mx-2 font-semibold text-lg">UIX
                </Link>
            </nav>
            <Outlet></Outlet>
        </div>
    </div>

  )
}
