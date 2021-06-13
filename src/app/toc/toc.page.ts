import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {
  public chapters = [
    {
      title: 'Chapter I | A Long-expected Party',
      url: '/chapter1'
    },
    {
      title: 'Chapter II | The Shadow of the Past',
      url: '/chapter2'
    },
    {
      title: 'Chapter III | Three is Company',
      url: '/chapter3'
    },
    {
      title: 'Chapter IV | A Short Cut to Mushrooms',
      url: '/chapter4'
    },
    {
      title: 'Chapter V | A Conspiracy Unmasked',
      url: '/chapter5'
    },
    {
      title: 'Chapter VI | The Old Forest',
      url: '/chapter6'
    },
    {
      title: 'Chapter VII | In the House of Tom Bombadil',
      url: '/chapter7'
    },
    {
      title: 'Chapter VIII | Fog on the Barrow-downs',
      url: '/chapter8'
    },
    {
      title: 'Chapter IX | At the Sign of the Prancing Pony',
      url: '/chapter9'
    },
    {
      title: 'Chapter X | Strider',
      url: '/chapter10'
    },
    {
      title: 'Chapter XI | A Knife in the Dark',
      url: '/chapter11'
    },
    {
      title: 'Chapter XII | Flight to the Ford',
      url: '/chapter12'
    },
  ];

  constructor() { }

  ngOnInit() { }

}
