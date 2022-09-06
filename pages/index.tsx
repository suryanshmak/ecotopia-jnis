import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <video
        src="https://cdn.glitch.me/f4ab509c-c620-4191-a564-9180fafa0867%2FEcotopia%20old%20trailer.mp4?v=1636652484324"
        className="w-full h-full object-cover absolute top-0 left-0 -z-10"
        controls={false}
        autoPlay
        loop
        muted
      />
      <div className="h-screen">
        <div className="h-full flex items-center justify-center text-[#1c1c1c]">
          <div className="flex flex-col items-center gap-2 bg-[rgba(255,255,255,0.4)] p-12">
            <h1 className="text-6xl font-bold">Ecotopia JNIS</h1>
            <p className="text-2xl">Preserve to Protect</p>
            <p className="text-lg">
              An eco friendly initiative presented by the students of JNIS
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
