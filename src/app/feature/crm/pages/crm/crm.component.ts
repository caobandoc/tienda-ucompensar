import { Component } from '@angular/core';
import {ToolbarComponent} from '../../components/toolbar/toolbar.component';
import {TableComponent} from '../../components/table/table.component';

@Component({
  selector: 'app-crm',
  imports: [
    ToolbarComponent,
    TableComponent
  ],
  templateUrl: './crm.component.html',
  styleUrl: './crm.component.scss'
})
export class CrmComponent {

}
