import React from "react";
import Head from "next/head";
import TelegramDemo from "@/components/work/notifier/TelegramDemo";
import PipelineDiagram from "@/components/work/notifier/PipelineDiagram";

const AxtraBot = () => {
  return (
    <>
      <Head>
        <title>Axtra Bot</title>
        <meta
          name="description"
          content="Placeholder description for the Axtra Bot project."
          lang="en"
        />
      </Head>

      <div className=" align-middle flex flex-col min-h-screen">
        <section className=" pt-8 flex-col flex gap-5">
          <h1 className="">Axtra Bot</h1>
          <h2 className="pt-1">A Telegram bot for peace of mind</h2>
          <article className="flex max-md:flex-col items-center">
            <div className="flex flex-col pr-8 max-md:mb-5">
              <h3>
                I was working on an on-call basis and sometimes bookings would
                roll in day-of.
              </h3>
              <br />
              <h3>
                The problem was: be inundated with notifications of every single
                booking or check my calendar far too often.
              </h3>
              <br />
              <h3>
                I decided to connect to the Google Calendar API and make a bot
                allowing me, via Telegram, to set specific dates and receive
                notifications of bookings only for those days.{" "}
              </h3>
            </div>
            <TelegramDemo />
            <br />
          </article>
          <PipelineDiagram />
        </section>
      </div>
    </>
  );
};

export default AxtraBot;
