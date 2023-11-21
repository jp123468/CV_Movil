import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private alertController: AlertController) {}
  opcionSeleccionada: string = 'aboutme'; // Opción por defecto

  mostrarContenido(opcion: string) {
    this.opcionSeleccionada = opcion;
  }

  async mostrarInformacion(opcion: string) {
    let mensaje = '';
    let headerColor = '';
    // Aquí puedes definir la información correspondiente a cada ícono
    switch (opcion) {
      case 'WhatsApp':
        mensaje = 'Número de WhatsApp: +593 96 899 2749';
        headerColor = 'success';
        break;
      case 'LinkedIn':
        mensaje = 'Perfil de LinkedIn: www.linkedin.com/in/danny-vinueza-21a561269';
        headerColor = 'success';
        break;
      case 'GitHub':
        mensaje = 'Perfil de GitHub: https://github.com/DannyVinueza';
        headerColor = 'success';
        break;
      case 'Email':
        mensaje = 'Correo electrónico: vinuezadanny51@gmail.com';
        headerColor = 'success';
        break;
      default:
        mensaje = 'Información no disponible';
        break;
    }

    const alert = await this.alertController.create({
      header: opcion,
      message: mensaje,
      buttons: ['OK'],
      cssClass: headerColor ? `alert-${headerColor}` : ''
    });

    await alert.present();
  }
}
