import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CreateNoteModel } from '../../app/Model/createnote.model'
import { Observable } from 'rxjs';
import { Label } from '../Model/label.model';
import { TotalNote } from '../Model/totalnote.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'token': localStorage.getItem('Authorization')
  }
  )
};

const httpOptions2 = {
  headers: new HttpHeaders({
    'token': localStorage.getItem('Authorization')
  })
};

@Injectable({
  providedIn: 'root'
})
export class NotecrudService {

  constructor(private http: HttpClient) { }

  private noteUrl = 'http://localhost:8888/api/note';
  private labelUrl='http://localhost:8888/api/label';
  private collaboratorUrl='http://localhost:8888/api/collaborator';
  //For sending data to the server
  public createNote(newNote: CreateNoteModel): any {
    console.log(newNote);
    console.log("Token=" + localStorage.getItem('Authorization'));
    return this.http.post<CreateNoteModel>(this.noteUrl, newNote, httpOptions);
  }

  public getNotes(isTrash,isArchive): Observable<TotalNote[]> {
  
    return this.http.get<TotalNote[]>(this.noteUrl+'?isTrash='+isTrash+'&isArchive='+isArchive ,httpOptions2);
  }


  public deleteNote(newNote: CreateNoteModel): any {
    console.log(newNote);
    console.log(localStorage.getItem('Authorization'));
    return this.http.post(this.noteUrl + '/deletenote', newNote, httpOptions);
  }

  public updateNote(updateNode: CreateNoteModel): any {
    return this.http.post(this.noteUrl + '/updatenote', updateNode, httpOptions);
  }

  public createLabel(newLabel:Label){

    return this.http.post(this.labelUrl,newLabel,httpOptions);
  }

  public getAllLabels():Observable<Label[]>
  {
    return this.http.get<Label[]>(this.labelUrl,httpOptions2);
}

public updateLabel(updateLabel:Label):Observable<Label[]>{
  return this.http.put<Label[]>(this.labelUrl,updateLabel,httpOptions);
}

public addLabelToNote(noteid:Number,labelId:Number):any{
  
  return this.http.post(this.labelUrl+'/addlabeltonote?noteid='+noteid+'&labelId='+labelId,httpOptions2);
}

public removelabelfromnote(noteid:Number,labelId:Number):any{
  return this.http.post(this.labelUrl+'/removelabelfromnote?noteid='+noteid+'&labelId='+labelId,httpOptions2);
}

public deleteLabel(deleteLabel:Label):any{
  return this.http.post(this.labelUrl+'/deletelabel',deleteLabel,httpOptions);
}

public addCollaborator(sharedUserId,sharedNoteId):any{
  return this.http.post(this.collaboratorUrl + "?sharedUserID=" + sharedUserId + "&sharedNoteId=" + sharedNoteId,null,httpOptions2);
}

public deleteCollaborator(sharedUserId,sharedNoteId):any{
  return this.http.delete(this.collaboratorUrl + "?sharedUserID=" + sharedUserId + "&sharedNoteId=" + sharedNoteId,httpOptions2);
}
}
