import { Component, Injector, OnInit } from '@angular/core';
import { MatDialogRef, MatCheckboxChange } from '@angular/material';
import { finalize } from 'rxjs/operators';
import * as _ from 'lodash';
import { AppComponentBase } from '@shared/app-component-base';
import {
  EmployeeServiceProxy,
  EmployeeDto,
  ListResultDtoOfPermissionDto,
  PermissionDto
} from '@shared/service-proxies/service-proxies';

@Component({
  templateUrl: 'create-employee-dialog.component.html',
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
export class CreateEmployeeDialogComponent extends AppComponentBase
  implements OnInit {
  saving = false;
  employee: EmployeeDto = new EmployeeDto();
  permissions: PermissionDto[] = [];
  grantedPermissionNames: string[] = [];
  checkedPermissionsMap: { [key: string]: boolean } = {};
  defaultPermissionCheckedStatus = true;

  constructor(
    injector: Injector,
    private _employeeService: EmployeeServiceProxy,
    private _dialogRef: MatDialogRef<CreateEmployeeDialogComponent>
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
    // just return default permission checked status
    // it's better to use a setting
    return this.defaultPermissionCheckedStatus;
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
