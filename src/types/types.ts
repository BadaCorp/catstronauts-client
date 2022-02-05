export interface Author {
  id: string;
  name: string;
  photo: string;
}

export interface Module {
  id: string;
  title: string;
  length: number;
  content?: any;
  videoUrl?: any;
}

export interface Track {
  id: string;
  title: string;
  author: Author;
  thumbnail: string;
  length: number;
  modulesCount: number;
  description: string;
  numberOfViews: number;
  modules: Module[];
}
