export const Header = () => {
  return (
    <header className="w-full absolute top-0 left-0 z-10 px-12 py-4 flex items-center justify-between">
      <div className="flex items-center gap-x-4">
        <img
          src="https://lh3.googleusercontent.com/--dfg_DMfrAs/YUxHscpC-KI/AAAAAAAAI4E/JN4A1Jm5Np87jPIZZQej0MwwIuX2feCewCLcBGAsYHQ/eco.png"
          alt=""
          className="w-12 h-12"
        />
        <p className="text-lg">Ecotopia</p>
      </div>
      <div className="flex items-center gap-x-4">
        <p>Home</p>
        <p>About</p>
      </div>
    </header>
  )
}
