import { Component, Injector, OnInit } from '@angular/core';
import { MatDialogRef, MatCheckboxChange } from '@angular/material';
import { finalize } from 'rxjs/operators';
import * as _ from 'lodash';
import { AppComponentBase } from '@shared/app-component-base';
import {
  ChartOfAccountsServiceProxy,
  ChartOfAccountsDto,
  ListResultDtoOfPermissionDto,
  PermissionDto,
  CreateChartOfAccountsDto
} from '@shared/service-proxies/service-proxies';



@Component({
  templateUrl: 'create-chartOfAccounts-dialog.component.html',
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

 

export class CreateChartOfAccountsDialogComponent extends AppComponentBase
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
  chartOfAccounts: ChartOfAccountsDto = new ChartOfAccountsDto();
  permissions: PermissionDto[] = [];
  grantedPermissionNames: string[] = [];
  checkedPermissionsMap: { [key: string]: boolean } = {};
  defaultPermissionCheckedStatus = true;

  constructor(
    injector: Injector,
    private _chartOfAccountsService: ChartOfAccountsServiceProxy,
    private _dialogRef: MatDialogRef<CreateChartOfAccountsDialogComponent>
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this. AllGroups();
    this.AllStats();
    this.AllTypes();
    this.AllRanks();
    this.AllCurencey();
    
   
  }

  AllGroups() {
    this._chartOfAccountsService.getAllGroupes().subscribe(x => {
        this.AllGroup = x ;
       
    });
 }  

 AllStats() {
  this._chartOfAccountsService.getAllAccountState().subscribe(x => {
      this.AllStat = x ;
     
  });
}  
AllTypes() {
  this._chartOfAccountsService.getAllAccountType().subscribe(x => {
      this.AllType = x ;
     
  });
}  
AllRanks() {
  this._chartOfAccountsService.getAllRanks().subscribe(x => {
      this.AllRank = x ;
     
  });
} 
AllCurencey() {
  this._chartOfAccountsService.getAllcurrency().subscribe(x => {
      this.AllCurnsy = x ;
     
  });
} 
 
 
educationLevelChangeAction()
{

  this.chartOfAccounts.accountGroupeName= this.SelectGroup;
this.chartOfAccounts.accountState= this. SelectState;
 this.chartOfAccounts.accountType=this.SelectType;
 this.chartOfAccounts.accountRankName=this.SelectRank;
 this.chartOfAccounts.currencyName=this.SelectCurnys;
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



    const chartOfAccounts_ = new CreateChartOfAccountsDto();
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
