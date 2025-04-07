import Image from "next/image";

const CreatePost = () => {
  return (
    <article className="flex gap-10 ">
      <Image
        alt="CreatePost"
        className="max-md:py-8 w-72"
        height={600}
        src="/findmydog/create-post.png"
        width={600}
      />
      <div className="flex flex-col md:w-2/3 gap-4 ">
        <h1>Creating a post</h1>
        <p>
          MapboxGL was used to implement the map feature, which allows users to
          search for locations as well as drop pins and markers.
        </p>
      </div>
    </article>
  );
};

export default CreatePost;
