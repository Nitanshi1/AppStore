import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, Version } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ValidatorFn,Validator ,AbstractControl} from '@angular/forms';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { NgbNavModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { Location } from '@angular/common';
import { AppData } from '../myapplication';
import { HomeService } from '../home.service';
@Component({
  selector: 'app-editform',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule,NgIf,NgFor,RouterOutlet,NgbToastModule,NgbNavModule],
  templateUrl: './editform.component.html',
  styleUrl: './editform.component.css'
})
export class EditformComponent {


  active = 'top';
  show:boolean=false;
  autohide:boolean=true;
  get appname(){
    return this.form.get('appname');
  }
  get description(){
    return this.form.get('description');
  }
  get releaseDate(){
    return this.form.get('releaseDate');
  }
  get version(){
    return this.form.get('version');
  }
  get genre(){
    return this.form.get('genre');
  }
  get DownloadCount(){
    return this.form.get('DownloadCount');
  }
  get avgRating(){
    return this.form.get('avgRating');
  }
 
  status=false;
 form!:FormGroup;
 app!:AppData;
  isTrue() {
    this.status = !this.status;
    this.form.patchValue({
      visibility:this.status
    })
   
  }
  constructor(private fb: FormBuilder,
    private location:Location,
  private activatedroute:ActivatedRoute
,private homeservice:HomeService) {}
  
    
  ngOnInit(): void {
    this.form = this.fb.group({
      appName: ['', [Validators.required, Validators.minLength(3)]],
      description: ['',[Validators.required, Validators.minLength(10)]],
      version: ['', Validators.required],
      releaseDate: ['',this.releaseDateValidator()],
      genre: ['',Validators.required],
      DownloadCount:[''],
      avgRating:[''],
      visibility:[this.status, Validators.required]
    });
    this.edit();
  }
  releaseDateValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const releaseDate = control.value;
      const currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0); 

      if (releaseDate && releaseDate >= currentDate) {
        return { 'invalidReleaseDate': true };
      }
      return null;
    };
  }

 edit():void{
    const id1 = Number(this.activatedroute.snapshot.paramMap.get('id'));
    if(id1){
    this.homeservice.getallappdetails(id1).subscribe(i=>{
     this.app=i
     this.form.patchValue({
      user_id: this.app?.user_id,
       appName:this.app?.app_Name, 
       genre:this.app?.genre,
       description:this.app?.description,
       version:this.app?.version,
      releaseDate:this.app.releaseDate,
      visibility:this.app.visibility,
      DownloadCount:this.app.downloadCount,
      avgRating:this.app.averageRating,
      imgpath:this.app.imgpath,
      comments:this.app.comments,
     });
    });
 }
}
 save(): void{
  if(this.form.valid){
    const id1 = Number(this.activatedroute.snapshot.paramMap.get('id'));
    if(id1){
      const updateField={
        id:id1,
      ...this.form.value,
      };
      this.homeservice.updateapp(updateField).subscribe(()=>{
        this.goback();
        this.show=true;
      })
    }
  }
 }

  onSubmit() {
   
      console.log(this.form.value);
      this.form.reset();
      this.show = true;
    }
    
    
    close() {
      this.show = false;
      setTimeout(() => (this.show = true), 3000);
    }
    goback(): void {
      this.location.back();
    }
  
  }


