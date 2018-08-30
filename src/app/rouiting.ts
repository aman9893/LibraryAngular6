import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { HomeComponent } from './home/home.component';
import { BooklistComponent } from './booklist/booklist.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BookHolderListComponent } from './book-holder-list/book-holder-list.component';
import { DashbordComponent } from './dashbord/dashbord.component';

export const AppRoutes: Routes = [
    { path: '', component: DashbordComponent },
    { path: 'dashbord', component: DashbordComponent },
    { path: 'home', component: DashbordComponent},
    { path: 'book_list', component: BooklistComponent },
    { path: 'book_holder_list', component: BookHolderListComponent },
    { path: 'issue_book_list', component: HomeComponent },
    { path: 'aboutus', component: AboutusComponent },
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
