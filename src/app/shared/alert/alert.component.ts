import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-alert',
    templateUrl: 'alert.component.html',
    styleUrls: ['alert.component.css']
})
export class AlertComponent implements OnInit {
    @Input() message: string;
    constructor () { }

    ngOnInit() {
        this.showModel()
        console.log('error show');
    }

    showModel() {
        // get modals
        const modals = document.getElementsByClassName('modal');

        // on every modal change state like in hidden modal
        for (let i = 0; i < modals.length; i++) {
            modals[i].classList.add('in');
            modals[i].setAttribute('aria-hidden', 'false');
            modals[i].setAttribute('style', 'display: block');
        }

        // get modal backdrops
        const modalsBackdrops = document.getElementsByClassName('modal-backdrop');

        // remove every modal backdrop
        for (let i = 0; i < modalsBackdrops.length; i++) {
            document.body.appendChild(modalsBackdrops[i]);
        }
    }

    closeOneModal(modalId) {

        // get modals
        const modals = document.getElementsByClassName('modal');

        // on every modal change state like in hidden modal
        for (let i = 0; i < modals.length; i++) {
            modals[i].classList.remove('show');
            modals[i].setAttribute('aria-hidden', 'true');
            modals[i].setAttribute('style', 'display: none');
        }

        // get modal backdrops
        const modalsBackdrops = document.getElementsByClassName('modal-backdrop');

        // remove every modal backdrop
        for (let i = 0; i < modalsBackdrops.length; i++) {
            document.body.removeChild(modalsBackdrops[i]);
        }
    }

}
