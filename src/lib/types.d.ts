interface User {
  name?: string;
  id: string;
  username: string;
  image?: string;
  website?: string;
  bio?: string;
  posts?: Post[];
}

interface Comment {
  id: string;
  comment: string;
  user: User;
}

const COMMENT_TYPES = {
  DEFAULT: 'default',
  DETAILED: 'detailed',
};

type CommentType = (typeof COMMENT_TYPES)[keyof typeof COMMENT_TYPES];

interface Post {
  id: string;
  createdAt: string;
  image?: string;
  images?: string[];
  video?: string;
  description: string;
  user: User;
  nofComments: number;
  nofLikes: number;
  comments: Comment[];
}
