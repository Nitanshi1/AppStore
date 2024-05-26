import { CommentData } from "./mycomment";

export  interface AppData {
    user_id: string;  
    id:number;         
    app_Name: string;           
    description: string;       
    releaseDate: Date;     
    version: number;         
    genre: string;            
    visibility: boolean;       
    downloadCount: number;     
    comments: CommentData[];        
    averageRating: number;
    imgpath:string; 
        
}

