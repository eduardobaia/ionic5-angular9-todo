import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewTaskPage } from './../add-new-task/add-new-task.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todoList = [
    {
    itemName: 'Coding',
    itemDueDate: '10-10-21',
    itemPriority: 'High',
    itemCategory: 'work'
  },
  {
    itemName: 'Design',
    itemDueDate: '01-10-21',
    itemPriority: 'High',
    itemCategory: 'work'
  },
  {
    itemName: 'Coding',
    itemDueDate: '02-10-21',
    itemPriority: 'Middle',
    itemCategory: 'personal'
  },
  {
    itemName: 'Workout',
    itemDueDate: '07-10-21',
    itemPriority: 'Low',
    itemCategory: 'personal'
  }]

  today: number = Date.now();
  constructor(private modalCtrl: ModalController) { }

  async addTask() {
    const modal = await this.modalCtrl.create({
      component: AddNewTaskPage
    });


    modal.onDidDismiss().then(newTaskObjt => {
      console.log(newTaskObjt);
      this.todoList.push(newTaskObjt.data);
    })

    return await modal.present();
  }

  delete(index){
    this.todoList.splice(index, 1)
  }

}
