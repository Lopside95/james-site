import Image from "next/image";

const CardPage = () => {
  return (
    <div className="flex flex-col">
      <article className="flex flex-col gap-2 md:w-2/3">
        <h1 className="pb-4">The Card Page</h1>
        <p className="">
          Companies needed a way to make their cards accessible to their
          customers.
        </p>
        <p>
          This page makes it easy for customers to download their cards, whether
          they’re at the café or not.
        </p>
      </article>
      <div className="flex w-2/3 justify-between items-center py-5 self-center">
        <Image
          alt="Download preview"
          className="w-[15rem] h-[26.5rem]"
          height={800}
          src="/cardPage.png"
          width={800}
        />
        <Image
          alt="Download preview"
          className="w-[17.4rem] "
          height={800}
          src="/regulars/cardPageDD.png"
          width={800}
        />
      </div>
      <p className="md:w-1/2 w-2/3 pt-5">
        After hitting ‘download’, customers are redirected to their apple or
        google wallet and can save the card to their phone.
      </p>
    </div>
  );
};

export default CardPage;
