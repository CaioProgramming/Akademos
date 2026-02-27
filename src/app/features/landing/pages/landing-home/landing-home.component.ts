import { Component, EventEmitter, Output, AfterViewInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveGlowDirective } from '../../../../shared/directives/reactive-glow.directive';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-landing-home',
  standalone: true,
  imports: [CommonModule, ReactiveGlowDirective],
  templateUrl: './landing-home.component.html',
  styleUrl: './landing-home.component.css'
})
export class LandingHomeComponent implements AfterViewInit, OnDestroy {
  @Output() openRegister = new EventEmitter<void>();
  
  // Refs Cena 1
  @ViewChild('heroContainer', { static: true }) heroContainer!: ElementRef<HTMLElement>;
  @ViewChild('heroContent', { static: true }) heroContent!: ElementRef<HTMLElement>;

  // Refs Scene 2
  @ViewChild('excellenceScene', { static: true }) excellenceScene!: ElementRef<HTMLElement>;
  @ViewChild('excellenceContent', { static: true }) excellenceContent!: ElementRef<HTMLElement>;

  // Refs Scene 3
  @ViewChild('legacyScene', { static: true }) legacyScene!: ElementRef<HTMLElement>;
  @ViewChild('legacyContent', { static: true }) legacyContent!: ElementRef<HTMLElement>;
  @ViewChild('legacyNetwork', { static: true }) legacyNetwork!: ElementRef<HTMLElement>;

  // Refs Scene 4
  @ViewChild('fortressScene', { static: true }) fortressScene!: ElementRef<HTMLElement>;
  @ViewChild('fortressContent', { static: true }) fortressContent!: ElementRef<HTMLElement>;
  @ViewChild('fortressBox', { static: true }) fortressBox!: ElementRef<HTMLElement>;
  @ViewChild('fortressWalls', { static: true }) fortressWalls!: ElementRef<HTMLElement>;

  // Refs Scene 5
  @ViewChild('engineScene', { static: true }) engineScene!: ElementRef<HTMLElement>;
  @ViewChild('engineMockup', { static: true }) engineMockup!: ElementRef<HTMLElement>;

  // Refs Scene 6
  @ViewChild('outcomeScene', { static: true }) outcomeScene!: ElementRef<HTMLElement>;

  private scrollTriggers: ScrollTrigger[] = [];

  ngAfterViewInit() {
    this.initScene1();
    this.initScene2();
    this.initScene3();
    this.initScene4();
    this.initScene5();
    this.initScene6();
  }

