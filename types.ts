
export type AIActionType = 'social' | 'proposal' | 'bio' | 'flyer';

export interface AIAction {
  id: AIActionType;
  title: string;
  icon: string;
  description: string;
}

export interface GymInfo {
  name: string;
  rating: number;
  reviews: number;
  status: string;
  closingTime: string;
  address: string;
  phone: string;
  whatsapp: string;
  popularTime: string;
}

export const G4_INFO: GymInfo = {
  name: "G4 Fitness Center",
  rating: 4.0,
  reviews: 4,
  status: "Open",
  closingTime: "8:30 pm",
  address: "House 19, Sam Olukayode Street, Akure 340212, Ondo State",
  phone: "0906 824 1494",
  whatsapp: "0906 824 1494",
  popularTime: "3 pm"
};
