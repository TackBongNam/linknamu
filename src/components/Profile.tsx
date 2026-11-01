import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  image: string;
};

export default function Profile({ name, bio, image }: ProfileProps) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={image}
        alt={`${name} 프로필 사진`}
        width={176}
        height={176}
        priority
        className="size-44 rounded-full object-cover"
      />
      <h1 className="mt-5 text-2xl font-bold">{name}</h1>
      <p className="mt-2 text-base text-foreground/70">{bio}</p>
    </header>
  );
}
