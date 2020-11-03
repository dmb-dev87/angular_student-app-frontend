import { Routes } from '@angular/router';

import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'student-profile',   component: UserProfileComponent },
    { path: 'student-list',     component: TableListComponent },
    { path: 'student-profile/:id', component: UserProfileComponent },
];
