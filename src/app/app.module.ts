import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ROUTING } from './rouiting';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyServiceService } from './service/my-service.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BooklistComponent } from './booklist/booklist.component';
import { AddBookComponent } from './add-book/add-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FooterComponent } from './footer/footer.component';
import { BookHolderComponent } from './book-holder/book-holder.component';
import { BookHolderListComponent } from './book-holder-list/book-holder-list.component';
import { BookHolderCreateComponent } from './book-holder-create/book-holder-create.component';
import { BookHolderDeleteComponent } from './book-holder-delete/book-holder-delete.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { UpdateBookHolderListComponent } from './update-book-holder-list/update-book-holder-list.component';
import { DataService } from './data.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooklistComponent,
    AddBookComponent,
    DeleteBookComponent,
    CreateBookComponent,
    AboutusComponent,
    FooterComponent,
    BookHolderComponent,
    BookHolderListComponent,
    BookHolderCreateComponent,
    BookHolderDeleteComponent,
    NavbarComponent,
    DashbordComponent,
    UpdateBookHolderListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, BrowserAnimationsModule,
    FormsModule ,
    ReactiveFormsModule,
    ROUTING, MaterialModule
  ],
  entryComponents: [
     BookHolderCreateComponent,
     DeleteBookComponent, UpdateBookHolderListComponent,
     CreateBookComponent, BookHolderComponent,
     BookHolderDeleteComponent , LoginComponent],

  providers: [MyServiceService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
