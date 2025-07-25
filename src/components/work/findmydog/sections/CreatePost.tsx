import Image from "next/image";

const CreatePost = () => {
  return (
    <div className="flex flex-col">
      <article className="flex flex-col gap-2 md:w-2/3">
        <h1 className="pb-4">Creating posts</h1>
        <p>
          MapboxGL was used to implement the map feature, which allows users to
          search for locations as well as drop pins and markers.
        </p>
      </article>
      <div className="flex w-full md:justify-around justify-between items-center py-5 self-center">
        <Image
          className="w-72"
          alt="Single post view"
          src="/findmydog/create-1.png"
          height={600}
          width={400}
        />
        <Image
          alt="Google maps"
          className="w-72"
          height={600}
          src="/findmydog/map.png"
          width={400}
        />
      </div>
    </div>
  );
};

export default CreatePost;
