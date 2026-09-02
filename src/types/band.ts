export interface Member {
  id: number;
  name: string;
  role: string;
}

export interface Band {
  id: number;
  name: string;
  genre: string;
  imageUrl: string;
  members: Member[];
}
