import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StateManagementService } from 'src/app/core/services/state-management.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  item: any;
  modal: boolean = false;

  state = this.stateManagementService.descriptionState.subscribe((data: boolean) => {
    this.modal = data;
  })
  
  items = [{
    url: 'https://www.amazon.com/Coffee-Distributor-Breville-Portafilter-Adjustable/dp/B0895GXJHQ/ref=sxbs_pa_sp_search_thematic_btf_sspa?content-id=amzn1.sym.b94723bb-56d2-4cc2-a92f-5bb07824404a%3Aamzn1.sym.b94723bb-56d2-4cc2-a92f-5bb07824404a&crid=25JB75DVYE1NM&cv_ct_cx=51mm%2Btamper%2Bkit&keywords=51mm%2Btamper%2Bkit&pd_rd_i=B0895GP4QF&pd_rd_r=cf6ac5cb-3898-4c2d-83d8-4e25ea337f03&pd_rd_w=OtqgV&pd_rd_wg=2oMnq&pf_rd_p=b94723bb-56d2-4cc2-a92f-5bb07824404a&pf_rd_r=4SXH2JR4YSX75PN0V1BN&qid=1700244619&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=51mm%2Btamper%2Bkit%2Caps%2C132&sr=1-2-ce0767e3-0aa7-4604-90aa-418f8b50fc94-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWNfYnRm&th=1',
    picture: 'https://m.media-amazon.com/images/I/81BpwPAAYmL._AC_SL1500_.jpg',
    description: 'Crema Coffee Products | 51mm Espresso Distributor/Leveler & Hand Tamper',
    price: '$44.00',
    bought: '0'
  }, {
    url: 'https://www.amazon.com/Coffee-Distributor-Breville-Portafilter-Adjustable/dp/B0895GXJHQ/ref=sxbs_pa_sp_search_thematic_btf_sspa?content-id=amzn1.sym.b94723bb-56d2-4cc2-a92f-5bb07824404a%3Aamzn1.sym.b94723bb-56d2-4cc2-a92f-5bb07824404a&crid=25JB75DVYE1NM&cv_ct_cx=51mm%2Btamper%2Bkit&keywords=51mm%2Btamper%2Bkit&pd_rd_i=B0895GP4QF&pd_rd_r=cf6ac5cb-3898-4c2d-83d8-4e25ea337f03&pd_rd_w=OtqgV&pd_rd_wg=2oMnq&pf_rd_p=b94723bb-56d2-4cc2-a92f-5bb07824404a&pf_rd_r=4SXH2JR4YSX75PN0V1BN&qid=1700244619&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=51mm%2Btamper%2Bkit%2Caps%2C132&sr=1-2-ce0767e3-0aa7-4604-90aa-418f8b50fc94-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWNfYnRm&th=1',
    picture: 'https://m.media-amazon.com/images/I/81BpwPAAYmL._AC_SL1500_.jpg',
    description: 'Crema Coffee Products | 51mm Espresso Distributor/Leveler & Hand Tamper',
    price: '$44.00',
    bought: '0'
  }, {
    url: 'https://www.amazon.com/Coffee-Distributor-Breville-Portafilter-Adjustable/dp/B0895GXJHQ/ref=sxbs_pa_sp_search_thematic_btf_sspa?content-id=amzn1.sym.b94723bb-56d2-4cc2-a92f-5bb07824404a%3Aamzn1.sym.b94723bb-56d2-4cc2-a92f-5bb07824404a&crid=25JB75DVYE1NM&cv_ct_cx=51mm%2Btamper%2Bkit&keywords=51mm%2Btamper%2Bkit&pd_rd_i=B0895GP4QF&pd_rd_r=cf6ac5cb-3898-4c2d-83d8-4e25ea337f03&pd_rd_w=OtqgV&pd_rd_wg=2oMnq&pf_rd_p=b94723bb-56d2-4cc2-a92f-5bb07824404a&pf_rd_r=4SXH2JR4YSX75PN0V1BN&qid=1700244619&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=51mm%2Btamper%2Bkit%2Caps%2C132&sr=1-2-ce0767e3-0aa7-4604-90aa-418f8b50fc94-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWNfYnRm&th=1',
    picture: 'https://m.media-amazon.com/images/I/81BpwPAAYmL._AC_SL1500_.jpg',
    description: 'Crema Coffee Products | 51mm Espresso Distributor/Leveler & Hand Tamper',
    price: '$44.00',
    bought: '0'
  }, {
    url: 'https://www.amazon.com/Coffee-Distributor-Breville-Portafilter-Adjustable/dp/B0895GXJHQ/ref=sxbs_pa_sp_search_thematic_btf_sspa?content-id=amzn1.sym.b94723bb-56d2-4cc2-a92f-5bb07824404a%3Aamzn1.sym.b94723bb-56d2-4cc2-a92f-5bb07824404a&crid=25JB75DVYE1NM&cv_ct_cx=51mm%2Btamper%2Bkit&keywords=51mm%2Btamper%2Bkit&pd_rd_i=B0895GP4QF&pd_rd_r=cf6ac5cb-3898-4c2d-83d8-4e25ea337f03&pd_rd_w=OtqgV&pd_rd_wg=2oMnq&pf_rd_p=b94723bb-56d2-4cc2-a92f-5bb07824404a&pf_rd_r=4SXH2JR4YSX75PN0V1BN&qid=1700244619&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=51mm%2Btamper%2Bkit%2Caps%2C132&sr=1-2-ce0767e3-0aa7-4604-90aa-418f8b50fc94-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWNfYnRm&th=1',
    picture: 'https://m.media-amazon.com/images/I/81BpwPAAYmL._AC_SL1500_.jpg',
    description: 'Crema Coffee Products | 51mm Espresso Distributor/Leveler & Hand Tamper',
    price: '$44.00',
    bought: '0'
  }]

  constructor(private stateManagementService: StateManagementService, private router: Router) { }

  clickGetDescription(item: any) {
    this.item = item;
    this.stateManagementService.descriptionState = true;
  }
}
