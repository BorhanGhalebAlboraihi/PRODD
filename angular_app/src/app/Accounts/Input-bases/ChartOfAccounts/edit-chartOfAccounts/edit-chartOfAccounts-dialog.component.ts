import { Component, Injector, Inject, OnInit, Optional } from "@angular/core";
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatCheckboxChange
} from "@angular/material";
import { finalize } from "rxjs/operators";
import * as _ from "lodash";
import { AppComponentBase } from "@shared/app-component-base";
import {
  ChartOfAccountsServiceProxy,
  ChartOfAccountsDto,
  PermissionDto
  
  
} from "@shared/service-proxies/service-proxies";
import { MatAutocompleteModule } from "@angular/material";
import { Subject } from "rxjs";
@Component({
  templateUrl: "edit-chartOfAccounts-dialog.component.html",
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
export class EditChartOfAccountsDialogComponent extends AppComponentBase
  implements OnInit {
  public AllGroup: any[];
  public AllStat: any[];
  public AllType: any[];
  public AllRank: any[];
  public AllCurnsy: any[];
  public getCenter: any;
  public Costcenter: any[] = [];
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
  A: any[];
  constructor(
    injector: Injector,
    private _chartOfAccountsService: ChartOfAccountsServiceProxy,
    private _dialogRef: MatDialogRef<EditChartOfAccountsDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) private _id: number
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this._chartOfAccountsService
      .getChartOfAccountsForEdit(this._id)
      .subscribe((result: ChartOfAccountsDto) => {
        this.chartOfAccounts = result;
        this.AllGroups();
        this.AllStats();
        this.AllTypes();
        this.AllRanks();
        this.AllCurencey();
       
      });
  }

  AllGroups() {
    this._chartOfAccountsService.getAllGroupes().subscribe(x => {
      this.AllGroup = x;
    });
  }
  

  

  AllStats() {
    this._chartOfAccountsService.getAllAccountState().subscribe(x => {
      this.AllStat = x;
    });
  }
  AllTypes() {
    this._chartOfAccountsService.getAllAccountType().subscribe(x => {
      this.AllType = x;
    });
  }
  AllRanks() {
    this._chartOfAccountsService.getAllRanks().subscribe(x => {
      this.AllRank = x;
    });
  }
  AllCurencey() {
    this._chartOfAccountsService.getAllcurrency().subscribe(x => {
      this.AllCurnsy = x;
    });
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

  educationLevelChangeAction() {
    this.chartOfAccounts.accountGroupeName = this.SelectGroup;
    this.chartOfAccounts.accountState = this.SelectState;
    this.chartOfAccounts.accountType = this.SelectType;
    this.chartOfAccounts.accountRankName = this.SelectRank;
    this.chartOfAccounts.currencyName = this.SelectCurnys;
  }

  save(): void {
    this.saving = true;

    this._chartOfAccountsService
      .update(this.chartOfAccounts)
      .pipe(
        finalize(() => {
          this.saving = false;
        })
      )
      .subscribe(() => {
        this.notify.info(this.l("SavedSuccessfully"));
        this.close(true);
      });
  }

  close(result: any): void {
    this._dialogRef.close(result);
  }
}
