interface IPropertieAction {
  type: string;
  payload: IPropertie[];
}

interface IPropertie {
  id: number;
  street: string;
  number: number;
  city: string;
  province: string;
  image: string;
  country: string;
  status: statusPropertie;
  type: string;
  description: string;
  contact_mail: string;
  contact_phone: string;
  condition: string;
  room: number;
  bath: number;
  size: number;
  price: number;
  pet: boolean;
  garden: boolean;
  air_conditioning: boolean;
  swimming_pool: boolean;
  terrace: boolean;
  publication_date: Date;
}

type statusPropertie = "available" | "sold";

type PropertieState = IPropertie[] | [];

type PriceRange = [number, number | null];

type MoreFilters = {
  pet: boolean;
  garden: boolean;
  air_conditioning: boolean;
  swimming_pool: boolean;
  terrace: boolean;
};

interface IFilterValues {
  type: string;
  condition: string;
  room: number;
  bath: number;
  priceRange: PriceRange;
  more: MoreFilters;
}
