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
      <div className="flex w-full md:justify-around justify-between items-center py-5 self-center">
        <Image
          className="w-72"
          alt="Screenshot of Find My Dog individual post view showing dog details, user comments, and map location button"
          src="/findmydog/post-w-comment.png"
          height={600}
          width={400}
        />
        <Image
          alt="Screenshot of Find My Dog comment section with text input field for users to add comments to posts"
          className="w-72"
          height={600}
          src="/findmydog/add-comment.png"
          width={400}
        />
      </div>
    </div>
  );
};

export default ViewPost;
