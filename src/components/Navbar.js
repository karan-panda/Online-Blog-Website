import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div>
      <>
      <div className="flex h-40 space-x-96 w-full bg-white pt-10">
        <div className="relative left-96 w-11/12">
        <img src="https://primarykeytech.in/content/uploads/profile_images/pkt.png" class="h-20"/>
        </div>
        <div className="w-2/12">
          <button className="font-Poppins h-20 w-36 border-4 border-purple-800 rounded-2xl">Sign up/Login</button>
        </div>
      </div>
      <div className="bg-white">
        <ul className="flex font-Poppins text-md font-medium mx-20">
        <Link href="/Components/Main"><li className="mx-15 px-5 py-5">Home</li></Link>
          <li className="px-5 py-5">Travel</li>
          <li className="px-5 py-5">Technology</li>
          <li className="px-5 py-5">Health</li>
          <li className="px-5 py-5">News</li>
          <li className="px-5 py-5">Entertainment</li>
          <li className="px-5 py-5">Sports</li>
          <li className="px-5 py-5">Spirituality</li>
          <li className="px-5 py-5">Business</li>
          <li className="px-5 py-5">Environment</li>
          <li className="px-5 py-5 font-extrabold">...</li>
          <li className="px-5 py-5"></li>

        </ul>
        <hr className="h-1 bg-black"/>
        </div>
        <h3 className="mx-20 mt-6">HOME / Read Blogs</h3>
        <hr className="h-1 bg-slate-500"/>
      </>      
    </div>
  )
};
