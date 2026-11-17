import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { baseURL } from '../shared/baseurl';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Crypto } from '../shared/crypto';
import { CryptoService } from '../services/crypto.service';

@Component({
  imports: [MatCardModule, CommonModule, MatProgressSpinnerModule],
  providers: [
    {provide: 'baseURL', useValue: baseURL}
  ],
  changeDetection: ChangeDetectionStrategy.Eager,
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home implements OnInit {
  // crypto variable of type Crypto
  crypto?: Crypto;

  constructor(private cryptoservice: CryptoService, @Inject('baseURL') protected baseURL: string = "") {
  }

  ngOnInit() {
    this.cryptoservice.getFeaturedCrypto()
      .subscribe((crypto: Crypto) => this.crypto = crypto);
  }
}
