export default function NavBar() {
  return (
    <div className="box-shadow h-20 flex items-center justify-between px-4">
      <div>
      <h1 className="text-[#2D2E32] text-2xl font-semibold">Dan Beaumont</h1>
      </div>
      <div className="flex gap-x-8">
        <h1 className="text-1xl font-semibold cursor-pointer hover:text-[#147efb]">Home</h1>
        <h1 className="text-1xl font-semibold cursor-pointer hover:text-[#147efb]">About</h1>
        <h1 className="text-1xl font-semibold cursor-pointer hover:text-[#147efb]">Projects</h1>
        <h1 className="text-1xl font-semibold cursor-pointer hover:text-[#147efb]">Contact</h1>
      </div>
    </div>
  )
}
