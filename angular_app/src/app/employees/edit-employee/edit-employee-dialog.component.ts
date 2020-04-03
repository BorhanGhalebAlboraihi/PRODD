import { Component, Injector, Inject, OnInit, Optional } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatCheckboxChange
} from '@angular/material';
import { finalize } from 'rxjs/operators';
import * as _ from 'lodash';
import { AppComponentBase } from '@shared/app-component-base';
import {
  EmployeeServiceProxy,
  
  EmployeeDto,
  PermissionDto
} from '@shared/service-proxies/service-proxies';

@Component({
  templateUrl: 'edit-employee-dialog.component.html',
  styles: [
    `
      mat-form-field {
        width: 100%;
      }
      mat-checkbox {
        padding-bottom: 5px;
      }
    `
  ]
})
export class EditEmployeeDialogComponent extends AppComponentBase
  implements OnInit {
  saving = false;
  employee: EmployeeDto = new EmployeeDto();
  permissions: PermissionDto[] = [];
  grantedPermissionNames: string[] = [];
  checkedPermissionsMap: { [key: string]: boolean } = {};

  constructor(
    injector: Injector,
    private _employeeService: EmployeeServiceProxy,
    private _dialogRef: MatDialogRef<EditEmployeeDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) private _id: number
  ) {
    super(injector);
  }

  ngOnInit(): void {
    
  }

  setInitialPermissionsStatus(): void {
    _.map(this.permissions, item => {
      this.checkedPermissionsMap[item.name] = this.isPermissionChecked(
        item.name
      );
    });
  }

  isPermissionChecked(permissionName: string): boolean {
    return _.includes(this.grantedPermissionNames, permissionName);
  }

  onPermissionChange(permission: PermissionDto, $event: MatCheckboxChange) {
    this.checkedPermissionsMap[permission.name] = $event.checked;
  }

  getCheckedPermissions(): string[] {
    const permissions: string[] = [];
    _.forEach(this.checkedPermissionsMap, function(value, key) {
      if (value) {
        permissions.push(key);
      }
    });
    return permissions;
  }

  

  close(result: any): void {
    this._dialogRef.close(result);
  }
}
