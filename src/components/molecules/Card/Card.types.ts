export interface ICardProps {
  carName: string;
  carImageSrc: string;
  year: string;
  isCustomsCleared: boolean;
  customsPrice?: string;
  price: number;
  carRunKm: number;
  engineVolume: number;
  rightWheel: boolean;
  views: number;
  orderDate: string;
}
