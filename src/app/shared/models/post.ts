import { Comment } from './comment';

export interface Post {
    id?: number;
    title?: string;
    content?: string;
    date_created?: Date;
    date_edited?: Date;
    id_user?: number;
    id_event?: number;
    comments?: Comment[];
}