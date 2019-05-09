import { Place } from './place';

export interface Event {
    id_event?: number;
    type?: string;
    title?: string;
    date_end?: Date;
    date_start?: Date;
    place?: Place;
    photo_url?: string;
}