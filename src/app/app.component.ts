import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { LegacyJSONLoader } from 'three/examples/jsm/loaders/deprecated/LegacyJSONLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  customRequest;
  nzAccept = '.json';

  ngOnInit(): void {
    this.customRequest = item => {
      const fileName = item.file.name;
      const extension = fileName.split('.').pop();
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const data = e.target.result;
        const jsonLoaser = new LegacyJSONLoader();
        const { geometry, materials } = jsonLoaser.parse(
          JSON.parse(data),
          THREE.LoaderUtils.extractUrlBase('/')
        );
      };
      reader.readAsText(item.file);
      return of(1).subscribe();
    };
  }
}
