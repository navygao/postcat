import { Injectable } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ModalButtonOptions } from 'ng-zorro-antd/modal';
@Injectable()
export class ModalService {
  constructor(private modalService: NzModalService) {}
  create(inOpts) {
    const modalOpts: {
      [propName: string]: any;
      nzTitle: string;
      nzContent: any;
      nzFooter?: null | ModalButtonOptions[];
    } = {
      nzTitle: 'modal title',
      nzContent: inOpts.nzContent,
      nzClosable: 'nzClosable' in inOpts ? inOpts.nzClosable : true,
      nzComponentParams: {
        title: 'title in component',
        subtitle: 'component sub title，will be changed after 2 sec',
      },
      nzFooter: [
        {
          label: '确认',
          type: 'primary',
          onClick: () => {
            if (inOpts.nzOnOk) {
              inOpts.nzOnOk();
            } else {
              setTimeout(() => {
                window.eo.closeModal();
              }, 123);
              modal.destroy();
            }
          },
        },
        {
          label: '取消',
          onClick: () =>{
            setTimeout(() => {
              window.eo.closeModal();
            }, 123);
            modal.destroy();
          } 
        },
      ],
    };
    Object.assign(modalOpts, inOpts);
    setTimeout(() => {
      window.eo.openModal();
    }, 123);
    const modal = this.modalService.create(modalOpts);
    //modal.afterOpen.subscribe(() => window.eo.openModal());
    //modal.afterClose.subscribe(() => window.eo.closeModal());
    return modal;
  }
}
