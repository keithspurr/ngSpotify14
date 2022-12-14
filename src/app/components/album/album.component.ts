import { Component, OnInit, Input, Directive, Injectable, ViewChild  } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Artist} from '../../../../Artist';
import {Album} from '../../../../Album';
import {SpotifyService} from '../../services/spotify.service';
import { map } from 'rxjs/operators';


@Component({
    //moduleId: module.id,
    // tslint:disable-next-line:component-selector
    selector: 'album',
    templateUrl: 'album.component.html',
    styleUrls: ['album.component.css']
})
@Input()
export class AlbumComponent implements OnInit {
    id: string;
    album: any;

    constructor(
        private _spotifyService: SpotifyService,
        private _route: ActivatedRoute) {

    }

    ngOnInit() {
        this._route.params.pipe(
            map(params => params['id']))
                .subscribe((id) => {
                    this._spotifyService.getAlbum(id)
                        .subscribe(album => {
                            this.album = album;
                        });
                });
    }
}
