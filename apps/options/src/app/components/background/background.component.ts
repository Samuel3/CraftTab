import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { BackgroundService, Triangle } from '../../services/background.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'options-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class BackgroundComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  
  private subscription = new Subscription();
  private resizeObserver?: ResizeObserver;

  constructor(private backgroundService: BackgroundService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.backgroundService.backgroundConfig$.subscribe(config => {
        if (config) {
          this.renderBackground(config.seed);
        }
      })
    );
  }

  ngAfterViewInit(): void {
    this.setupCanvas();
    this.setupResizeObserver();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }

  private setupCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    
    // Since canvas has position: fixed, use viewport dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Initial render with current seed
    const currentSeed = this.backgroundService.getCurrentSeed();
    this.renderBackground(currentSeed);
  }

  private setupResizeObserver(): void {
    const canvas = this.canvasRef.nativeElement;
    
    this.resizeObserver = new ResizeObserver(() => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const currentSeed = this.backgroundService.getCurrentSeed();
      this.renderBackground(currentSeed);
    });
    
    // Observe the document body for viewport changes
    this.resizeObserver.observe(document.body);
  }

  private renderBackground(seed: string): void {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    
    if (!ctx || !canvas.width || !canvas.height) {
      return;
    }

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Create gradients
    const horizontalGradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    horizontalGradient.addColorStop(0, 'rgba(32, 44, 57, 0.1)');
    horizontalGradient.addColorStop(1, 'rgba(242, 212, 146, 0.1)');

    const verticalGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    verticalGradient.addColorStop(0, 'rgba(184, 176, 141, 0.1)');
    verticalGradient.addColorStop(1, 'rgba(242, 149, 89, 0.1)');

    // Apply base gradients
    ctx.fillStyle = horizontalGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.globalCompositeOperation = 'multiply';
    ctx.fillStyle = verticalGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.globalCompositeOperation = 'source-over';

    // Generate and draw triangles
    const triangles = this.backgroundService.generateTriangles(seed, canvas.width, canvas.height);
    
    triangles.forEach(triangle => {
      this.drawTriangle(ctx, triangle);
    });
  }

  private drawTriangle(ctx: CanvasRenderingContext2D, triangle: Triangle): void {
    ctx.fillStyle = triangle.color;
    ctx.beginPath();
    
    triangle.points.forEach((point, index) => {
      if (index === 0) {
        ctx.moveTo(point.x, point.y);
      } else {
        ctx.lineTo(point.x, point.y);
      }
    });
    
    ctx.closePath();
    ctx.fill();
  }
}