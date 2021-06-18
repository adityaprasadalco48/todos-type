export interface PersonProps {
  name: string | { firstName: string; lastName: string };
  birthDat: Date;
  birthLocation: {
    latitude: string;
    longitude: string;
    height: number | undefined;
  };
}

export interface PostsData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: 'string';
    suite: 'string';
    city: 'string';
    zipcode: 'string';
    geo: {
      lat: 'string';
      lng: 'string';
    };
  };
}
