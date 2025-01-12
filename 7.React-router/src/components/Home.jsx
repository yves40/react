import { useLocation } from "react-router-dom";

export default function Home() {

    const params = useLocation()

  return (
    <div>
        <h1 className='text-4xl font-semibold text-center pt-10'>Welcome Home</h1>
        <p className="w-4/5 text-center m-auto border p-3 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat possimus dolore voluptates commodi tempora, mollitia, consectetur distinctio quae quos sunt necessitatibus. Aspernatur ipsam ut quos explicabo. Error harum corporis veniam explicabo? Inventore tempore voluptatum ullam similique cupiditate expedita nulla fugiat.
        Cumque, exercitationem? Atque amet cumque ipsum recusandae earum alias tenetur, quaerat numquam ad quo consequatur facilis vero soluta ducimus. Rerum, totam minima quod porro beatae dignissimos, atque accusantium enim sunt dolorum delectus, reprehenderit quos animi deleniti eius omnis natus quibusdam.
        Excepturi vel quo sunt nemo! Vitae, libero inventore reiciendis, esse repellat pariatur omnis natus sequi vel vero voluptatibus porro dolorum quis soluta! Officiis doloribus atque fuga nesciunt itaque deserunt totam vero molestias ducimus at explicabo, laborum neque pariatur quis error.
        Laudantium quos laboriosam odit accusamus nam consequatur repellat odio pariatur! Id, eius odio? Atque, commodi in? Minima voluptas at blanditiis sint nam, id animi nesciunt ullam! Culpa fugiat nobis delectus velit iure illo, libero dolorem tenetur repellat perferendis quas et?
        </p>
        <p className='text-sm font-semibold text-center pt-2'>{params.state.copyright}</p>  
    </div>
  )
}
