import { Component, Injector, OnInit } from '@angular/core';
import { MatDialogRef, MatCheckboxChange } from '@angular/material';
import { finalize } from 'rxjs/operators';
import * as _ from 'lodash';
import { AppComponentBase } from '@shared/app-component-base';
import {
  CostCentersServiceProxy,
  CostCentersDto,
  ListResultDtoOfPermissionDto,
  PermissionDto,
  CreateCostCentersDto
} from '@shared/service-proxies/service-proxies';



@Component({
  templateUrl: 'create-costCenters-dialog.component.html',
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

 

export class CreatecostCentersDialogComponent extends AppComponentBase
  implements OnInit {
    
    public  AllGroup: any[];
    public AllStat:any[];
    public AllType:any[];
    public AllRank:any[];
    public AllCurnsy:any[];
    SelectGroup;
    SelectState;
    SelectType;
    SelectRank;
    SelectCurnys;
     
  

  saving = false;
  chartOfAccounts: CostCentersDto = new CostCentersDto ();
  permissions: PermissionDto[] = [];
  grantedPermissionNames: string[] = [];
  checkedPermissionsMap: { [key: string]: boolean } = {};
  defaultPermissionCheckedStatus = true;

  constructor(
    injector: Injector,
    private _chartOfAccountsService: CostCentersServiceProxy,
    private _dialogRef: MatDialogRef<CreatecostCentersDialogComponent>
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this. AllGroups();
    this.AllStats();
    this.AllTypes();
    this.AllRanks();
    
   
  }

  AllGroups() {
    this._chartOfAccountsService.getAllCenterGroupes().subscribe(x => {
        this.AllGroup = x ;
       
    });
 }  

 AllStats() {
  this._chartOfAccountsService.getAllCenterState().subscribe(x => {
      this.AllStat = x ;
     
  });
}  
AllTypes() {
  this._chartOfAccountsService.getAllACenterType().subscribe(x => {
      this.AllType = x ;
     
  });
}  
AllRanks() {
  this._chartOfAccountsService.getAllCenterRanks().subscribe(x => {
      this.AllRank = x ;
     
  });
} 

 
 
educationLevelChangeAction()
{

  this.chartOfAccounts.centerGroupe = this.SelectGroup;
this.chartOfAccounts.centerState = this. SelectState;
 this.chartOfAccounts.centerType = this.SelectType;
 this.chartOfAccounts.centerRankName = this.SelectRank;
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

  save(): void {
    this.saving = true;



    const chartOfAccounts_ = new  CreateCostCentersDto();
    chartOfAccounts_.init(this.chartOfAccounts);

    this._chartOfAccountsService
      .create(chartOfAccounts_)
      .pipe(
        finalize(() => {
          this.saving = false;
        })
      )
      .subscribe(() => {
        this.notify.info(this.l('SavedSuccessfully'));
        this.close(true);
      });
  }

  close(result: any): void {
    this._dialogRef.close(result);
  }
}
