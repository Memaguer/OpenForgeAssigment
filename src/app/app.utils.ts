import { Injectable } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class AppUtils {

  constructor(
    private toastController: ToastController,
    private loadingController: LoadingController
  ) { }

  async presentToast(messsage: string, type: string) {
    const toast = await this.toastController.create({
      message: messsage,
      duration: 2000,
      position: 'top',
      cssClass: `toast-${type}`
    });
    return await toast.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'app-loader',
      message: `<img src="assets/gif/loader.gif"><p>Cargando...</p>`,
      spinner: null,
      mode: 'ios'
    });
    await loading.present();
  }

  async dismissLoading() {
    return await this.loadingController.dismiss().then(() => {});
  }
}