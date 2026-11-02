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
        width={128}
        height={128}
        priority
        className="size-32 rounded-full object-cover ring-4 ring-white/80 shadow-[0_18px_36px_-14px_rgba(140,84,48,0.45),0_4px_10px_-4px_rgba(140,84,48,0.25)]"
      />
      <h1 className="mt-7 text-2xl font-bold tracking-tight">{name}</h1>
      <p className="mt-2.5 text-[15px] leading-relaxed text-balance break-keep text-foreground/65">
        {bio}
      </p>
    </header>
  );
}
