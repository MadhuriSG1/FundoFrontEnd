import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CreateNoteModel } from '../../app/Model/createnote.model'
import { Observable } from 'rxjs';
import { Label } from '../Model/label.model';
//For adding headers
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
  private labelUrl='http://localhost:8888/api/label/';
  //For sending data to the server
  public createNote(newNote: CreateNoteModel): any {
    console.log(newNote);
    console.log("Token=" + localStorage.getItem('Authorization'));
    return this.http.post<CreateNoteModel>(this.noteUrl, newNote, httpOptions);
  }

  public getNotes(): Observable<CreateNoteModel[]> {
    console.log(localStorage.getItem('Authorization'));
    return this.http.get<CreateNoteModel[]>(this.noteUrl, httpOptions2);
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

    return this.http.post(this.labelUrl+'createlabel',newLabel,httpOptions);
  }

  public getAllLabels():Observable<Label[]>
  {
    return this.http.get<Label[]>(this.labelUrl+'getalllabels',httpOptions2);
}

  

}
