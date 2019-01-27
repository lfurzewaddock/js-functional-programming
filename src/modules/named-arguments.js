// Named Arguments

// Function with object literal as argument using destructuring assignment
// in the parameter signature in order to achieve the equivalent of named arguments.
// Note: also making use of default parameter value.

// eslint-disable-next-line import/prefer-default-export
export const createUser = ({
  name = "Anonymous",
  avatarThumbnail = "/avatars/anonymous.png",
} = {}) => ({
  name,
  avatarThumbnail,
});
