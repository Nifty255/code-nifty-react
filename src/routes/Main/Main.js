import { Button, Card } from "flowbite-react";

import './Main.css';

const customTheme = {
  "color": {
    "orange": "border border-orange-300 bg-white text-orange-900 focus:ring-4 focus:ring-orange-300 enabled:hover:bg-orange-100 dark:border-orange-500 dark:bg-orange-500 dark:text-white dark:focus:ring-orange-600 dark:enabled:hover:border-orange-600 dark:enabled:hover:bg-orange-600",
  },
  "inner": {
    "base": "flex items-stretch justify-around transition-all duration-200 text-black"
  }
};

function Main() {
  return (
    <>
      <div className="bgimage bgmain fixed bg-fixed"></div>
      <div className="flex lg:h-full lg:align-middle lg:items-center dark:bg-transparent">
        <div className="align-middle md:flex flex-row grow justify-between">
          <Card className="m-2 sm:m-4 md:m-8 basis-full md:basis-1/2 dark:bg-neutral-900/75 dark:border-transparent">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">I'm Nifty255</h1>
            <div>
              <img alt="Nifty255" className="w-0 h-0 m-0 lg:w-16 lg:h-16 lg:mr-2 lg:mb-2 float-start rounded-full" src="https://i.imgur.com/UW15CZz.jpg" />
              <p className="mb-2">I'm a web, software, and mod developer, gamer, and general VR and technology enthusiast.</p>
              <p className="mb-8">In the web world, my strengths are in backend technologies. Go, Ruby on Rails, Node.js, and Typescript are mainstays, each of which I have multiple years of experience. I'm also constantly learning more and more about frontend technologies, such as Angular and Vue.js. Additionally, I often do hobby work with the Unity engine, miscellaneous languages such as ASM68k, 3D modelling, and retro console hardware.</p>
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Defining traits:</h3>
              <ul>
                <li className="mb-2"><strong>Adaptable</strong>&nbsp;- I work where I'm needed, with whatever language or framework is needed. I'm also very quick to pick up new information and change directions.</li>
                <li className="mb-2"><strong>Team Player</strong>&nbsp;- Communication and team cohesion are paramount for successful projects. I work with my team, providing context rather than command, to ensure our best work is done.</li>
                <li className="mb-2"><strong>Clean, Consistent Code</strong>&nbsp;- Whether picking up or creating a new standard, I stick to it and keep it commented. Look forward to easy-to-understand, well structured code (with <i>Panache</i>).</li>
              </ul>
            </div>
          </Card>
          <Card className="m-2 sm:m-4 md:m-8 basis-full md:basis-1/2 dark:bg-neutral-900/75 dark:border-transparent">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Socials</h1>
            <div className="flex flex-wrap">
              <div className="text-center basis-1/2 md:w-1/3 lg:basis-1/3 p-2">
                <img alt="GMail" className="w-16 inline rounded-full" src="/img/logo/gmail.jpg" />
                <br /><br />
                <Button fullSized color="orange" theme={customTheme} className="inline text-center xl:w-3/4 tx:w-1/4 text-black">nifty@codenifty.io</Button>
              </div>
              <div className="text-center basis-1/2 md:w-1/3 lg:basis-1/3 p-2">
                <img alt="GitHub" className="w-16 inline rounded-full" src="/img/logo/github.png" />
                <br /><br />
                <a href="https://github.com/Nifty255" target="_blank" rel="noreferrer"><Button fullSized color="orange" theme={customTheme} className="inline text-center xl:w-3/4 tx:w-1/4 text-black">Nifty255</Button></a>
              </div>
              <div className="text-center basis-1/2 md:w-1/3 lg:basis-1/3 p-2">
                <img alt="Twitter" className="w-16 inline rounded-full" src="/img/logo/twitter.jpg" />
                <br /><br />
                <a href="https://twitter.com/Nifty255" target="_blank" rel="noreferrer"><Button fullSized color="orange" theme={customTheme} className="inline text-center xl:w-3/4 tx:w-1/4 text-black">@Nifty255</Button></a>
              </div>
              <div className="text-center basis-1/2 md:w-1/3 lg:basis-1/3 p-2">
                <img alt="Discord" className="w-16 inline rounded-full" src="/img/logo/discord.jpg" />
                <br /><br />
                <Button fullSized color="orange" theme={customTheme} className="inline text-center xl:w-3/4 tx:w-1/4 text-black">nifty255</Button>
              </div>
              <div className="text-center basis-1/2 md:w-1/3 lg:basis-1/3 p-2">
                <img alt="Twitch" className="w-16 inline rounded-full" src="/img/logo/twitch.jpg" />
                <br /><br />
                <a href="https://www.twitch.tv/nifty255" target="_blank" rel="noreferrer"><Button fullSized color="orange" theme={customTheme} className="inline text-center xl:w-3/4 tx:w-1/4 text-black">Nifty255</Button></a>
              </div>
              <div alt="YouTube" className="text-center basis-1/2 md:w-1/3 lg:basis-1/3 p-2">
                <img alt="YouTube" className="w-16 inline rounded-full" src="/img/logo/youtube.jpg" />
                <br /><br />
                <a href="https://www.youtube.com/channel/UC_opIDj5uPURXt-NKoIi7Cw" target="_blank" rel="noreferrer"><Button fullSized color="orange" theme={customTheme} className="inline text-center xl:w-3/4 tx:w-1/4 text-black">Nifty255</Button></a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Main;
