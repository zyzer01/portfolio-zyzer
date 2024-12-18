import { Author } from "@/lib/types/hashnode";
import React from "react";

type AuthorProfilesProps = {
  author: Author;
  coAuthors?: Author[];
};

export const AuthorNames: React.FC<AuthorProfilesProps> = ({
  author,
  coAuthors = [],
}) => {
  const allAuthors = [author, ...(coAuthors || [])].filter(Boolean);
  const authorNames = allAuthors.map((person) => person.name).join(", ");

  return <span className="text-sm font-bold text-gray-400">{authorNames}</span>;
};

const AuthorProfiles: React.FC<AuthorProfilesProps> = ({
  author,
  coAuthors = [],
}) => {
  const allAuthors = [author, ...coAuthors].filter(Boolean);

  return (
    <div className="flex items-start space-x-4">
      <div className="flex -space-x-4 rtl:space-x-reverse">
        {allAuthors.map((person, index) => (
          <img
            key={index}
            className="w-10 h-10 rounded-full"
            src={person.profilePicture}
            alt={person.name}
            title={person.name}
          />
        ))}
      </div>
    </div>
  );
};

export default AuthorProfiles;
