import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LuLibrary, LuHeart, LuGlobe2 } from "react-icons/lu";
import apiClient , {apiplaylist}  from "../../Axiosspotify";

let _token = localStorage.getItem("token");

function Home() {
  const [image, setimage] = useState(
    "https://th.bing.com/th/id/R.ff19e3ecd689b2fb61c6a4d524f5f4d5?rik=01jYkHwDNzgtaQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f_I6dhg-xn0JA%2fTKn9PSj6MkI%2fAAAAAAAAAJA%2f0NTaF0ykdRU%2fs1600%2fMy%2bfavourite%2balbum%2bcover.jpg&ehk=PrYanHCRKzHgPcIcv8ff0xi%2f36Zb28OrVK4x%2f6RIvh0%3d&risl=&pid=ImgRaw&r=0"
  );

  const [name, setname] = useState("user");



  useEffect(() => {
    apiClient.get("me").then((response) => {
      let data = response.data;

      setimage(data.images[0].url);
      setname(data.display_name);
      console.log(data.display_name);
    });

apiplaylist.get("playlist").then((response)=>{
  console.log(response);
})


  }, []);

  return (
    <div>
      {/* base div */}
      <div className="flex  justify-evenly mt-8 ">
        {/* left space */}
        <div className="bg-slate-300 max-w-[350px] rounded-lg">
          <div className="flex p-5 gap-4 mt-8 m-auto bg-slate-900 w-[250px] justify-around  min-h-[80px] rounded-full ">
            <img src={image} className="h-[70px] rounded-lg" alt="" />
            <p className=" text-amber-700">{name} </p>
          </div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, nemo.
          Pariatur eaque fuga omnis distinctio quia nostrum error deleniti
          tempore quis voluptas vitae, harum voluptatibus, velit beatae culpa
          dicta minus?
        </div>

        {/* right space */}
        <div className="bg-slate-700 w-[70%] min-h-[85vh] rounded-lg flex flex-col p-9">
          <div className="flex justify-center items-center mb-6">
            <img
              src={image}
              className="max-h-[300px] rounded-lg shadow-[0_35px_60px_-15px_rgba(450,0,0.3)]"
              alt=""
            />
          </div>

          <p className="text-center">Now playing</p>

          <div className="flex  gap-4 mt-19 m-auto bg-slate-300 min-w-[600px] justify-around  min-h-[80px] rounded-full ">
            <motion.button
              whileHover={{ scale: 1.6 }}
              whileTap={{
                scale: 0.8,
                rotate: -40,
                borderRadius: "100%",
              }}
            >
              <LuLibrary />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.6 }}
              whileTap={{
                scale: 0.8,
                rotate: -40,
                borderRadius: "100%",
              }}
            >
              <LuHeart />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.6 }}
              whileTap={{
                scale: 0.8,
                rotate: -40,
                borderRadius: "100%",
              }}
            >
              <LuGlobe2 />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
