import Image from "next/image";

const ViewPost = () => {
  return (
    <div className="flex flex-col">
      <article className="flex flex-col gap-2 md:w-2/3">
        <h1 className="pb-4">View Post</h1>
        <p>
          Users can sign up, create posts and add comments to existing posts, as
          well as delete their own content and accounts.
        </p>

        {/* <p className="">
          Companies needed a way to make their cards accessible to their
          customers.
        </p>
        <p>
          This page makes it easy for customers to download their cards, whether
          they’re at the café or not.
        </p> */}
      </article>
      <div className="flex w-2/3 justify-between items-center py-5 self-center">
        <Image
          alt="Google maps"
          className="w-72"
          height={600}
          src="/findmydog/google-maps.png"
          width={400}
        />
        <Image
          className="w-72"
          alt="Single post view"
          src="/findmydog/single-post.png"
          height={600}
          width={400}
        />
      </div>
      <p className="md:w-1/2 w-2/3 pt-5"></p>
    </div>
  );
};

export default ViewPost;
