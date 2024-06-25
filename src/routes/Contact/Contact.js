import { Button, Card } from "flowbite-react";

import './Contact.css';

const customTheme = {
  "color": {
    "orange": "border border-orange-300 bg-white text-orange-900 focus:ring-4 focus:ring-orange-300 enabled:hover:bg-orange-100 dark:border-orange-500 dark:bg-orange-500 dark:text-white dark:focus:ring-orange-600 dark:enabled:hover:border-orange-600 dark:enabled:hover:bg-orange-600",
  },
  "inner": {
    "base": "flex items-stretch justify-around transition-all duration-200 text-black"
  }
};

function Contact() {
  return (
    <>
      <div className="bgimage bgcontact fixed bg-fixed"></div>
      <div className="flex lg:h-full lg:align-middle lg:items-center dark:bg-transparent">
        <div className="align-middle md:flex flex-row grow justify-between">
          <Card className="m-2 sm:m-4 md:m-8 basis-full md:basis-1/2 dark:bg-neutral-900/75 dark:border-transparent">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">For more information,</h1>
            <div>
              <p>Please feel free to contact me through any one of my socials on the right, or just stare at the curry in the background for the wisdom within...</p>
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
              <div className="text-center basis-1/2 md:w-1/3 lg:basis-1/3 p-2">
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

export default Contact;