  private initScene1() {
    // Scene 1: The Protagonist
    // Congela a tela (pin) e esmaece o conteúdo ao rolar para baixo
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.heroContainer.nativeElement,
        start: 'top top',
        end: '+=100%', // Duração do scroll para esta cena
        pin: true,
        scrub: 1, // Suaviza a animação interligada ao scroll (1 segundo de delay)
      }
    });

    tl.to(this.heroContent.nativeElement, {
      opacity: 0,
      y: -50,
      scale: 0.95,
      ease: 'power2.inOut'
    });
    
    // Armazena a referência para limparmos depois
    if (tl.scrollTrigger) {
      this.scrollTriggers.push(tl.scrollTrigger);
    }
  }

  private initScene2() {
    // Scene 2: Excellence
    // Aparece com o fundo pinned e faz capas flutuarem
    const covers = this.excellenceScene.nativeElement.querySelectorAll('.course-cover');
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.excellenceScene.nativeElement,
        start: 'top bottom', // Inicia quando o topo da Scene 2 tocar o fundo da tela (ou seja, entrando)
        end: '+=150%', // Duração mais longa de scroll para sentir as capas descendo
        scrub: 1.5,
      }
    });

    // Anima o texto entrando suavemente
    tl.from(this.excellenceContent.nativeElement, {
      opacity: 0,
      y: 80,
      ease: 'power2.out',
      duration: 1
    }, 0);

    // Efeito Parallax nas capas de vídeo
    covers.forEach((cover: Element, index: number) => {
      tl.fromTo(cover, 
        { y: 300 + (index * 100), opacity: 0 }, // Inicia bem abaixo
        { y: -300 - (index * 80), opacity: 1, ease: 'none', duration: 4 }, // Sobe até cima durante o scroll
        0 // Todas iniciam no "time 0" dessa timeline
      );
    });

    if (tl.scrollTrigger) {
      this.scrollTriggers.push(tl.scrollTrigger);
    }
  }

  private initScene3() {
    // Scene 3: Legacy (Stars Constellation)
    const nodes = this.legacyNetwork.nativeElement.querySelectorAll('.node-wrapper');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.legacyScene.nativeElement,
        start: 'top center',
        end: '+=80%',
        scrub: 1,
      }
    });

    tl.from(this.legacyContent.nativeElement, { opacity: 0, scale: 0.9, duration: 1 });
    
    nodes.forEach((node: Element, i: number) => {
      // Diferencia as estrelas por brilho e movimento
      tl.from(node, { 
        opacity: 0, 
        scale: 0,
        x: (i % 2 === 0 ? -120 : 120),
        y: (i < 2 ? -120 : 120),
        duration: 1.5 
      }, 0);
    });

    if (tl.scrollTrigger) {
      this.scrollTriggers.push(tl.scrollTrigger);
    }
  }

  private initScene4() {
    // Scene 4: Fortress (Security)
    // 1. Animação de Entrada: Surge conforme você rola vindo da cena anterior
    gsap.from(this.fortressBox.nativeElement, {
      scrollTrigger: {
        trigger: this.fortressScene.nativeElement,
        start: 'top bottom', // Quando o topo da section entra no fundo da tela
        end: 'top top',    // Até ele encostar no topo
        scrub: true,
      },
      opacity: 0,
      scale: 0.8,
      y: 100,
      ease: 'power1.out'
    });

    // 2. Animação de Pin: Trava e fecha as paredes
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.fortressScene.nativeElement,
        start: 'top top',
        end: '+=100%',
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          if (self.progress > 0.8) {
            this.fortressScene.nativeElement.classList.add('is-locked');
          } else {
            this.fortressScene.nativeElement.classList.remove('is-locked');
          }
        }
      }
    });

    const wallsNode = this.fortressWalls.nativeElement;
    tl.to(wallsNode.querySelector('.wall-top'), { width: '100%', duration: 1 }, "lock");
    tl.to(wallsNode.querySelector('.wall-right'), { height: '100%', duration: 1 }, "lock");
    tl.to(wallsNode.querySelector('.wall-bottom'), { width: '100%', duration: 1 }, "lock");
    tl.to(wallsNode.querySelector('.wall-left'), { height: '100%', duration: 1 }, "lock");

    if (tl.scrollTrigger) {
      this.scrollTriggers.push(tl.scrollTrigger);
    }
  }

  private initScene5() {
    // Scene 5: Engine (Frictionless UI Mockup)
    const mockup = this.engineMockup.nativeElement.querySelector('.app-mockup');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.engineScene.nativeElement,
        start: 'top 60%',
        end: 'bottom 80%',
        scrub: 1
      }
    });

    // O mockup rotaciona no eixo X e Y como se estivesse deitado e "levanta"
    // parecendo que a UI está se ajustando suavemente para você.
    if (mockup) {
      tl.to(mockup, {
        rotateX: 0,
        y: 0,
        scale: 1,
        duration: 2,
        ease: 'power2.out'
      });
    }

    if (tl.scrollTrigger) {
      this.scrollTriggers.push(tl.scrollTrigger);
    }
  }

  private initScene6() {
    // Scene 6: Bento Grid (Outcome)
    const cards = this.outcomeScene.nativeElement.querySelectorAll('.bento-card');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.outcomeScene.nativeElement,
        start: 'top 80%',
      }
    });

    // Anima os cards do Bento Grid subindo em escadinha (Stagger)
    tl.from(cards, {
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'back.out(1.2)'
    });

    if (tl.scrollTrigger) {
      this.scrollTriggers.push(tl.scrollTrigger);
    }
  }

  ngOnDestroy() {
    // É vital matar os ScrollTriggers ao destruir o componente no Angular para evitar vazamento de memória e bugs de layout
    this.scrollTriggers.forEach(trigger => trigger.kill());
    ScrollTrigger.refresh();
  }

  onRegisterClick() {
    this.openRegister.emit();
  }
}
