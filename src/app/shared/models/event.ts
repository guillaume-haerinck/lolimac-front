import { Place } from './place';
import { Post } from './post';

export interface Event {
    id_event?: number;
    title?: string;
    description?: string;
    date_start?: Date;
    date_end?: Date;
    photo_url?: string;
    participation: number;
    place?: Place;
    posts?: Post[];
}