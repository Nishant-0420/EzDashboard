import React from 'react';


interface AvatarData {
  initials: string;
  bgColor: string;
  textColor: string;
}



interface AvatarProps {
  avatars: AvatarData[];
}


const Avatar: React.FC<AvatarProps> = ({ avatars }) => {
  return (
    <>
      {avatars.map((avatar, index) => (
        <span key={index} className={`inline-flex items-center justify-center size-[46px] text-sm font-semibold leading-none rounded-full bg-${avatar.bgColor} text-${avatar.textColor}`}>
          {avatar.initials}
        </span>
      ))}
    </>
  );
};

export default Avatar;