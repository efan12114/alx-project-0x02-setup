// Define the structure for a single Post
export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// ... (Keep PostProps and UserProps above)

export interface PostData {
  userId: number;
  id?: number; // Optional because new posts don't have an ID yet
  title: string;
  body: string;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}

// Property-listing types (NEW)
export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}