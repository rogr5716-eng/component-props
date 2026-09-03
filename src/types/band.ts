export interface Member {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
}

export interface Band {
  id: number;
  name: string;
  genre: string;
  imageUrl: string;
  members: Member[];
}