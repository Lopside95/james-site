import Image from "next/image";

const ViewPost = () => {
  return (
    <div className="flex flex-col">
      <article className="flex flex-col gap-2 md:w-2/3">
        <h1 className="pb-4">Interacting with posts</h1>
        <p>
          Here users can add comments and, by clicking the map icon, link out to
          the location pinned by the author.
        </p>
      </article>
      <div className="flex  w-full justify-between items-center py-5 self-center">
        <Image
          className="w-72"
          alt="Single post view"
          src="/findmydog/single-post.png"
          height={600}
          width={400}
        />
        <Image
          alt="Google maps"
          className="w-72"
          height={600}
          src="/findmydog/google-maps.png"
          width={400}
        />
      </div>
    </div>
  );
};

export default ViewPost;
